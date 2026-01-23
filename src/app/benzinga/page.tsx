"use client";

import styled from "styled-components";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import { ExperienceHero } from "../components/experience-hero";

const StyledPage = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  min-height: 100vh;

  .content-wrapper {
    background: #fff;
    width: 100%;
  }

  .content {
    max-width: 800px;
    margin: 0 auto;
    padding: 4rem 1.5rem;

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

    h3 {
      font-size: 1.2rem;
      font-weight: 600;
      color: #1e293b;
      margin: 2rem 0 1rem;

      @media (min-width: 768px) {
        font-size: 1.35rem;
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

export default function BenzingaPage() {
  return (
    <StyledPage>
      <Navbar />

      <ExperienceHero
        logo="/benzinga_logo.jpeg"
        company="Benzinga"
        role="Product Development Manager / Full-Stack Engineer"
        duration="Feb 2019 – May 2024"
        focus="Scalable media platforms, ad tech, and cross-functional product delivery"
        intro="At Benzinga, I worked at the intersection of product strategy, engineering execution, and business growth, helping scale a high-traffic media platform while bringing multiple consumer-facing products to market."
        highlights={[
          { value: "5+", label: "Years" },
          { value: "10M+", label: "Monthly Users" },
          { value: "3", label: "Teams Led" },
        ]}
      />

      <div className="content-wrapper">
        <div className="content">
          <div className="section">
            <p>
              I joined initially as a full-stack engineer focused on lead generation,
            and later took on broader responsibility as a product development manager,
            coordinating engineering teams and stakeholders across the organization.
          </p>
        </div>

        <div className="section">
          <h2>
            <span className="number">1</span>
            How I Entered the Organization
          </h2>
          <p>
            I was hired to strengthen the lead generation and conversion layer of
            Benzinga&apos;s business.
          </p>
          <ul>
            <li>Built and optimized full-stack features supporting acquisition funnels</li>
            <li>Integrated marketing, content, and data systems into a cohesive pipeline</li>
            <li>Worked directly with business stakeholders to align technical delivery with revenue goals</li>
          </ul>
          <div className="callout">
            <p>
              This role quickly expanded beyond individual features into <strong>system ownership</strong>.
            </p>
          </div>
        </div>

        <div className="section">
          <h2>
            <span className="number">2</span>
            Platform & System Contributions
          </h2>

          <h3>Scalable CMS & Publishing Infrastructure</h3>
          <ul>
            <li>Worked on content management systems designed to support high-volume publishing</li>
            <li>Helped evolve CMS architecture to accommodate new product verticals and workflows</li>
            <li>Balanced editorial flexibility with performance, reliability, and scale</li>
          </ul>
          <div className="callout">
            <p>
              <strong>Key lesson:</strong> CMSs are not just content tools — they&apos;re operational backbones.
            </p>
          </div>

          <h3>High-Traffic Websites & Performance Engineering</h3>
          <ul>
            <li>Contributed to consumer-facing websites serving large daily audiences</li>
            <li>Optimized performance, reliability, and deploy workflows under real traffic loads</li>
            <li>Learned how architectural decisions affect SEO, monetization, and user retention</li>
          </ul>
          <div className="callout">
            <p>
              <strong>Key lesson:</strong> At scale, performance is a product feature.
            </p>
          </div>

          <h3>Ad Tech & Monetization Systems</h3>
          <ul>
            <li>Worked within ad-supported product environments</li>
            <li>Integrated advertising and monetization workflows into product development</li>
            <li>Learned how product, engineering, and revenue teams must collaborate closely</li>
          </ul>
          <div className="callout">
            <p>
              <strong>Key lesson:</strong> Good ad tech is invisible to users and essential to the business.
            </p>
          </div>
        </div>

        <div className="section">
          <h2>
            <span className="number">3</span>
            Product Development & Team Leadership
          </h2>
          <p>
            As my role evolved, I transitioned into product development management,
            overseeing engineering execution across multiple initiatives.
          </p>
          <ul>
            <li>Managed and coordinated engineering teams working on parallel product streams</li>
            <li>Acted as a translator between product, engineering, marketing, editorial, and leadership</li>
            <li>Scoped work, prioritized features, and managed tradeoffs across time, quality, and risk</li>
            <li>Navigated shifting requirements and stakeholder expectations in a fast-moving environment</li>
          </ul>
          <div className="callout">
            <p>
              <strong>Key lesson:</strong> Shipping software is as much about people and alignment as it is about code.
            </p>
          </div>
        </div>

        <div className="section">
          <h2>
            <span className="number">4</span>
            Stakeholder & Cross-Functional Collaboration
          </h2>
          <ul>
            <li>Worked with executives, marketers, editors, designers, and engineers</li>
            <li>Facilitated alignment between technical constraints and business objectives</li>
            <li>Learned to manage complexity across teams with different incentives and vocabularies</li>
          </ul>
          <div className="callout">
            <p>
              This experience sharpened my ability to operate inside <strong>real organizations</strong>, not just greenfield projects.
            </p>
          </div>
        </div>

        <div className="section">
          <h2>
            <span className="number">5</span>
            What This Experience Enables Me to Do Now
          </h2>
          <p>My time at Benzinga taught me how to:</p>
          <ul>
            <li>Design systems that scale technically and organizationally</li>
            <li>Bring consumer products to market in revenue-driven environments</li>
            <li>Lead engineering efforts without losing sight of product and business goals</li>
            <li>Communicate effectively across highly diverse stakeholder groups</li>
          </ul>
        </div>

        <div className="section">
          <h2>
            <span className="number">6</span>
            Why This Matters for DPoP Labs & Consulting Work
          </h2>
          <p>The Benzinga experience is where I learned:</p>
          <p>
            <strong>How to build systems that survive traffic, growth, monetization pressure,
            and organizational complexity.</strong>
          </p>
          <p>
            That foundation directly informs my work at DPoP Labs, where I now design
            ecosystem-level platforms, identity systems, and deployment infrastructure
            with production-scale realities in mind.
          </p>
          </div>
        </div>
      </div>

      <div className="cta-section">
        <h2>Need help scaling your platform?</h2>
        <p>
          From high-traffic media to ad tech integrations—I&apos;ve built systems
          that grow with the business. Let&apos;s talk.
        </p>
        <a href="mailto:john@dpop.tech" className="cta-button">
          Get in Touch
        </a>
      </div>

      <Footer />
    </StyledPage>
  );
}
