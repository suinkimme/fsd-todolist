import React from "react";

interface IButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  color?: "blue" | "red" | "green" | "gray";
  className?: string;
  type?: "button" | "submit" | "reset";
}

export const Button = ({
  children,
  onClick,
  color = "blue",
  className,
  type = "button",
}: IButtonProps) => {
  const colorClasses = {
    blue: "bg-blue-500 hover:bg-blue-600",
    red: "bg-red-500 hover:bg-red-600",
    green: "bg-green-500 hover:bg-green-600",
    gray: "bg-gray-500 hover:bg-gray-600",
  };

  return (
    <button
      className={`px-4 py-2 rounded text-white ${colorClasses[color]} transition-colors ${className}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
