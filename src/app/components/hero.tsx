import { FC } from "react";
import styled from "styled-components";

interface HeroProps {
  onCtaClick: () => void;
}

const StyledHero = styled.section`
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
  color: white;
  position: relative;
  overflow: hidden;
  padding: 1.25rem;
  padding-top: 5rem;

  @media (min-width: 768px) {
    padding: 2rem;
    padding-top: 2rem;
  }

  &::before {
    content: "";
    position: absolute;
    width: 200%;
    height: 200%;
    background: radial-gradient(
        circle at 30% 30%,
        rgba(96, 165, 250, 0.08) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at 70% 70%,
        rgba(167, 139, 250, 0.08) 0%,
        transparent 50%
      );
    animation: pulse 8s ease-in-out infinite;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.02'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
    opacity: 0.5;
    pointer-events: none;
  }

  @keyframes pulse {
    0%,
    100% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.1);
      opacity: 0.8;
    }
  }

  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  .hero-content {
    max-width: 900px;
    padding: 0.5rem;
    position: relative;
    z-index: 1;

    @media (min-width: 768px) {
      padding: 1.5rem;
    }
  }

  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.75rem;
    font-weight: 500;
    color: #60a5fa;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    margin-bottom: 1rem;
    animation: fadeInUp 0.8s ease forwards;

    &::before,
    &::after {
      content: "";
      width: 16px;
      height: 1px;
      background: linear-gradient(90deg, transparent, #60a5fa);
    }

    &::after {
      background: linear-gradient(90deg, #60a5fa, transparent);
    }

    @media (min-width: 768px) {
      font-size: 0.95rem;
      gap: 0.5rem;
      margin-bottom: 1.5rem;

      &::before,
      &::after {
        width: 40px;
      }
    }
  }

  h1 {
    font-size: clamp(1.75rem, 8vw, 4rem);
    font-weight: 800;
    margin-bottom: 1rem;
    color: white;
    animation: fadeInUp 0.8s ease forwards;
    animation-delay: 0.15s;
    opacity: 0;
    letter-spacing: -0.03em;
    line-height: 1.15;
    max-width: 850px;

    @media (min-width: 768px) {
      margin-bottom: 1.5rem;
      line-height: 1.1;
    }

    .gradient {
      background: linear-gradient(135deg, #60a5fa, #a78bfa);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .subtitle {
    font-size: clamp(0.95rem, 3.5vw, 1.2rem);
    margin-bottom: 2rem;
    color: #94a3b8;
    font-weight: 400;
    line-height: 1.6;
    animation: fadeInUp 0.8s ease forwards;
    animation-delay: 0.3s;
    opacity: 0;
    max-width: 620px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 0.5rem;

    @media (min-width: 768px) {
      margin-bottom: 2.5rem;
      line-height: 1.65;
      padding: 0;
    }
  }

  .cta-group {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
    animation: fadeInUp 0.8s ease forwards;
    animation-delay: 0.45s;
    opacity: 0;
    width: 100%;
    padding: 0 1rem;

    @media (min-width: 480px) {
      flex-direction: row;
      justify-content: center;
      gap: 1.25rem;
      width: auto;
      padding: 0;
    }
  }

  .cta-button {
    padding: 0.9rem 1.75rem;
    font-size: 0.95rem;
    font-weight: 600;
    background: linear-gradient(135deg, #60a5fa, #a78bfa);
    border: none;
    border-radius: 50px;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(96, 165, 250, 0.35);
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    width: 100%;
    max-width: 280px;

    @media (min-width: 480px) {
      width: auto;
      max-width: none;
      padding: 1rem 2.25rem;
      font-size: 1.05rem;
    }

    svg {
      width: 18px;
      height: 18px;
      transition: transform 0.3s ease;
    }

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 8px 30px rgba(96, 165, 250, 0.5);

      svg {
        transform: translateX(4px);
      }
    }
  }

  .secondary-link {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: #94a3b8;
    font-size: 0.9rem;
    font-weight: 500;
    padding: 0.6rem 1rem;
    border-radius: 50px;
    transition: all 0.3s ease;
    border: 1px solid transparent;

    @media (min-width: 480px) {
      font-size: 0.95rem;
      padding: 0.75rem 1.25rem;
    }

    svg {
      width: 16px;
      height: 16px;
      transition: transform 0.3s ease;
    }

    &:hover {
      color: #60a5fa;
      border-color: rgba(96, 165, 250, 0.3);
      background: rgba(96, 165, 250, 0.05);

      svg {
        transform: translateY(2px);
      }
    }
  }

  .scroll-indicator {
    position: absolute;
    bottom: 1.5rem;
    left: 50%;
    transform: translateX(-50%);
    animation: fadeInUp 0.8s ease forwards, bounce 2s ease infinite;
    animation-delay: 1s, 1.5s;
    opacity: 0;
    display: none;

    @media (min-width: 768px) {
      display: block;
      bottom: 2rem;
    }

    svg {
      width: 24px;
      height: 24px;
      color: rgba(255, 255, 255, 0.4);
    }
  }

  @keyframes bounce {
    0%,
    100% {
      transform: translateX(-50%) translateY(0);
    }
    50% {
      transform: translateX(-50%) translateY(8px);
    }
  }
`;

export const Hero: FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <StyledHero className="hero">
      <div className="hero-content">
        <div className="eyebrow">Technical Consulting</div>
        <h1>
          Build Technology That
          <br />
          <span className="gradient">Moves Communities Forward</span>
        </h1>
        <p className="subtitle">
          Helping startups, nonprofits, and organizations create meaningful
          impact through software architecture, AI strategy, and product
          development.
        </p>
        <div className="cta-group">
          <button className="cta-button" onClick={onCtaClick}>
            Start a Conversation
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <a href="#projects" className="secondary-link">
            View Projects
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 5v14M5 12l7 7 7-7" />
            </svg>
          </a>
        </div>
      </div>
      <div className="scroll-indicator">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </StyledHero>
  );
};
