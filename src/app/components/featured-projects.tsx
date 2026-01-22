"use client";

import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

const allProjects = [
  {
    href: "https://renaissance.builddetroit.xyz",
    imageSrc: "/renaissance-city.png",
    title: "Renaissance City",
    description: "Event discovery app available on the App Store",
  },
  {
    href: "https://co.lab.builddetroit.xyz",
    imageSrc: "/co.lab-start.png",
    title: "Co.Lab",
    description: "Voice-first project planning with AI",
  },
  {
    href: "https://djq.builddetroit.xyz",
    imageSrc: "/djq-icon.png",
    title: "DJ Tap-In Queue",
    description: "Open decks management for DJs",
  },
  {
    href: "https://vibe.builddetroit.xyz",
    imageSrc: "/vibe-code-detroit.png",
    title: "Vibe Code Detroit",
    description: "Community coding sessions & workshops",
  },
  {
    href: "https://games.builddetroit.xyz",
    imageSrc: "/game-night.png",
    title: "Game Night",
    description: "In-person tournaments with real stakes",
  },
  {
    href: "https://lord.smearington.theethical.ai/events/unleashing-the-absurd",
    imageSrc: "/lord-smearington.jpg",
    title: "Lord Smearington's Gallery",
    description: "AI-powered interdimensional art experience",
  },
  {
    href: "https://artnightdetroit.com",
    imageSrc: "/artnight-cover.jpeg",
    title: "Art Night Detroit",
    description: "Monthly event for artists & collectors",
  },
  {
    href: "https://art.gods.work",
    imageSrc: "/regen-art.jpeg",
    title: "Regenerative Art Gallery",
    description: "Collaborative art gallery on web3",
  },
  {
    href: "https://earth.gods.work",
    imageSrc: "/arts-for-earth-blank.jpeg",
    title: "Arts for the Earth",
    description: "Fundraiser for environmental nonprofits",
  },
  {
    href: "https://gods.work",
    imageSrc: "/gods-work.jpeg",
    title: "Gods Work",
    description: "Empowering Detroit artists to give back",
  },
];

const StyledFeaturedProjects = styled.section`
  padding: 5rem 0;
  background: linear-gradient(180deg, #f1f5f9, #f8fafc);
  position: relative;

  @media (min-width: 768px) {
    padding: 6rem 0;
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

  .section-header {
    text-align: center;
    margin-bottom: 2rem;
    padding: 0 1.5rem;

    h2 {
      font-size: clamp(1.75rem, 5vw, 2.5rem);
      font-weight: 700;
      color: #1e293b;
      margin: 0;
    }
  }

  .scroll-wrapper {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none;
    -ms-overflow-style: none;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .projects-scroll-container {
    display: inline-flex;
    gap: 1.25rem;
    padding: 1rem 1.5rem 1.5rem;

    @media (min-width: 768px) {
      gap: 1.5rem;
      padding: 1rem 2rem 1.5rem;
    }

    @media (min-width: 1248px) {
      padding-left: calc((100vw - 1200px) / 2);
      padding-right: calc((100vw - 1200px) / 2);
    }
  }

  .project-card {
    flex: 0 0 260px;
    scroll-snap-align: start;
    background: white;
    border-radius: 16px;
    overflow: hidden;
    transition: all 0.3s ease;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);

    @media (min-width: 768px) {
      flex: 0 0 280px;
    }

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 12px 32px rgba(0, 0, 0, 0.1);
    }

    a {
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .image-container {
      position: relative;
      height: 150px;
      overflow: hidden;
      background: #f1f5f9;

      @media (min-width: 768px) {
        height: 160px;
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.4s ease;
    }

    &:hover img {
      transform: scale(1.05);
    }

    .card-content {
      padding: 1rem 1.25rem 1.25rem;

      h3 {
        font-size: 1rem;
        font-weight: 700;
        color: #1e293b;
        margin-bottom: 0.25rem;
        line-height: 1.3;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      p {
        font-size: 0.85rem;
        color: #64748b;
        line-height: 1.45;
        margin: 0;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        overflow: hidden;
      }
    }
  }

  .section-footer {
    text-align: center;
    margin-top: 2rem;
    padding: 0 1.5rem;

    .view-all-link {
      display: inline-flex;
      align-items: center;
      gap: 0.5rem;
      color: #60a5fa;
      font-size: 1rem;
      font-weight: 600;
      padding: 0.75rem 1.5rem;
      border: 2px solid #60a5fa;
      border-radius: 50px;
      transition: all 0.3s ease;

      svg {
        width: 18px;
        height: 18px;
        transition: transform 0.3s ease;
      }

      &:hover {
        background: #60a5fa;
        color: white;

        svg {
          transform: translateX(4px);
        }
      }
    }
  }
`;

export function FeaturedProjects() {
  return (
    <StyledFeaturedProjects className="featured-projects-section">
      <div className="section-header">
        <h2>Recent Work</h2>
      </div>

      <div className="scroll-wrapper">
        <div className="projects-scroll-container">
          {allProjects.map((project, index) => (
          <div key={index} className="project-card">
            <a href={project.href} target="_blank" rel="noopener noreferrer">
              <div className="image-container">
                <Image
                  src={project.imageSrc}
                  alt={project.title}
                  fill
                  sizes="280px"
                />
              </div>
              <div className="card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </a>
          </div>
          ))}
        </div>
      </div>

      <div className="section-footer">
        <Link href="/projects" className="view-all-link">
          View all projects
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
        </Link>
      </div>
    </StyledFeaturedProjects>
  );
}
