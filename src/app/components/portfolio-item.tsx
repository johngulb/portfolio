import styled from "styled-components";
import Image from "next/image";

interface PortfolioItemProps {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

const StyledPortfolioItem = styled.div`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
  position: relative;

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
  }

  .image-container {
    position: relative;
    overflow: hidden;
    height: 200px;

    @media (min-width: 768px) {
      height: 260px;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  &:hover img {
    transform: scale(1.1);
  }

  .image-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      135deg,
      rgba(96, 165, 250, 0.9),
      rgba(167, 139, 250, 0.9)
    );
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover .image-overlay {
    opacity: 1;
  }

  .view-project {
    color: white;
    font-size: 1.1rem;
    font-weight: 600;
    padding: 0.75rem 1.5rem;
    border: 2px solid white;
    border-radius: 50px;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    transform: translateY(10px);
    transition: transform 0.3s ease;

    svg {
      width: 18px;
      height: 18px;
      transition: transform 0.3s ease;
    }
  }

  &:hover .view-project {
    transform: translateY(0);
  }

  &:hover .view-project svg {
    transform: translateX(4px);
  }

  .item-content {
    padding: 1.5rem;
    border-top: 3px solid transparent;
    background: linear-gradient(white, white) padding-box,
      linear-gradient(45deg, #60a5fa, #a78bfa) border-box;

    @media (min-width: 768px) {
      padding: 1.75rem;
    }

    h3 {
      margin: 0 0 0.75rem 0;
      color: #1e293b;
      font-size: clamp(1.1rem, 3vw, 1.35rem);
      font-weight: 700;
      line-height: 1.3;
    }

    p {
      color: #64748b;
      line-height: 1.6;
      font-size: 0.95rem;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;

      @media (min-width: 768px) {
        font-size: 1rem;
        -webkit-line-clamp: 4;
      }
    }
  }
`;

export function PortfolioItem({
  href,
  imageSrc,
  imageAlt,
  title,
  description,
}: PortfolioItemProps) {
  return (
    <StyledPortfolioItem className="portfolio-item">
      <a href={href} target="_blank" rel="noopener noreferrer">
        <div className="image-container">
          <Image src={imageSrc} alt={imageAlt} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" />
          <div className="image-overlay">
            <span className="view-project">
              View Project
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
            </span>
          </div>
        </div>
        <div className="item-content">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </a>
    </StyledPortfolioItem>
  );
}
