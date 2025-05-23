import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AIRBNB_LINK = "https://www.airbnb.ca/rooms/1414129878809697902?check_in=2025-08-20&check_out=2025-08-24&guests=10&adults=10&s=67&unique_share_id=3bb66e80-1ca0-4eb8-9866-40b102c76e50";

// Color scheme
const colors = {
  darkGreen: '#2c5e1a',
  lightGreen: '#5a9c48', 
  black: '#000000',
  white: '#ffffff',
  offWhite: '#f5f5f7',
  lightGray: '#e0e0e0',
  darkGray: '#333333',
};

interface MobileMenuProps {
  activePage?: string;
}

export default function MobileMenu({ activePage = 'home' }: MobileMenuProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  
  // Toggle mobile menu
  const toggleMobileMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setMobileMenuOpen(prev => !prev);
    
    // Prevent body scrolling when menu is open
    if (!mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };
  
  // Close mobile menu
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = '';
  };
  
  // Handle clicking links in the menu
  const handleMenuLinkClick = () => {
    closeMobileMenu();
  };
  
  useEffect(() => {
    // Check if mobile
    const checkMobile = () => {
      const isMobileView = window.innerWidth <= 768;
      setIsMobile(isMobileView);
      
      // Reset menu state when switching between mobile and desktop
      if (!isMobileView && mobileMenuOpen) {
        closeMobileMenu();
      }
    };
    
    // Initial check
    checkMobile();
    
    // Add listener for resize
    window.addEventListener('resize', checkMobile);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', checkMobile);
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);
  
  if (!isMobile) {
    return (
      <nav style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '90%',
        maxWidth: '1400px',
        margin: '0 auto',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
        }}>
          <Link href="/" passHref>
            <div style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', cursor: 'pointer' }}>
              <Image 
                src="/photos/642ca4501534ebc86d037617_AceHost-Whistler-Logo.png" 
                alt="Cotswolds Estate Logo" 
                width={120} 
                height={40} 
                style={{ height: 'auto', width: '120px' }}
                priority
              />
              <span style={{
                fontSize: '1.8em',
                fontWeight: 'bold',
                color: colors.darkGreen,
                marginLeft: '10px'
              }}>Cotswolds Estate</span>
            </div>
          </Link>
        </div>
        
        <ul style={{
          listStyle: 'none',
          padding: 0,
          margin: 0,
          display: 'flex',
          alignItems: 'center',
        }}>
          <li style={{ marginLeft: '25px' }}>
            <Link 
              href="/#home" 
              style={{ 
                fontSize: '1em',
                color: activePage === 'home' ? colors.darkGreen : colors.darkGray,
                fontWeight: activePage === 'home' ? 'bold' : 500,
                textDecoration: 'none',
              }}
            >
              Home
            </Link>
          </li>
          <li style={{ marginLeft: '25px' }}>
            <Link 
              href="/#about" 
              style={{ 
                fontSize: '1em',
                color: colors.darkGray,
                fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              About
            </Link>
          </li>
          <li style={{ marginLeft: '25px' }}>
            <Link 
              href="/#gallery" 
              style={{ 
                fontSize: '1em',
                color: colors.darkGray,
                fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              Gallery
            </Link>
          </li>
          <li style={{ marginLeft: '25px' }}>
            <Link 
              href="/#amenities" 
              style={{ 
                fontSize: '1em',
                color: colors.darkGray,
                fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              Amenities
            </Link>
          </li>
          <li style={{ marginLeft: '25px' }}>
            <Link 
              href="/#bedrooms" 
              style={{ 
                fontSize: '1em',
                color: colors.darkGray,
                fontWeight: 500,
                textDecoration: 'none',
              }}
            >
              Bedrooms
            </Link>
          </li>
          <li style={{ marginLeft: '25px' }}>
            <Link 
              href="/cotswolds-blog" 
              style={{ 
                fontSize: '1em',
                color: activePage === 'blog' ? colors.darkGreen : colors.darkGray,
                fontWeight: activePage === 'blog' ? 'bold' : 500,
                textDecoration: 'none',
              }}
            >
              Blog
            </Link>
          </li>
          <li style={{ marginLeft: '25px' }}>
            <a 
              href={AIRBNB_LINK} 
              style={{
                backgroundColor: colors.black,
                color: colors.white,
                padding: '10px 20px',
                borderRadius: '8px',
                fontWeight: 500,
                textDecoration: 'none',
                transition: 'background-color 0.3s ease',
              }} 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Book Now
            </a>
          </li>
        </ul>
      </nav>
    );
  }
  
  return (
    <>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '95%',
        margin: '0 auto',
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
        }}>
          <Link href="/" passHref>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              textDecoration: 'none', 
              cursor: 'pointer' 
            }}>
              <Image 
                src="/photos/642ca4501534ebc86d037617_AceHost-Whistler-Logo.png" 
                alt="Cotswolds Estate Logo" 
                width={80} 
                height={30} 
                style={{ height: 'auto', width: '80px' }}
                priority
              />
              <span style={{
                fontSize: '1.3em',
                fontWeight: 'bold',
                color: colors.darkGreen,
                marginLeft: '5px'
              }}>Cotswolds Estate</span>
            </div>
          </Link>
        </div>
        
        <button 
          ref={menuButtonRef}
          style={{
            background: 'none',
            border: 'none',
            color: colors.darkGreen,
            fontSize: '2rem',
            cursor: 'pointer',
            padding: '8px 12px',
            zIndex: 100,
          }}
          onClick={toggleMobileMenu}
          aria-label="Open menu"
        >
          ☰
        </button>
      </div>
      
      {/* Mobile Menu Overlay */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.5)',
          zIndex: 1999,
          opacity: mobileMenuOpen ? 1 : 0,
          visibility: mobileMenuOpen ? 'visible' : 'hidden',
          transition: 'opacity 0.3s ease',
        }}
        onClick={closeMobileMenu}
      ></div>
      
      {/* Mobile Menu Slide-out - Modified to ensure all options are visible without scrolling */}
      <div style={{
        position: 'fixed',
        top: 0,
        right: 0,
        bottom: 0,
        width: '80%',
        maxWidth: '300px',
        backgroundColor: colors.white,
        boxShadow: '-5px 0 15px rgba(0,0,0,0.1)',
        zIndex: 2000,
        transform: mobileMenuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.3s ease-in-out',
        display: 'flex',
        flexDirection: 'column',
        padding: 0,
        overflow: 'hidden', // Prevent scrolling
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '10px 15px',
          borderBottom: `1px solid ${colors.lightGray}`,
        }}>
          <h3 style={{ margin: 0, fontSize: '1.2rem' }}>Navigation</h3>
          <button 
            style={{
              background: 'none',
              border: 'none',
              color: colors.darkGreen,
              fontSize: '1.8rem',
              cursor: 'pointer',
              padding: '0 5px',
            }}
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            ×
          </button>
        </div>
        
        {/* Compact menu with all options visible */}
        <div style={{ 
          padding: '0',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          height: 'auto',
        }}>
          <ul style={{ 
            listStyle: 'none', 
            padding: 0, 
            margin: 0,
            width: '100%',
          }}>
            <li style={{ 
              padding: '12px 15px',
              borderBottom: `1px solid ${colors.lightGray}`,
            }}>
              <Link 
                href="/#home" 
                style={{ 
                  fontSize: '1em',
                  color: activePage === 'home' ? colors.darkGreen : colors.darkGray,
                  fontWeight: activePage === 'home' ? 'bold' : 500,
                  textDecoration: 'none',
                  display: 'block',
                }}
                onClick={handleMenuLinkClick}
              >
                Home
              </Link>
            </li>
            <li style={{ 
              padding: '12px 15px',
              borderBottom: `1px solid ${colors.lightGray}`,
            }}>
              <Link 
                href="/#about" 
                style={{ 
                  fontSize: '1em',
                  color: colors.darkGray,
                  fontWeight: 500,
                  textDecoration: 'none',
                  display: 'block',
                }}
                onClick={handleMenuLinkClick}
              >
                About
              </Link>
            </li>
            <li style={{ 
              padding: '12px 15px',
              borderBottom: `1px solid ${colors.lightGray}`,
            }}>
              <Link 
                href="/#gallery" 
                style={{ 
                  fontSize: '1em',
                  color: colors.darkGray,
                  fontWeight: 500,
                  textDecoration: 'none',
                  display: 'block',
                }}
                onClick={handleMenuLinkClick}
              >
                Gallery
              </Link>
            </li>
            <li style={{ 
              padding: '12px 15px',
              borderBottom: `1px solid ${colors.lightGray}`,
            }}>
              <Link 
                href="/#amenities" 
                style={{ 
                  fontSize: '1em',
                  color: colors.darkGray,
                  fontWeight: 500,
                  textDecoration: 'none',
                  display: 'block',
                }}
                onClick={handleMenuLinkClick}
              >
                Amenities
              </Link>
            </li>
            <li style={{ 
              padding: '12px 15px',
              borderBottom: `1px solid ${colors.lightGray}`,
            }}>
              <Link 
                href="/#bedrooms" 
                style={{ 
                  fontSize: '1em',
                  color: colors.darkGray,
                  fontWeight: 500,
                  textDecoration: 'none',
                  display: 'block',
                }}
                onClick={handleMenuLinkClick}
              >
                Bedrooms
              </Link>
            </li>
            <li style={{ 
              padding: '12px 15px',
              borderBottom: `1px solid ${colors.lightGray}`,
            }}>
              <Link 
                href="/cotswolds-blog" 
                style={{ 
                  fontSize: '1em',
                  color: activePage === 'blog' ? colors.darkGreen : colors.darkGray,
                  fontWeight: activePage === 'blog' ? 'bold' : 500,
                  textDecoration: 'none',
                  display: 'block',
                }}
                onClick={handleMenuLinkClick}
              >
                Blog
              </Link>
            </li>
            <li style={{ 
              padding: '12px 15px',
              borderBottom: `1px solid ${colors.lightGray}`,
            }}>
              <a 
                href={AIRBNB_LINK} 
                style={{
                  fontSize: '1em',
                  backgroundColor: colors.black,
                  color: colors.white,
                  padding: '8px 12px',
                  borderRadius: '6px',
                  fontWeight: 500,
                  textDecoration: 'none',
                  display: 'inline-block',
                }} 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={handleMenuLinkClick}
              >
                Book Now
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
} 