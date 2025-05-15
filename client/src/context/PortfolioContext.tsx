import { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import portfolioData from '../data/portfolio.json';

type PortfolioContextType = {
  projects: Array<{
    id: number;
    title: string;
    description: string;
    technologies: string[];
    imageUrl: string;
    githubUrl: string;
    liveUrl: string;
  }>;
  skills: Array<{
    category: string;
    items: string[];
  }>;
  contact: {
    email: string;
    github: string;
    linkedin: string;
  };
};

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export function PortfolioProvider({ children }: { children: ReactNode }) {
  const [data] = useState<PortfolioContextType>(portfolioData);

  return (
    <PortfolioContext.Provider value={data}>
      {children}
    </PortfolioContext.Provider>
  );
}

export function usePortfolio() {
  const context = useContext(PortfolioContext);
  if (context === undefined) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
} 