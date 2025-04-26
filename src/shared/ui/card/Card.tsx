import React from "react";

interface ICardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card = ({ children, className }: ICardProps) => (
  <div className={`bg-white rounded-lg shadow-md p-4 ${className}`}>
    {children}
  </div>
);
