'use client';
import { ReactNode, useState, useEffect } from 'react';

interface ErrorBoundaryProps {
  fallback: ReactNode; // what to show when an error occurs
  children: ReactNode; // The content to monitor for errors
}

const ErrorBoundary = ({ fallback, children }: ErrorBoundaryProps) => {
  const [hasError, setHasError] = useState(false);

  //(Error detection)tracks whether an error has occurred
  useEffect(() => {
    const handleError = (error: ErrorEvent) => {
      setHasError(true);
      console.error('Error caught by boundary:', error);
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);
  
  //This sets up an error listener that updates the state when errors occur.
  if (hasError) {
    return fallback;
  }

  return children;
};

export default ErrorBoundary;