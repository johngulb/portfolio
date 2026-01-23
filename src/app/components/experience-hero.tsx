"use client";

import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

interface ExperienceHeroProps {
  logo: string;
  company: string;
  role: string;
  duration: string;
  focus: string;
  intro: string;
  highlights?: { label: string; value: string }[];
}

const StyledHero = styled.div`
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
  padding: 8rem 1.5rem 4rem;
  position: relative;
  overflow: hidden;

  @media (min-width: 768px) {
    padding: 10rem 2rem 5rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(
        circle at 20% 80%,
        rgba(96, 165, 250, 0.08) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 80% 20%,
        rgba(167, 139, 250, 0.08) 0%,
        transparent 50%
      );
    pointer-events: none;
  }

  .back-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: #60a5fa;
    font-size: 0.9rem;
    margin-bottom: 2.5rem;
    transition: all 0.3s ease;
    position: relative;
    z-index: 1;

    svg {
      width: 16px;
      height: 16px;
      transition: transform 0.3s ease;
    }

    &:hover {
      color: #a78bfa;

      svg {
        transform: translateX(-4px);
      }
    }
  }

  .hero-content {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 2.5rem;
    align-items: center;
    position: relative;
    z-index: 1;

    @media (min-width: 768px) {
      grid-template-columns: auto 1fr;
      gap: 3.5rem;
    }
  }

  .logo-section {
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (min-width: 768px) {
      align-items: flex-start;
    }
  }

  .logo-wrapper {
    width: 100px;
    height: 100px;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 8px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.1);
    position: relative;

    @media (min-width: 768px) {
      width: 140px;
      height: 140px;
      border-radius: 28px;
    }

    &::after {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: inherit;
      box-shadow: inset 0 0 0 1px rgba(255, 255, 255, 0.1);
      pointer-events: none;
    }
  }

  .duration-badge {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1.25rem;
    padding: 0.5rem 1rem;
    background: rgba(96, 165, 250, 0.1);
    border: 1px solid rgba(96, 165, 250, 0.2);
    border-radius: 50px;
    color: #60a5fa;
    font-size: 0.85rem;
    font-weight: 500;

    svg {
      width: 14px;
      height: 14px;
      opacity: 0.8;
    }
  }

  .text-section {
    text-align: center;

    @media (min-width: 768px) {
      text-align: left;
    }
  }

  h1 {
    font-size: clamp(2rem, 5vw, 3rem);
    font-weight: 800;
    color: white;
    margin-bottom: 0.75rem;
    letter-spacing: -0.02em;
  }

  .role {
    display: inline-block;
    color: #a78bfa;
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.75rem;

    @media (min-width: 768px) {
      font-size: 1.2rem;
    }
  }

  .focus {
    color: #94a3b8;
    font-size: 0.95rem;
    margin-bottom: 1.5rem;
    letter-spacing: 0.02em;
    text-transform: uppercase;

    @media (min-width: 768px) {
      font-size: 1rem;
    }
  }

  .intro {
    color: #e2e8f0;
    font-size: 1.05rem;
    line-height: 1.75;
    max-width: 600px;

    @media (min-width: 768px) {
      font-size: 1.1rem;
    }
  }

  .highlights {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    margin-top: 2rem;
    justify-content: center;

    @media (min-width: 768px) {
      justify-content: flex-start;
      gap: 1.5rem;
    }
  }

  .highlight-item {
    text-align: center;
    padding: 1rem 1.5rem;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 12px;
    min-width: 100px;

    @media (min-width: 768px) {
      text-align: left;
    }

    .value {
      display: block;
      font-size: 1.5rem;
      font-weight: 700;
      color: white;
      margin-bottom: 0.25rem;

      @media (min-width: 768px) {
        font-size: 1.75rem;
      }
    }

    .label {
      font-size: 0.8rem;
      color: #64748b;
      text-transform: uppercase;
      letter-spacing: 0.05em;
    }
  }
`;

export function ExperienceHero({
  logo,
  company,
  role,
  duration,
  focus,
  intro,
  highlights,
}: ExperienceHeroProps) {
  return (
    <StyledHero>
      <Link href="/" className="back-link">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
        Back to Home
      </Link>

      <div className="hero-content">
        <div className="logo-section">
          <div className="logo-wrapper">
            <Image
              src={logo}
              alt={company}
              width={140}
              height={140}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          </div>
          <div className="duration-badge">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
            {duration}
          </div>
        </div>

        <div className="text-section">
          <h1>{company}</h1>
          <p className="role">{role}</p>
          <p className="focus">{focus}</p>
          <p className="intro">{intro}</p>

          {highlights && highlights.length > 0 && (
            <div className="highlights">
              {highlights.map((item, index) => (
                <div key={index} className="highlight-item">
                  <span className="value">{item.value}</span>
                  <span className="label">{item.label}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </StyledHero>
  );
}
