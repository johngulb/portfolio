"use client";

import styled from "styled-components";
import { PortfolioItem } from "./components/portfolio-item";
import { ExperienceItem } from "./components/experience-item";
import { Contact } from "./components/contact";
import { SectionTitle } from "./components/section-title";
import { Hero } from "./components/hero";
import { Navbar } from "./components/navbar";
import { Footer } from "./components/footer";

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

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .portfolio-section,
  .experience-section {
    padding: 5rem 1rem;

    @media (min-width: 768px) {
      padding: 7rem 2rem;
    }
  }

  .portfolio-section {
    background: linear-gradient(180deg, #f1f5f9, #f8fafc);
    position: relative;

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
  }

  .experience-section {
    background: linear-gradient(135deg, #0f172a, #1e293b);
    color: white;
    position: relative;

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
  }

  .portfolio-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 0.5rem;

    @media (min-width: 640px) {
      gap: 2rem;
      padding: 0 1rem;
    }

    @media (min-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1024px) {
      grid-template-columns: repeat(3, 1fr);
      gap: 2.5rem;
    }
  }

  .portfolio-item {
    animation: fadeInUp 0.6s ease forwards;
    opacity: 0;
  }

  .portfolio-item:nth-child(1) { animation-delay: 0.1s; }
  .portfolio-item:nth-child(2) { animation-delay: 0.15s; }
  .portfolio-item:nth-child(3) { animation-delay: 0.2s; }
  .portfolio-item:nth-child(4) { animation-delay: 0.25s; }
  .portfolio-item:nth-child(5) { animation-delay: 0.3s; }
  .portfolio-item:nth-child(6) { animation-delay: 0.35s; }
  .portfolio-item:nth-child(7) { animation-delay: 0.4s; }
  .portfolio-item:nth-child(8) { animation-delay: 0.45s; }
  .portfolio-item:nth-child(9) { animation-delay: 0.5s; }
  .portfolio-item:nth-child(10) { animation-delay: 0.55s; }
  .portfolio-item:nth-child(11) { animation-delay: 0.6s; }
  .portfolio-item:nth-child(12) { animation-delay: 0.65s; }

  .experience-item {
    animation: fadeInUp 0.6s ease forwards;
    opacity: 0;
  }

  .experience-item:nth-child(1) { animation-delay: 0.1s; }
  .experience-item:nth-child(2) { animation-delay: 0.2s; }
  .experience-item:nth-child(3) { animation-delay: 0.3s; }
`;

export default function Index() {
  const scrollToPortfolio = () => {
    document
      .querySelector(".portfolio-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <StyledPage>
      <Navbar />
      <Hero onExploreClick={scrollToPortfolio} />

      <section className="portfolio-section">
        <SectionTitle>Featured Projects</SectionTitle>
        <div className="portfolio-grid">
          {/* <PortfolioItem
            href="https://github.com/buidl-renaissance"
            imageSrc="/digital-renaissance-hands.jpeg"
            imageAlt="Buidl Renaissance"
            title="Buidl Renaissance"
            description="A collaborative platform empowering developers to create and share impactful open source projects."
          /> */}
          {/* <PortfolioItem
            href="https://builddetroit.xyz"
            imageSrc="/penobscot.jpeg"
            imageAlt="Build Detroit"
            title="Build Detroit"
            description="BUIDL Detroit is a community-driven initiative empowering developers, designers, and creators to build open-source tools that support Detroit’s creative economy through digital identity, decentralized events, and community collaboration."
          /> */}
          <PortfolioItem
            href="https://renaissance.builddetroit.xyz"
            imageSrc="/renaissance-city.png"
            imageAlt="Renaissance City"
            title="Renaissance City"
            description="Discover events and connect with locals. A living app ecosystem where independent App Blocks connect into streets and neighborhoods—shaped by the people who show up and build. Available on the App Store."
          />
          <PortfolioItem
            href="https://djq.builddetroit.xyz"
            imageSrc="/djq-icon.png"
            imageAlt="DJ Tap-In Queue"
            title="DJ Tap-In Queue"
            description="The Decks: Your city's dopest open decks experience. Tap in for a 20-minute set, link up for back-to-backs, and keep the party rolling. Features auto-timers, seamless changeovers, and networking tools for DJs to shine."
          />
          <PortfolioItem
            href="https://games.builddetroit.xyz"
            imageSrc="/game-night.png"
            imageAlt="Game Night"
            title="Game Night"
            description="Renaissance City Games: In-person tournaments with real stakes. Compete in pool, chess, and euchre tournaments. Limited seats, winners rewarded."
          />
          <PortfolioItem
            href="https://co.lab.builddetroit.xyz"
            imageSrc="/co.lab-start.png"
            imageAlt="Co.Lab"
            title="Co.Lab"
            description="A voice-first project planning tool for creative teams. Capture your collaborative conversations naturally, without interrupting your creative flow. Our AI automatically organizes your ideas into tasks, timelines, and action items. Share the structured plan, assign tasks, and track progress as a team."
          />
          <PortfolioItem
            href="https://vibe.builddetroit.xyz"
            imageSrc="/vibe-code-detroit.png"
            imageAlt="Vibe Code Detroit"
            title="Vibe Code Detroit"
            description="A community of tech enthusiasts and creators coming together to build meaningful solutions through Vibe Coding. Collaborative coding sessions, workshops, and projects designed to uplift Detroit through innovation and creativity."
          />
          <PortfolioItem
            href="https://lord.smearington.theethical.ai/events/unleashing-the-absurd"
            imageSrc="/lord-smearington.jpg"
            imageAlt="Lord Smearington's Absurd Gallery"
            title="Lord Smearington's Absurd Gallery"
            description="Lord Smearington's Absurd Gallery is an interdimensional art experience and Sui Overflow 2025 Hackathon project that blends AI, storytelling, and blockchain to invite you into a surreal world where creativity and chaos collide. Come by May 17th, 2025 for the opening."
          />
          <PortfolioItem
            href="https://art.gods.work"
            imageSrc="/regen-art.jpeg"
            imageAlt="Regenerative Art Gallery"
            title="Regenerative Art Gallery"
            description="A collaborative art gallery by Detroit artists leveraging the power of web3."
          />
          <PortfolioItem
            href="https://artnightdetroit.com"
            imageSrc="/artnight-cover.jpeg"
            imageAlt="Art Night Detroit"
            title="Art Night Detroit"
            description="An immersive monthly event fostering connections between artists, collectors, and art enthusiasts."
          />
          <PortfolioItem
            href="https://earth.gods.work"
            imageSrc="/arts-for-earth-blank.jpeg"
            imageAlt="ARTS FOR THE EARTH"
            title="ARTS FOR THE EARTH"
            description="A fundraiser event hosted by local artists where $2800 was raised for Water Protectors Network, Friends of the Rouge, & Greening of Detroit—supporting the vital work of protecting our planet and its future generations."
          />

          <PortfolioItem
            href="https://pizza.builddetroit.xyz"
            imageSrc="/pizza-party.jpg"
            imageAlt="Detroit Bitcoin Pizza Party"
            title="Detroit Bitcoin Pizza Party"
            description="The Detroit edition of PizzaDAO's Global Bitcoin Pizza Party joins forces with Art Night for an unforgettable evening of pizza, music, and interactive art!"
          />
          <PortfolioItem
            href="https://gods.work"
            imageSrc="/gods-work.jpeg"
            imageAlt="Gods"
            title="Gods Work"
            description="Empowering Detroit artists to give back with free, custom-stretched canvas frames to make a positive impact on society."
          />
          <PortfolioItem
            href="https://stu.gods.work"
            imageSrc="/studio-202.jpeg"
            imageAlt="Studio 202"
            title="Studio 202"
            description="A studio space for Detroit artists to connect, collaborate, and create."
          />
        </div>
      </section>

      <section className="experience-section">
        <SectionTitle light>Work Experience</SectionTitle>

        <ExperienceItem
          companyName="DPoP Labs"
          companyUrl="https://www.linkedin.com/company/dpop-labs/"
          companyLogo="/dpop_labs_logo.jpeg"
          roles={[
            {
              title: "Founder",
              duration: "Jun 2023 - Present",
              description:
                "Leading innovative technology solutions for community-driven projects in Detroit.",
            },
          ]}
        />

        <ExperienceItem
          companyName="Benzinga"
          companyUrl="https://www.linkedin.com/company/benzinga/"
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
          companyUrl="https://www.instagram.com/bestfooddetroit"
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
