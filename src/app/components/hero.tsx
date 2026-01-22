import { FC } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

interface HeroProps {
  onCtaClick: () => void;
}

const StyledHero = styled.section`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%);
  color: white;
  position: relative;
  overflow: hidden;
  padding: 2rem;

  &::before {
    content: '';
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
    content: '';
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
    0%, 100% {
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

  @keyframes scaleIn {
    from {
      opacity: 0;
      transform: scale(0.8);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }

  .hero-content {
    max-width: 900px;
    padding: 1.5rem;
    position: relative;
    z-index: 1;
  }

  .hero-top {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    margin-bottom: 1.5rem;
    animation: fadeInUp 0.8s ease forwards;

    .profile-image {
      width: 56px;
      height: 56px;
      border-radius: 50%;
      object-fit: cover;
      border: 2px solid rgba(255, 255, 255, 0.2);

      @media (min-width: 768px) {
        width: 64px;
        height: 64px;
      }
    }

    .name-badge {
      font-size: 1.1rem;
      font-weight: 600;
      color: #e2e8f0;
      
      @media (min-width: 768px) {
        font-size: 1.25rem;
      }
    }
  }

  h1 {
    font-size: clamp(2rem, 7vw, 3.5rem);
    font-weight: 800;
    margin-bottom: 1.25rem;
    background: linear-gradient(45deg, #60a5fa, #a78bfa, #60a5fa);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: fadeInUp 0.8s ease forwards;
    animation-delay: 0.15s;
    opacity: 0;
    letter-spacing: -0.02em;
    line-height: 1.15;
    max-width: 800px;
  }

  .subtitle {
    font-size: clamp(1rem, 3vw, 1.25rem);
    margin-bottom: 2.5rem;
    color: #94a3b8;
    font-weight: 400;
    letter-spacing: 0.3px;
    line-height: 1.6;
    animation: fadeInUp 0.8s ease forwards;
    animation-delay: 0.3s;
    opacity: 0;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
  }

  .cta-button {
    padding: 1rem 2.5rem;
    font-size: clamp(1rem, 3vw, 1.15rem);
    font-weight: 600;
    background: linear-gradient(45deg, #60a5fa, #a78bfa);
    border: none;
    border-radius: 50px;
    color: white;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 4px 20px rgba(96, 165, 250, 0.35);
    animation: fadeInUp 0.8s ease forwards;
    animation-delay: 0.45s;
    opacity: 0;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      width: 20px;
      height: 20px;
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

  .scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    animation: fadeInUp 0.8s ease forwards, bounce 2s ease infinite;
    animation-delay: 1s, 1.5s;
    opacity: 0;

    svg {
      width: 24px;
      height: 24px;
      color: rgba(255, 255, 255, 0.4);
    }
  }

  @keyframes bounce {
    0%, 100% { transform: translateX(-50%) translateY(0); }
    50% { transform: translateX(-50%) translateY(8px); }
  }
`;

export const Hero: FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <StyledHero className="hero">
      <div className="hero-content">
        <div className="hero-top">
          <Image
            src="/WiredInSamurai.jpeg"
            alt="John Gulbronson"
            className="profile-image"
            width={64}
            height={64}
            priority
          />
          <span className="name-badge">John Gulbronson</span>
        </div>
        <h1>Build Technology That Moves Communities Forward</h1>
        <p className="subtitle">
          Technical consulting for startups, nonprofits, and organizations ready to create meaningful impact through software, AI, and product strategy.
        </p>
        <button className="cta-button" onClick={onCtaClick}>
          Let&apos;s Talk
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