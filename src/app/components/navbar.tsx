"use client";

import { useState, useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

const StyledNav = styled.nav<{ scrolled: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease;
  background: ${(props) =>
    props.scrolled ? "rgba(15, 23, 42, 0.95)" : "transparent"};
  backdrop-filter: ${(props) => (props.scrolled ? "blur(10px)" : "none")};
  box-shadow: ${(props) =>
    props.scrolled ? "0 2px 20px rgba(0, 0, 0, 0.1)" : "none"};

  @media (min-width: 768px) {
    padding: 1rem 2rem;
  }

  .logo {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    text-decoration: none;
    transition: opacity 0.3s ease;

    &:hover {
      opacity: 0.85;
    }

    .profile-image {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid rgba(96, 165, 250, 0.4);
      box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

      @media (min-width: 768px) {
        width: 40px;
        height: 40px;
      }
    }

    .brand-name {
      font-size: 1.1rem;
      font-weight: 700;
      background: linear-gradient(135deg, #60a5fa, #a78bfa);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;

      @media (min-width: 768px) {
        font-size: 1.25rem;
      }
    }
  }

  .nav-links {
    display: none;
    gap: 0.75rem;

    @media (min-width: 768px) {
      display: flex;
    }
  }

  .nav-link {
    color: rgba(255, 255, 255, 0.8);
    padding: 0.5rem 1rem;
    font-size: 0.95rem;
    font-weight: 500;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;
    background: transparent;
    border: none;
    text-decoration: none;

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
        <Image
          src="/WiredInSamurai.jpeg"
          alt="WiredInSamurai"
          className="profile-image"
          width={40}
          height={40}
          priority
        />
        <span className="brand-name">WiredInSamurai</span>
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
