"use client";

import styled from "styled-components";
import Link from "next/link";

const StyledFooter = styled.footer`
  background: linear-gradient(135deg, #0f172a, #1e293b);
  color: white;
  padding: 3rem 2rem 2rem;
  text-align: center;

  .footer-content {
    max-width: 1200px;
    margin: 0 auto;
  }

  .footer-links {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin-bottom: 2rem;
    flex-wrap: wrap;
  }

  .footer-link {
    color: rgba(255, 255, 255, 0.7);
    font-size: 0.95rem;
    transition: color 0.3s ease;
    cursor: pointer;
    background: none;
    border: none;
    padding: 0;
    text-decoration: none;

    &:hover {
      color: #60a5fa;
    }
  }

  .social-links {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    margin-bottom: 2rem;

    a {
      color: rgba(255, 255, 255, 0.6);
      transition: all 0.3s ease;

      &:hover {
        color: #a78bfa;
        transform: translateY(-2px);
      }

      svg {
        width: 24px;
        height: 24px;
      }
    }
  }

  .divider {
    width: 100%;
    max-width: 200px;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    margin: 0 auto 1.5rem;
  }

  .copyright {
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.875rem;
  }

  .built-with {
    color: rgba(255, 255, 255, 0.4);
    font-size: 0.8rem;
    margin-top: 0.75rem;
  }
`;

export function Footer() {
  return (
    <StyledFooter>
      <div className="footer-content">
        <div className="footer-links">
          <Link href="/" className="footer-link">
            Home
          </Link>
          <Link href="/projects" className="footer-link">
            Projects
          </Link>
          <a href="mailto:john@dpop.tech" className="footer-link">
            Contact
          </a>
        </div>

        <div className="social-links">
          <a href="mailto:john@dpop.tech" aria-label="Email">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
              <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/john-gulbronson-a285285b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
            </svg>
          </a>
          <a
            href="https://github.com/johngulb"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </div>

        <div className="divider" />

        <p className="copyright">
          &copy; {new Date().getFullYear()} John Gulbronson. All rights reserved.
        </p>
        <p className="built-with">Built with Next.js & Styled Components</p>
      </div>
    </StyledFooter>
  );
}
