"use client";

import styled from "styled-components";
import { ExperienceItem } from "./components/experience-item";
import { Contact } from "./components/contact";
import { SectionTitle } from "./components/section-title";
import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";
import { Services } from "./components/services";
import { FeaturedProjects } from "./components/featured-projects";

const StyledPage = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;

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

  .experience-section {
    padding: 5rem 1rem;
    background: linear-gradient(135deg, #0f172a, #1e293b);
    color: white;
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
        rgba(167, 139, 250, 0.4),
        transparent
      );
    }

    .about-intro {
      max-width: 800px;
      margin: 0 auto 3rem;
      text-align: center;
      color: #94a3b8;
      font-size: clamp(1rem, 3vw, 1.15rem);
      line-height: 1.8;
      padding: 0 1rem;
    }
  }

  .experience-item {
    animation: fadeInUp 0.6s ease forwards;
    opacity: 0;
  }

  .experience-item:nth-child(1) {
    animation-delay: 0.1s;
  }
  .experience-item:nth-child(2) {
    animation-delay: 0.2s;
  }
  .experience-item:nth-child(3) {
    animation-delay: 0.3s;
  }
`;

export default function Index() {
  const scrollToContact = () => {
    document
      .querySelector(".contact-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <StyledPage>
      <Navbar />
      <Hero onCtaClick={scrollToContact} />

      <Services />

      <FeaturedProjects />

      <section className="experience-section">
        <SectionTitle light>Background</SectionTitle>
        <p className="about-intro">
          With over a decade of experience building products and leading
          engineering teams, I bring a unique blend of technical depth and
          strategic thinking to every engagement. From scaling fintech platforms
          to launching community-driven applications, I&apos;ve helped
          organizations turn ambitious ideas into reality.
        </p>

        <ExperienceItem
          companyName="DPoP Labs"
          companyUrl="/dpop-labs"
          companyLogo="/dpop_labs_logo.jpeg"
          roles={[
            {
              title: "Founder & Technical Architect",
              duration: "Jun 2023 - Present",
              description:
                "Technology studio building creator-owned ecosystems. Designing modular platforms, new authentication models, and automated deployment infrastructure. Building the systems behind Renaissance City.",
            },
          ]}
        />

        <ExperienceItem
          companyName="Benzinga"
          companyUrl="/benzinga"
          companyLogo="/benzinga_logo.jpeg"
          roles={[
            {
              title: "Product Development Manager",
              duration: "Jan 2020 - May 2024",
              description:
                "Led product development initiatives and engineering teams, managing critical projects and implementing scalable solutions for financial technology platforms. Drove technical strategy and architecture decisions while mentoring team members.",
            },
            {
              title: "Full Stack Engineer",
              duration: "Feb 2019 - Jan 2020",
              description:
                "Developed and maintained full-stack applications for financial market data and news delivery. Built robust APIs, real-time data processing systems, and responsive web interfaces serving millions of users.",
            },
          ]}
        />

        <ExperienceItem
          companyName="MyFab5 (BestFoodFeed)"
          companyUrl="/myfab5"
          companyLogo="/myfab5.jpeg"
          roles={[
            {
              title: "Co-founder & Lead Developer",
              duration: "Dec 2012 - Aug 2018",
              description:
                "Built and scaled a community-powered media company reaching 2M+ food enthusiasts across 35 local publications. Developed CMS applications, marketing automation tools, and data processing pipelines to drive growth and engagement.",
            },
          ]}
        />
      </section>

      <Contact />
      <Footer />
    </StyledPage>
  );
}
