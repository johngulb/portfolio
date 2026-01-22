import styled from "styled-components";
import Image from "next/image";

interface ExperienceItemProps {
  companyName: string;
  companyUrl: string;
  companyLogo: string;
  roles: {
    title: string;
    duration: string;
    description: string;
  }[];
}

const StyledExperienceItem = styled.div`
  max-width: 900px;
  margin: 0 auto 1.5rem;
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 20px;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  border: 1px solid rgba(255, 255, 255, 0.06);
  position: relative;

  @media (min-width: 768px) {
    padding: 2rem 2.5rem;
    margin-bottom: 2rem;
  }

  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: linear-gradient(180deg, #60a5fa, #a78bfa);
    border-radius: 4px 0 0 4px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover {
    transform: translateX(8px);
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(96, 165, 250, 0.2);

    &::before {
      opacity: 1;
    }
  }

  .company {
    display: flex;
    align-items: center;
    margin-bottom: 1.25rem;
    padding-bottom: 1.25rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);

    a {
      display: flex;
      align-items: center;
      gap: 1rem;
      text-decoration: none;
      color: #60a5fa;
      font-size: clamp(1.15rem, 4vw, 1.4rem);
      font-weight: 600;
      transition: all 0.3s ease;

      &:hover {
        color: #a78bfa;
      }

      .company-logo-wrapper {
        position: relative;
        width: 44px;
        height: 44px;
        border-radius: 12px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        flex-shrink: 0;

        @media (min-width: 768px) {
          width: 52px;
          height: 52px;
          border-radius: 14px;
        }
      }

      img.company-logo {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .roles {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;

    > div {
      padding-left: 0;
      position: relative;

      @media (min-width: 768px) {
        padding-left: 1rem;
      }

      &:not(:last-child) {
        padding-bottom: 1.25rem;
        border-bottom: 1px dashed rgba(255, 255, 255, 0.08);
      }
    }
  }

  h3 {
    color: #fff;
    font-size: clamp(1.15rem, 3.5vw, 1.35rem);
    font-weight: 600;
    margin-bottom: 0.35rem;
    text-align: left;
    letter-spacing: -0.01em;
  }

  .duration {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    color: #a78bfa;
    font-size: 0.9rem;
    font-weight: 500;
    margin-bottom: 0.75rem;
    text-align: left;

    @media (min-width: 768px) {
      font-size: 0.95rem;
    }

    &::before {
      content: '';
      width: 6px;
      height: 6px;
      background: linear-gradient(45deg, #60a5fa, #a78bfa);
      border-radius: 50%;
    }
  }

  .description {
    color: #cbd5e1;
    line-height: 1.7;
    font-size: 0.95rem;

    @media (min-width: 768px) {
      font-size: 1.05rem;
    }
  }
`;

export function ExperienceItem({
  companyName,
  companyUrl,
  companyLogo,
  roles,
}: ExperienceItemProps) {
  return (
    <StyledExperienceItem className="experience-item">
      <div className="company">
        <a href={companyUrl} target="_blank" rel="noopener noreferrer">
          <div className="company-logo-wrapper">
            <Image
              src={companyLogo}
              alt={companyName}
              className="company-logo"
              fill
              sizes="52px"
            />
          </div>
          {companyName}
        </a>
      </div>
      <div className="roles">
        {roles.map((role, index) => (
          <div key={index}>
            <h3>{role.title}</h3>
            <div className="duration">{role.duration}</div>
            <div className="description">{role.description}</div>
          </div>
        ))}
      </div>
    </StyledExperienceItem>
  );
}
