import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

// Types of websites in the codebase
type WebsiteType = 'cotswolds';

interface SiteContextType {
  currentWebsite: WebsiteType;
  siteName: string;
  baseUrl: string;
}

// Create context with default values
const SiteContext = createContext<SiteContextType>({
  currentWebsite: 'cotswolds',
  siteName: 'Cotswolds Estate',
  baseUrl: 'https://cotswoldsvacation.com',
});

// Hook to use the site context
export const useSite = () => useContext(SiteContext);

interface SiteProviderProps {
  children: ReactNode;
}

export const SiteProvider: React.FC<SiteProviderProps> = ({ 
  children 
}) => {
  const [siteInfo, setSiteInfo] = useState<SiteContextType>({
    currentWebsite: 'cotswolds',
    siteName: 'Cotswolds Estate',
    baseUrl: 'https://cotswoldsvacation.com',
  });

  useEffect(() => {
    // No detection needed - always Cotswolds
    setSiteInfo({
      currentWebsite: 'cotswolds',
      siteName: 'Cotswolds Estate',
      baseUrl: 'https://cotswoldsvacation.com',
    });
    
    // Expose current website to window for debugging
    if (typeof window !== 'undefined') {
      window.CURRENT_WEBSITE = 'cotswolds';
    }
  }, []);

  return (
    <SiteContext.Provider value={siteInfo}>
      {children}
    </SiteContext.Provider>
  );
};

// Add typings to Window interface
declare global {
  interface Window {
    CURRENT_WEBSITE?: WebsiteType;
  }
} 