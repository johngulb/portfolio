"use client";

import styled from "styled-components";
import { SectionTitle } from "./section-title";

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z" />
        <path d="m15 5 4 4" />
      </svg>
    ),
    title: "Custom Software Development",
    description:
      "Full-stack web and mobile applications built with modern technologies. From MVPs to scalable production systems.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
      </svg>
    ),
    title: "Product Strategy & Management",
    description:
      "Transform ideas into roadmaps. User research, feature prioritization, and go-to-market strategies that drive growth.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
        <path d="M2 12h20" />
      </svg>
    ),
    title: "Fractional CTO",
    description:
      "Technical leadership without the full-time commitment. Architecture decisions, team building, and engineering culture.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Community & Civic Tech",
    description:
      "Technology solutions for nonprofits, community organizations, and civic initiatives. Making tech accessible for social impact.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a8 8 0 0 0-8 8c0 5.4 7.05 11.5 7.35 11.76a1 1 0 0 0 1.3 0C13 21.5 20 15.4 20 10a8 8 0 0 0-8-8z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
    title: "AI Integration & Automation",
    description:
      "Leverage AI to streamline operations. Custom integrations, workflow automation, and intelligent tooling for your team.",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 11l3 3L22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    title: "Technical Due Diligence",
    description:
      "Comprehensive tech assessments for investors and acquirers. Code quality, architecture review, and risk evaluation.",
  },
];

const StyledServices = styled.section`
  padding: 5rem 1rem;
  background: linear-gradient(180deg, #f8fafc, #f1f5f9);
  position: relative;

  @media (min-width: 768px) {
    padding: 7rem 2rem;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(96, 165, 250, 0.3),
      transparent
    );
  }

  .services-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 0.5rem;

    @media (min-width: 640px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 2rem;
      padding: 0 1rem;
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  .service-card {
    background: white;
    border-radius: 20px;
    padding: 2rem;
    transition: all 0.3s ease;
    border: 1px solid rgba(0, 0, 0, 0.04);
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.03);

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
      border-color: rgba(96, 165, 250, 0.2);
    }

    .icon-wrapper {
      width: 56px;
      height: 56px;
      border-radius: 16px;
      background: linear-gradient(135deg, #60a5fa, #a78bfa);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.5rem;

      svg {
        width: 28px;
        height: 28px;
        color: white;
      }
    }

    h3 {
      font-size: 1.25rem;
      font-weight: 700;
      color: #1e293b;
      margin-bottom: 0.75rem;
      letter-spacing: -0.01em;
    }

    p {
      font-size: 1rem;
      color: #64748b;
      line-height: 1.65;
    }
  }

`;

export function Services() {
  return (
    <StyledServices className="services-section">
      <SectionTitle>How I Can Help</SectionTitle>
      <div className="services-grid">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className="icon-wrapper">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </StyledServices>
  );
}
