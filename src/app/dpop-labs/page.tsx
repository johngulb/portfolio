"use client";

import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

const StyledPage = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  min-height: 100vh;

  .hero {
    background: linear-gradient(135deg, #0f172a, #1e293b);
    padding: 10rem 2rem 5rem;
    text-align: center;
    position: relative;

    @media (min-width: 768px) {
      padding: 12rem 2rem 6rem;
    }

    .back-link {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      color: #60a5fa;
      font-size: 0.95rem;
      margin-bottom: 2rem;
      transition: all 0.3s ease;

      svg {
        width: 18px;
        height: 18px;
        transition: transform 0.3s ease;
      }

      &:hover {
        color: #a78bfa;

        svg {
          transform: translateX(-4px);
        }
      }
    }

    .logo-wrapper {
      width: 80px;
      height: 80px;
      border-radius: 20px;
      overflow: hidden;
      margin: 0 auto 2rem;
      box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);

      @media (min-width: 768px) {
        width: 100px;
        height: 100px;
      }
    }

    h1 {
      font-size: clamp(2.5rem, 6vw, 3.5rem);
      font-weight: 800;
      color: white;
      margin-bottom: 1rem;
    }

    .role {
      color: #60a5fa;
      font-size: 1.15rem;
      font-weight: 600;
      margin-bottom: 0.5rem;
    }

    .focus {
      color: #cbd5e1;
      font-size: 1rem;
      margin-bottom: 2rem;
      font-style: italic;
    }

    .intro {
      color: #f1f5f9;
      font-size: clamp(1.05rem, 3vw, 1.2rem);
      max-width: 650px;
      margin: 0 auto;
      line-height: 1.75;
    }
  }

  .content {
    max-width: 800px;
    margin: 0 auto;
    padding: 4rem 1.5rem;
    background: #fff;

    @media (min-width: 768px) {
      padding: 5rem 2rem;
    }
  }

  .section {
    margin-bottom: 3.5rem;
    padding-bottom: 3.5rem;
    border-bottom: 1px solid #e2e8f0;

    &:last-child {
      margin-bottom: 0;
      padding-bottom: 0;
      border-bottom: none;
    }

    h2 {
      font-size: 1.5rem;
      font-weight: 700;
      color: #0f172a;
      margin-bottom: 1.25rem;
      display: flex;
      align-items: center;
      gap: 0.75rem;

      @media (min-width: 768px) {
        font-size: 1.75rem;
      }

      .number {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        background: linear-gradient(135deg, #60a5fa, #a78bfa);
        color: white;
        border-radius: 10px;
        font-size: 1rem;
        font-weight: 700;
        flex-shrink: 0;
      }
    }

    p {
      color: #334155;
      font-size: 1.05rem;
      line-height: 1.8;
      margin-bottom: 1.25rem;

      @media (min-width: 768px) {
        font-size: 1.1rem;
      }

      strong {
        color: #0f172a;
        font-weight: 600;
      }
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0 0 1.5rem 0;

      li {
        color: #334155;
        font-size: 1rem;
        line-height: 1.75;
        padding-left: 1.5rem;
        margin-bottom: 0.875rem;
        position: relative;

        @media (min-width: 768px) {
          font-size: 1.05rem;
        }

        &::before {
          content: "";
          position: absolute;
          left: 0;
          top: 0.55rem;
          width: 6px;
          height: 6px;
          background: #60a5fa;
          border-radius: 50%;
        }

        strong {
          color: #0f172a;
          font-weight: 600;
        }
      }
    }

    .callout {
      background: #f8fafc;
      border-left: 3px solid #60a5fa;
      padding: 1rem 1.25rem;
      border-radius: 0 8px 8px 0;
      margin: 1.5rem 0;

      p {
        margin: 0;
        color: #1e293b;
        font-size: 0.95rem;
        line-height: 1.6;

        @media (min-width: 768px) {
          font-size: 1rem;
        }
      }

      strong {
        color: #0f172a;
        font-weight: 700;
      }
    }
  }

  .cta-section {
    background: linear-gradient(135deg, #0f172a, #1e293b);
    padding: 4rem 1.5rem;
    text-align: center;

    @media (min-width: 768px) {
      padding: 5rem 2rem;
    }

    h2 {
      color: #f8fafc;
      font-size: 1.5rem;
      font-weight: 700;
      margin-bottom: 1rem;

      @media (min-width: 768px) {
        font-size: 1.75rem;
      }
    }

    p {
      color: #cbd5e1;
      font-size: 1.05rem;
      max-width: 500px;
      margin: 0 auto 2rem;
      line-height: 1.7;
    }

    .cta-button {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      padding: 1rem 2rem;
      background: linear-gradient(45deg, #60a5fa, #a78bfa);
      color: white;
      font-size: 1.1rem;
      font-weight: 600;
      border-radius: 50px;
      transition: all 0.3s ease;
      box-shadow: 0 4px 20px rgba(96, 165, 250, 0.35);

      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 30px rgba(96, 165, 250, 0.5);
      }
    }
  }
`;

export default function DPoPLabsPage() {
  return (
    <StyledPage>
      <Navbar />

      <div className="hero">
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

        <div className="logo-wrapper">
          <Image
            src="/dpop_labs_logo.jpeg"
            alt="DPoP Labs"
            width={100}
            height={100}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <h1>DPoP Labs</h1>
        <p className="role">Founder & Technical Architect</p>
        <p className="focus">
          Ecosystem engineering, identity, and creator-owned infrastructure
        </p>
        <p className="intro">
          DPoP Labs is my technology studio for building next-generation digital
          ecosystems—with a core focus on creator ownership, modular platforms,
          and forward-thinking authentication systems.
        </p>
      </div>

      <div className="content">
        <div className="section">
          <p>
            It functions as the R&D and infrastructure layer behind Renaissance
            City, where experimentation becomes production-ready systems. I
            design the systems that allow creators and communities to own,
            deploy, and evolve their digital presence—without relying on
            centralized platforms.
          </p>
        </div>

        <div className="section">
          <h2>
            <span className="number">1</span>
            Ecosystem Architecture
          </h2>
          <p>
            At DPoP Labs, I design and implement modular ecosystem architecture
            rather than single-purpose apps.
          </p>
          <ul>
            <li>
              Built the <strong>App Block system</strong>, where creators deploy
              independent, composable applications
            </li>
            <li>
              Each block can operate autonomously while remaining interoperable
              with the broader ecosystem
            </li>
            <li>
              Enables communities to grow organically without central
              bottlenecks
            </li>
          </ul>
          <div className="callout">
            <p>
              <strong>Translation:</strong> This is platform engineering, not
              app development.
            </p>
          </div>
        </div>

        <div className="section">
          <h2>
            <span className="number">2</span>
            New Authentication & Trust Models
          </h2>
          <p>
            DPoP Labs explores alternatives to traditional, platform-owned
            identity.
          </p>
          <ul>
            <li>Signature-based authentication and wallet-adjacent identity flows</li>
            <li>
              App registries and trust verification between independently
              deployed apps
            </li>
            <li>
              Portable identity across creator-built tools without repeated
              onboarding
            </li>
          </ul>
          <div className="callout">
            <p>
              <strong>Why this matters:</strong> Identity becomes
              infrastructure, not a growth hack.
            </p>
          </div>
        </div>

        <div className="section">
          <h2>
            <span className="number">3</span>
            Automated Deployment Infrastructure
          </h2>
          <p>
            Instead of building one-off sites, DPoP Labs focuses on repeatable
            deployment systems.
          </p>
          <ul>
            <li>Automated provisioning of creator websites and applications</li>
            <li>Standardized hosting, data, and update pipelines</li>
            <li>
              Low-friction publishing without sacrificing ownership or
              extensibility
            </li>
          </ul>
          <div className="callout">
            <p>
              <strong>Result:</strong> Creators get real infrastructure, not
              just profiles or pages.
            </p>
          </div>
        </div>

        <div className="section">
          <h2>
            <span className="number">4</span>
            Infrastructure as a Creative Medium
          </h2>
          <p>A core principle at DPoP Labs:</p>
          <ul>
            <li>
              Infrastructure should be something creators can{" "}
              <strong>build with</strong>, not just exist on
            </li>
            <li>Tooling that supports non-traditional builders</li>
            <li>Systems designed to evolve alongside community needs</li>
            <li>
              Long-term adaptability prioritized over rigid product definitions
            </li>
          </ul>
        </div>
      </div>

      <div className="cta-section">
        <h2>Interested in ecosystem engineering?</h2>
        <p>
          Whether you&apos;re building a creator platform, community tools, or
          exploring new ownership models—let&apos;s talk.
        </p>
        <a href="mailto:john@dpop.tech" className="cta-button">
          Get in Touch
        </a>
      </div>

      <Footer />
    </StyledPage>
  );
}
