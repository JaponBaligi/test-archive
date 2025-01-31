// src/components/ui/button.tsx

import React from "react";

interface ButtonProps {
  onClick: () => void;
  className?: string;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ onClick, className, children }) => {
  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-lg bg-blue-600 hover:bg-blue-700 text-white ${className}`}
    >
      {children}
    </button>
  );
};
