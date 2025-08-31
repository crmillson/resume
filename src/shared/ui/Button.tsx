import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

/**
 * Reusable Button component with military-inspired design
 * Following Interface Segregation Principle - only includes necessary props
 */
export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  disabled = false,
  type = 'button',
  className = ''
}) => {
  const baseClasses = 'inline-flex items-center justify-center rounded-md font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none transform hover:scale-105 active:scale-95';
  
  const variantClasses = {
    primary: 'bg-accent-600 text-white hover:bg-accent-700 shadow-military-md focus-visible:ring-accent-500',
    secondary: 'bg-military-200 text-military-800 hover:bg-military-300 shadow-military focus-visible:ring-military-400',
    outline: 'border-2 border-accent-600 text-accent-600 hover:bg-accent-600 hover:text-white focus-visible:ring-accent-500',
    ghost: 'bg-transparent hover:bg-military-100 text-military-700 focus-visible:ring-military-400'
  };
  
  const sizeClasses = {
    sm: 'h-8 px-3 text-sm',
    md: 'h-10 px-4 py-2',
    lg: 'h-12 px-6 text-lg'
  };
  
  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
  
  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
