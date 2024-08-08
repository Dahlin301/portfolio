import React from 'react';

interface LabelProps {
  children: React.ReactNode;
  htmlFor: string;
  className?: string;
}

export const Label = ({ children, htmlFor, className }: LabelProps) => (
  <label htmlFor={htmlFor} className={`label ${className}`}>
    {children}
  </label>
);
