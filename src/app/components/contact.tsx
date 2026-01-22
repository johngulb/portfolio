import styled from 'styled-components';
import { SectionTitle } from './section-title';

export function Contact() {
  return (
    <StyledContactSection className="contact-section">
      <SectionTitle>Get in Touch</SectionTitle>
      <div className="contact-content">
        <p>
          I&apos;m always interested in hearing about new projects and
          opportunities. Whether you have a question or just want to say hi,
          feel free to reach out!
        </p>

        <a href="mailto:john@dpop.tech" className="cta-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
            <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
          </svg>
          Send me an email
        </a>

        <div className="social-divider">
          <span>or connect with me on</span>
        </div>

        <div className="contact-links">
          <a
            href="https://www.linkedin.com/in/john-gulbronson-a285285b/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="social-link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
            </svg>
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/johngulb"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="social-link"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </StyledContactSection>
  );
}

const StyledContactSection = styled.section`
  background: linear-gradient(180deg, #f8fafc, #fff);
  padding: 5rem 1rem 6rem;

  @media (min-width: 768px) {
    padding: 6rem 2rem 8rem;
  }

  .contact-content {
    max-width: 620px;
    margin: 0 auto;
    text-align: center;
    padding: 0 1rem;

    p {
      color: #475569;
      font-size: clamp(1.05rem, 3vw, 1.25rem);
      margin-bottom: 2.5rem;
      line-height: 1.8;
    }

    .cta-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 0.75rem;
      padding: 1rem 2.5rem;
      background: linear-gradient(45deg, #60a5fa, #a78bfa);
      color: white;
      font-size: 1.1rem;
      font-weight: 600;
      border-radius: 50px;
      transition: all 0.3s ease;
      box-shadow: 0 4px 15px rgba(96, 165, 250, 0.3);

      svg {
        width: 22px;
        height: 22px;
      }

      &:hover {
        transform: translateY(-3px);
        box-shadow: 0 8px 25px rgba(96, 165, 250, 0.4);
      }
    }

    .social-divider {
      display: flex;
      align-items: center;
      margin: 2.5rem 0;
      gap: 1rem;

      &::before,
      &::after {
        content: '';
        flex: 1;
        height: 1px;
        background: linear-gradient(
          90deg,
          transparent,
          #e2e8f0,
          transparent
        );
      }

      span {
        color: #94a3b8;
        font-size: 0.9rem;
        white-space: nowrap;
      }
    }

    .contact-links {
      display: flex;
      justify-content: center;
      gap: 1rem;
      flex-wrap: wrap;

      @media (min-width: 768px) {
        gap: 1.5rem;
      }

      .social-link {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.75rem 1.25rem;
        background: white;
        border: 2px solid #e2e8f0;
        border-radius: 12px;
        color: #475569;
        font-size: 0.95rem;
        font-weight: 500;
        transition: all 0.3s ease;

        @media (min-width: 768px) {
          padding: 0.875rem 1.5rem;
          font-size: 1rem;
        }

        svg {
          width: 22px;
          height: 22px;
          color: #64748b;
          transition: color 0.3s ease;
        }

        &:hover {
          border-color: #60a5fa;
          color: #3b82f6;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(96, 165, 250, 0.15);

          svg {
            color: #3b82f6;
          }
        }
      }
    }
  }
`;
