import React from "react";
import Head from "next/head";
import Link from "next/link";
import MobileMenu from "@/components/MobileMenu";

const TermsOfService = () => {
  return (
    <>
      <Head>
        <title>Terms of Service | Cotswolds Vacation</title>
        <meta
          name="description"
          content="View the terms of service for Cotswolds Vacation, detailing the conditions for using our luxury property rental services in the Cotswolds."
        />
        <link rel="canonical" href="https://www.cotswoldsvacation.com/terms" />
      </Head>

      <div className="min-h-screen bg-white">
        <header style={{ padding: "20px 0", borderBottom: "1px solid #e0e0e0" }}>
          <MobileMenu activePage="home" />
        </header>

        <section className="pt-24 pb-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-light text-gray-900 mb-8 tracking-tight">
              Terms of Service
            </h1>
            <p className="text-gray-600 mb-12 font-light">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </p>

            <div className="prose max-w-none prose-gray">
              <section className="mb-10">
                <h2 className="text-2xl font-medium mb-4 text-gray-900">Introduction</h2>
                <p>
                  Welcome to Cotswolds Vacation. These terms and conditions govern your use
                  of our website and services. By accessing our website or using our services,
                  you agree to these terms.
                </p>
                <p>
                  These Terms of Service constitute a legally binding agreement between you
                  and Cotswolds Vacation governing your access to and use of this website.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-medium mb-4 text-gray-900">Use of Services</h2>
                <p>Cotswolds Vacation provides information about our luxury holiday rental property in the Cotswolds, including:</p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                  <li>Property details, amenities, and availability information</li>
                  <li>Links to book stays through approved booking platforms</li>
                  <li>Travel and local area content about the Cotswolds</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-medium mb-4 text-gray-900">Bookings</h2>
                <p>
                  Bookings are made through third-party platforms such as Airbnb unless
                  otherwise agreed in writing. Payment terms, cancellation policies, and
                  house rules are governed by the booking platform and your rental agreement.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-medium mb-4 text-gray-900">Property Rules</h2>
                <p>When staying at our property, you agree to:</p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-600">
                  <li>Respect the property, its contents, and neighbours</li>
                  <li>Comply with occupancy limits and house rules</li>
                  <li>Report any damage or maintenance issues promptly</li>
                  <li>Leave the property in a reasonable condition upon departure</li>
                </ul>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-medium mb-4 text-gray-900">Intellectual Property</h2>
                <p>
                  All content on this website, including text, photographs, logos, and design,
                  is owned by Cotswolds Vacation or its licensors and is protected by copyright
                  laws. You may not reproduce or use our content without prior written permission.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-medium mb-4 text-gray-900">Disclaimer</h2>
                <p>
                  This website and its content are provided on an &quot;as is&quot; basis.
                  We make reasonable efforts to keep information accurate but do not guarantee
                  that all details are complete or current at all times.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-medium mb-4 text-gray-900">Governing Law</h2>
                <p>
                  These Terms are governed by the laws of England and Wales.
                </p>
              </section>

              <section className="mb-10">
                <h2 className="text-2xl font-medium mb-4 text-gray-900">Contact</h2>
                <p>If you have questions about these Terms, please contact us:</p>
                <p className="mt-4">
                  <strong>Cotswolds Vacation</strong>
                  <br />
                  Email: privacy@cotswoldsvacation.com
                  <br />
                  Website:{" "}
                  <a href="https://www.cotswoldsvacation.com" className="text-green-800 underline">
                    www.cotswoldsvacation.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </section>

        <footer style={{ padding: "40px 24px", textAlign: "center", borderTop: "1px solid #e0e0e0", color: "#666" }}>
          <p>
            <Link href="/" style={{ color: "#2c5e1a" }}>Cotswolds Luxury Retreat</Link>
            {" · "}
            <Link href="/privacy" style={{ color: "#2c5e1a" }}>Privacy</Link>
          </p>
          <p style={{ marginTop: "12px" }}>&copy; {new Date().getFullYear()} Cotswolds Estate</p>
        </footer>
      </div>
    </>
  );
};

export default TermsOfService;
