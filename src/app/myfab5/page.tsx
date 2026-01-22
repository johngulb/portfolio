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

    .quote {
      background: linear-gradient(135deg, #f8fafc, #f1f5f9);
      border-left: 4px solid #a78bfa;
      padding: 1.5rem;
      border-radius: 0 12px 12px 0;
      margin: 1.5rem 0;
      font-style: italic;

      p {
        margin: 0;
        color: #1e293b;
        font-size: 1.1rem;
        line-height: 1.7;

        @media (min-width: 768px) {
          font-size: 1.15rem;
        }
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

export default function MyFab5Page() {
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
            src="/myfab5.jpeg"
            alt="MyFab5"
            width={100}
            height={100}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </div>

        <h1>MyFab5</h1>
        <p className="role">Co-founder & Lead Engineer</p>
        <p className="focus">
          Zero-to-one product, full-stack ownership, iteration
        </p>
        <p className="intro">
          MyFab5 (originally BestFoodFeed) grew from a side project into a
          community-powered media company reaching 2M+ food enthusiasts across
          35 local publications. This is my founder-engineer story—where I
          learned to build, ship, and iterate in the real world.
        </p>
      </div>

      <div className="content">
        <div className="section">
          <h2>
            <span className="number">1</span>
            What I Owned
          </h2>
          <p>
            As co-founder and lead engineer, I had end-to-end ownership of
            everything technical—from the initial idea through MVP and beyond.
          </p>
          <ul>
            <li>
              <strong>End-to-end product development</strong> — Took ideas from
              napkin sketches to production systems, iterating based on real
              user behavior
            </li>
            <li>
              <strong>Backend architecture, APIs, and database design</strong> —
              Built the data layer that powered content management, user
              engagement, and analytics
            </li>
            <li>
              <strong>Frontend experiences and user flows</strong> — Designed
              and implemented the interfaces that served millions of readers
            </li>
            <li>
              <strong>Infrastructure decisions and deployment strategy</strong>{" "}
              — Made the calls on hosting, scaling, and operational reliability
            </li>
          </ul>
        </div>

        <div className="section">
          <h2>
            <span className="number">2</span>
            What This Proves
          </h2>
          <p>
            Building a company from scratch teaches lessons you can&apos;t learn
            any other way:
          </p>
          <ul>
            <li>
              <strong>Designing systems before requirements are clear</strong> —
              When you&apos;re building something new, you don&apos;t have the
              luxury of perfect specs. I learned to make architectural decisions
              with incomplete information and design for flexibility.
            </li>
            <li>
              <strong>Iterating based on user feedback, not theory</strong> —
              Real users taught me more than any product framework. I learned to
              ship fast, measure what mattered, and change course quickly.
            </li>
            <li>
              <strong>
                Understanding tradeoffs between &quot;doing it right&quot; and
                &quot;doing it now&quot;
              </strong>{" "}
              — Sometimes you need to ship imperfect code. Sometimes you need to
              stop and refactor. Knowing which is which is a skill you only
              develop by living with the consequences.
            </li>
          </ul>
        </div>

        <div className="section">
          <h2>
            <span className="number">3</span>
            The Technical Stack
          </h2>
          <p>
            Building a media platform at scale meant solving real problems with
            real constraints:
          </p>
          <ul>
            <li>
              <strong>CMS applications</strong> — Custom content management
              systems built for editorial workflows across 35 local publications
            </li>
            <li>
              <strong>Marketing automation tools</strong> — Systems for email
              campaigns, social media scheduling, and audience engagement
            </li>
            <li>
              <strong>Data processing pipelines</strong> — Analytics and
              reporting infrastructure to understand what content resonated and
              why
            </li>
            <li>
              <strong>Scaling for growth</strong> — Architecture that handled
              traffic spikes, viral content, and the demands of a growing
              audience
            </li>
          </ul>
        </div>

        <div className="section">
          <h2>
            <span className="number">4</span>
            The Consulting Signal
          </h2>
          <p>
            What sets this experience apart from typical engineering roles:
          </p>
          <div className="quote">
            <p>
              &quot;I don&apos;t just advise—I&apos;ve lived the consequences of
              technical decisions.&quot;
            </p>
          </div>
          <p>
            When I recommend an architecture, I know what happens six months
            later when requirements change. When I suggest shipping faster, I
            understand the technical debt you&apos;re taking on. When I push
            back on scope, it&apos;s because I&apos;ve seen projects fail from
            overreach.
          </p>
          <div className="callout">
            <p>
              <strong>The difference:</strong> My advice comes from building and
              running systems—not from reading about them.
            </p>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <h2>Building something from scratch?</h2>
        <p>
          If you&apos;re navigating the chaos of zero-to-one product
          development—and want a technical partner who&apos;s been
          there—let&apos;s talk.
        </p>
        <a href="mailto:john@dpop.tech" className="cta-button">
          Get in Touch
        </a>
      </div>

      <Footer />
    </StyledPage>
  );
}
