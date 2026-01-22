"use client";

import { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";

const StyledNav = styled.nav<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  background: ${(props) =>
    props.scrolled ? "rgba(15, 23, 42, 0.95)" : "transparent"};
  backdrop-filter: ${(props) => (props.scrolled ? "blur(10px)" : "none")};
  box-shadow: ${(props) =>
    props.scrolled ? "0 2px 20px rgba(0, 0, 0, 0.1)" : "none"};

  .logo {
    font-size: 1.25rem;
    font-weight: 700;
    color: white;
    cursor: pointer;
    background: linear-gradient(45deg, #60a5fa, #a78bfa);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: opacity 0.3s ease;
    text-decoration: none;

    &:hover {
      opacity: 0.8;
    }
  }

  .nav-links {
    display: flex;
    gap: 0.5rem;

    @media (min-width: 768px) {
      gap: 1rem;
    }
  }

  .nav-link {
    color: rgba(255, 255, 255, 0.8);
    padding: 0.5rem 0.75rem;
    font-size: 0.9rem;
    font-weight: 500;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    background: transparent;
    border: none;
    text-decoration: none;

    @media (min-width: 768px) {
      padding: 0.5rem 1rem;
      font-size: 1rem;
    }

    &:hover {
      color: white;
      background: rgba(255, 255, 255, 0.1);
    }
  }
`;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (selector: string) => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <StyledNav scrolled={scrolled}>
      <Link href="/" className="logo">
        John Gulbronson
      </Link>
      <div className="nav-links">
        <button
          className="nav-link"
          onClick={() => scrollToSection(".services-section")}
        >
          Services
        </button>
        <Link href="/projects" className="nav-link">
          Projects
        </Link>
        <button
          className="nav-link"
          onClick={() => scrollToSection(".contact-section")}
        >
          Contact
        </button>
      </div>
    </StyledNav>
  );
}
