"use client";

import styled from "styled-components";
import { PortfolioItem } from "../components/portfolio-item";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";
import Link from "next/link";

const StyledProjectsPage = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    "Helvetica Neue", Arial, sans-serif;
  min-height: 100vh;

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

  .projects-hero {
    background: linear-gradient(135deg, #0f172a, #1e293b);
    padding: 8rem 2rem 4rem;
    text-align: center;

    @media (min-width: 768px) {
      padding: 10rem 2rem 5rem;
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

    h1 {
      font-size: clamp(2rem, 6vw, 3rem);
      font-weight: 700;
      color: white;
      margin-bottom: 1rem;
    }

    p {
      color: #94a3b8;
      font-size: clamp(1rem, 3vw, 1.2rem);
      max-width: 600px;
      margin: 0 auto;
      line-height: 1.7;
    }
  }

  .projects-section {
    background: linear-gradient(180deg, #f1f5f9, #f8fafc);
    padding: 4rem 1rem 5rem;

    @media (min-width: 768px) {
      padding: 5rem 2rem 6rem;
    }
  }

  .projects-grid {
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
`;

export default function ProjectsPage() {
  return (
    <StyledProjectsPage>
      <Navbar />

      <div className="projects-hero">
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
        <h1>Projects & Case Studies</h1>
        <p>
          A collection of projects I&apos;ve built for communities, startups, and
          organizations—from event platforms to AI-powered tools.
        </p>
      </div>

      <section className="projects-section">
        <div className="projects-grid">
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

      <Footer />
    </StyledProjectsPage>
  );
}
