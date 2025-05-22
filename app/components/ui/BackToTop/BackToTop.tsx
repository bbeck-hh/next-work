'use client';
import { CircleArrowUp } from "lucide-react";
import { useEffect, useState } from "react";
import styled from "styled-components";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Check if the component has mounted to avoid hydration issues
  // Render the component only when it is fully loaded
  if (!hasMounted) return null;

  return (
    <BackToTopButton
      onClick={scrollToTop}
      $isVisible={isVisible}
      aria-label="Back to top"
    >
      <CircleArrowUp size={24} />
    </BackToTopButton>
  );
}

interface BackToTopButtonProps {
  $isVisible: boolean;
}

const BackToTopButton = styled.button<BackToTopButtonProps>`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  padding: 0.35rem;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  background-color: #059669;
  color: #f3f4f6; /* Tailwind gray-100 */
  border: none;
  cursor: pointer;
  transition: all 0.6s ease;
  opacity: ${({ $isVisible }) => ($isVisible ? 1 : 0)};
  visibility: ${({ $isVisible }) => ($isVisible ? "visible" : "hidden")};
  pointer-events: ${({ $isVisible }) => ($isVisible ? "auto" : "none")};
  z-index: 9999;

  &:hover {
    transform: scale(1.1);
    background-color: #065f46; /* Tailwind green-800 */
  }

  > svg {
    position: relative;
    top: 0;
  }
`;
