import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className }: CardProps) => (
  <div className={`card ${className}`}>{children}</div>
);

interface CardSectionProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader = ({ children, className }: CardSectionProps) => (
  <div className={`card-header ${className}`}>{children}</div>
);

export const CardTitle = ({ children, className }: CardSectionProps) => (
  <h2 className={`card-title ${className}`}>{children}</h2>
);

export const CardDescription = ({ children, className }: CardSectionProps) => (
  <p className={`card-description ${className}`}>{children}</p>
);

export const CardContent = ({ children, className }: CardSectionProps) => (
  <div className={`card-content ${className}`}>{children}</div>
);

export const CardFooter = ({ children, className }: CardSectionProps) => (
  <div className={`card-footer ${className}`}>{children}</div>
);
