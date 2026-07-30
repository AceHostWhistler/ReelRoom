import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import smtpTransport from 'nodemailer-smtp-transport';
import fs from 'fs';
import path from 'path';

const DEBUG_MODE = process.env.NODE_ENV === 'development';
const SITE_NAME = 'Cotswolds Vacation';
const DEFAULT_CONTACT_EMAIL = 'privacy@cotswoldsvacation.com';

const saveSubmissionToFile = async (data: Record<string, unknown>) => {
  try {
    const dir = path.join(process.cwd(), 'contact-submissions');
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }

    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const filename = path.join(dir, `submission-${timestamp}.json`);
    fs.writeFileSync(filename, JSON.stringify(data, null, 2));
    console.log(`Saved submission to ${filename}`);
    return true;
  } catch (error) {
    console.error("Failed to save submission to file:", error);
    return false;
  }
};

const createTransport = () => {
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASSWORD;
  const recipientEmail = process.env.CONTACT_EMAIL || DEFAULT_CONTACT_EMAIL;

  if (DEBUG_MODE) {
    console.log("SMTP_USER:", smtpUser ? "Set" : "Not Set");
    console.log("SMTP_PASSWORD:", smtpPass ? "Set" : "Not Set");
    console.log("CONTACT_EMAIL:", recipientEmail);
  }

  if (!smtpUser || !smtpPass) {
    console.warn("SMTP credentials not configured — submissions will be saved to disk only");
    return null;
  }

  const smtpConfig = {
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 465,
    secure: process.env.SMTP_SECURE !== 'false',
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  };

  try {
    const transport = nodemailer.createTransport(smtpTransport(smtpConfig));
    return { transport, recipient: recipientEmail, smtpUser };
  } catch (err) {
    console.error("Failed to create transport:", err);
    return null;
  }
};

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<{ message: string } | { error: string, details?: string }>
) {
  const submissionTimestamp = new Date().toISOString();

  if (request.method === "POST") {
    try {
      const formData = request.body;
      const {
        name = '',
        email = '',
        phone = '',
        message = '',
        inquiryType = "Website Inquiry",
        dates,
        propertyInterest,
        guests,
      } = formData;

      if (!name || !email || !phone || !message) {
        return response.status(400).json({
          error: "Missing required fields",
          details: `Required: name, email, phone, message. Missing: ${!name ? 'name ' : ''}${!email ? 'email ' : ''}${!phone ? 'phone ' : ''}${!message ? 'message' : ''}`
        });
      }

      const submissionData = {
        name,
        email,
        phone,
        message,
        inquiryType,
        dates,
        propertyInterest,
        guests,
        submittedAt: submissionTimestamp,
      };

      await saveSubmissionToFile(submissionData);

      let isEmailSent = false;
      const transportInfo = createTransport();

      if (transportInfo) {
        const { transport, recipient, smtpUser } = transportInfo;

        try {
          const mailOptions = {
            from: `"${SITE_NAME}" <${smtpUser}>`,
            to: recipient,
            subject: `[${SITE_NAME}] New ${inquiryType} from ${name}`,
            html: generateEmail(submissionData),
            replyTo: email,
            text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nInquiry: ${inquiryType}\nMessage: ${message}`,
          };

          await transport.verify();
          const info = await transport.sendMail(mailOptions);
          console.log("Email sent successfully:", info.messageId);
          isEmailSent = true;
        } catch (emailError: unknown) {
          const message = emailError instanceof Error ? emailError.message : String(emailError);
          console.error("Error sending email:", message);
        }
      }

      return response.status(200).json({
        message: isEmailSent
          ? "Your message has been sent successfully. We'll be in touch soon!"
          : "Your inquiry has been recorded. Our team will review it shortly."
      });
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : "Unknown error occurred";
      console.error("Error processing contact form:", error);
      return response.status(500).json({
        error: "We couldn't process your request at this time",
        details: message
      });
    }
  }

  return response.status(405).json({ error: "Method not allowed" });
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};

function generateEmail({
  name,
  email,
  phone,
  message,
  inquiryType,
  dates,
  propertyInterest,
  guests,
}: {
  name: string;
  email: string;
  phone: string;
  message: string;
  inquiryType: string;
  dates?: string;
  propertyInterest?: string;
  guests?: string;
}) {
  return `
    <html>
        <head>
            <meta charset="utf-8">
            <title>${SITE_NAME} - New Inquiry</title>
            <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; }
                .email-wrapper { max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #ddd; }
                .header { background-color: #2c5e1a; padding: 20px; text-align: center; }
                .content { padding: 20px; }
                .info-section { margin-bottom: 20px; border-left: 4px solid #2c5e1a; padding-left: 15px; }
                .message-content { background-color: #f7f7f7; padding: 15px; border-radius: 5px; margin-top: 10px; }
                .footer { text-align: center; padding: 15px; font-size: 12px; background-color: #f7f7f7; color: #666; }
            </style>
        </head>
        <body>
            <div class="email-wrapper">
                <div class="header">
                    <h1 style="color: #ffffff; margin: 0;">${SITE_NAME}</h1>
                </div>
                <div class="content">
                    <h1>New ${inquiryType}</h1>
                    <p>You have received a new inquiry from the ${SITE_NAME} website contact form.</p>
                    <div class="info-section">
                        <h2>Contact Information</h2>
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                        <p><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
                        <p><strong>Inquiry Type:</strong> ${inquiryType}</p>
                    </div>
                    ${propertyInterest ? `<div class="info-section"><h2>Property Interest</h2><p>${propertyInterest}</p></div>` : ''}
                    ${dates || guests ? `<div class="info-section"><h2>Travel Details</h2>${dates ? `<p><strong>Dates:</strong> ${dates}</p>` : ''}${guests ? `<p><strong>Guests:</strong> ${guests}</p>` : ''}</div>` : ''}
                    <div class="info-section">
                        <h2>Message</h2>
                        <div class="message-content">${message.replace(/\n/g, '<br>')}</div>
                    </div>
                    <div style="margin-top: 30px; text-align: center;">
                        <a href="mailto:${email}?subject=RE: Your ${SITE_NAME} inquiry" style="background-color: #2c5e1a; color: white; padding: 10px 20px; text-decoration: none; border-radius: 4px; font-weight: bold;">Reply to ${name}</a>
                    </div>
                </div>
                <div class="footer">
                    <p>This email was sent from the ${SITE_NAME} website contact form.</p>
                    <p>&copy; ${new Date().getFullYear()} ${SITE_NAME}. All rights reserved.</p>
                </div>
            </div>
        </body>
    </html>
  `;
}
