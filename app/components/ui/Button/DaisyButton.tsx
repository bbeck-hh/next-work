import React from "react";

export default function DaisyButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      className="btn"
      style={{ backgroundColor: "var(--primary)", color: "white" }}
    >
      {children}
    </button>
  );
}
