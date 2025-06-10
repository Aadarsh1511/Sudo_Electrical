import React from "react";

export function Button({ children, className = "", variant = "default", size = "md", ...props }) {
  const baseStyles = "inline-flex items-center justify-center rounded-xl font-medium transition";

  const variants = {
    default: "bg-black text-white hover:bg-gray-800",
    ghost: "bg-transparent hover:bg-gray-100 text-black border border-transparent",
  };

  const sizes = {
    md: "px-4 py-2 text-sm",
    icon: "w-9 h-9 p-0",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
