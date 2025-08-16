import React from 'react';

import logoImg from '../../assets/logo.png'; // Ensure this path is correct

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export function Logo({ className = '', size = 'md', showText = true }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-16 h-16'
  };
  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-3xl'
  };
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <img
        src={logoImg}
        alt="SkillCircuit Logo"
        className={`${sizeClasses[size]} object-contain drop-shadow-lg`}
        style={{ filter: 'drop-shadow(0 0 8px #00FFFF)' }}
      />
      {showText && (
        <span className={`font-bold tracking-wide bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent ${textSizeClasses[size]}`}>
          SkillCircuit
        </span>
      )}
    </div>
  );
}