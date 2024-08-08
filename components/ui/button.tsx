import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'ghost' | 'primary';
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({ variant, className, children, ...props }) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md px-4 py-2 font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2';
  const variantClasses = variant === 'ghost' ? 'bg-transparent text-gray-700 hover:bg-gray-100' : 'bg-primary text-primary-foreground hover:bg-primary/90';

  return (
    <button className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
      {children}
    </button>
  );
};
