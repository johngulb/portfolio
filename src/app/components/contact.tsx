"use client";

import { useState, FormEvent } from "react";
import styled from "styled-components";
import { SectionTitle } from "./section-title";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Failed to submit form");
    }
  };

  return (
    <StyledContactSection className="contact-section">
      <SectionTitle light>Start a Conversation</SectionTitle>
      <div className="contact-content">
        <p>
          Have a project in mind or want to discuss how I can help your
          organization? Fill out the form below and I&apos;ll get back to you
          within 24 hours.
        </p>

        {status === "success" ? (
          <div className="success-message">
            <div className="icon-wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3>Message Sent!</h3>
            <p>Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
            <button
              type="button"
              className="reset-button"
              onClick={() => setStatus("idle")}
            >
              Send Another Message
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            {status === "error" && (
              <div className="error-message">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <line x1="12" y1="8" x2="12" y2="12" />
                  <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input
                  type="text"
                  id="name"
                  required
                  disabled={status === "loading"}
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="Your name"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  required
                  disabled={status === "loading"}
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="company">Company (optional)</label>
              <input
                type="text"
                id="company"
                disabled={status === "loading"}
                value={formData.company}
                onChange={(e) =>
                  setFormData({ ...formData, company: e.target.value })
                }
                placeholder="Your organization"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message *</label>
              <textarea
                id="message"
                required
                rows={5}
                disabled={status === "loading"}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Tell me about your project or how I can help..."
              />
            </div>

            <button
              type="submit"
              className="submit-button"
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <>
                  <span className="spinner" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 2L11 13" />
                    <path d="M22 2l-7 20-4-9-9-4 20-7z" />
                  </svg>
                </>
              )}
            </button>
          </form>
        )}

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
  background: linear-gradient(180deg, #0f172a, #1e293b);
  padding: 5rem 1rem 6rem;

  @media (min-width: 768px) {
    padding: 6rem 2rem 8rem;
  }

  .contact-content {
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
    padding: 0 1rem;

    > p {
      color: #94a3b8;
      font-size: clamp(1rem, 3vw, 1.15rem);
      margin-bottom: 2.5rem;
      line-height: 1.7;
    }

    .success-message {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: linear-gradient(135deg, rgba(34, 197, 94, 0.08), rgba(34, 197, 94, 0.02));
      border: 1px solid rgba(34, 197, 94, 0.2);
      border-radius: 20px;
      padding: 3rem 2rem;
      text-align: center;

      .icon-wrapper {
        width: 72px;
        height: 72px;
        border-radius: 50%;
        background: linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(34, 197, 94, 0.1));
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 1.5rem;

        svg {
          width: 36px;
          height: 36px;
          color: #22c55e;
        }
      }

      h3 {
        color: #f0fdf4;
        font-size: 1.75rem;
        font-weight: 700;
        margin-bottom: 0.75rem;
        letter-spacing: -0.01em;
      }

      p {
        color: #94a3b8;
        font-size: 1.05rem;
        margin-bottom: 2rem;
        line-height: 1.6;
      }

      .reset-button {
        background: rgba(34, 197, 94, 0.1);
        border: 1px solid rgba(34, 197, 94, 0.3);
        color: #22c55e;
        padding: 0.85rem 1.75rem;
        border-radius: 50px;
        font-size: 0.95rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;

        &:hover {
          background: rgba(34, 197, 94, 0.15);
          border-color: rgba(34, 197, 94, 0.5);
          transform: translateY(-2px);
        }
      }
    }

    .error-message {
      display: flex;
      align-items: center;
      gap: 0.75rem;
      background: rgba(239, 68, 68, 0.1);
      border: 1px solid rgba(239, 68, 68, 0.3);
      border-radius: 12px;
      padding: 1rem 1.25rem;
      margin-bottom: 1.5rem;
      text-align: left;

      svg {
        width: 20px;
        height: 20px;
        color: #ef4444;
        flex-shrink: 0;
      }

      span {
        color: #fca5a5;
        font-size: 0.95rem;
      }
    }

    .contact-form {
      text-align: left;

      .form-row {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;

        @media (min-width: 640px) {
          grid-template-columns: 1fr 1fr;
        }
      }

      .form-group {
        margin-bottom: 1.25rem;

        label {
          display: block;
          color: #e2e8f0;
          font-size: 0.9rem;
          font-weight: 500;
          margin-bottom: 0.5rem;
        }

        input,
        textarea {
          width: 100%;
          padding: 0.875rem 1rem;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 12px;
          color: white;
          font-size: 1rem;
          transition: all 0.3s ease;

          &::placeholder {
            color: #64748b;
          }

          &:focus {
            outline: none;
            border-color: #60a5fa;
            background: rgba(255, 255, 255, 0.08);
            box-shadow: 0 0 0 3px rgba(96, 165, 250, 0.1);
          }

          &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
          }
        }

        textarea {
          resize: vertical;
          min-height: 120px;
        }
      }

      .submit-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.75rem;
        width: 100%;
        padding: 1rem 2rem;
        margin-top: 0.5rem;
        background: linear-gradient(45deg, #60a5fa, #a78bfa);
        color: white;
        font-size: 1.1rem;
        font-weight: 600;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        transition: all 0.3s ease;
        box-shadow: 0 4px 15px rgba(96, 165, 250, 0.3);

        svg {
          width: 20px;
          height: 20px;
        }

        .spinner {
          width: 20px;
          height: 20px;
          border: 2px solid rgba(255, 255, 255, 0.3);
          border-top-color: white;
          border-radius: 50%;
          animation: spin 0.8s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        &:hover:not(:disabled) {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px rgba(96, 165, 250, 0.4);
        }

        &:disabled {
          opacity: 0.8;
          cursor: not-allowed;
        }
      }
    }

    .social-divider {
      display: flex;
      align-items: center;
      margin: 2.5rem 0;
      gap: 1rem;

      &::before,
      &::after {
        content: "";
        flex: 1;
        height: 1px;
        background: linear-gradient(
          90deg,
          transparent,
          rgba(255, 255, 255, 0.15),
          transparent
        );
      }

      span {
        color: #64748b;
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
        background: rgba(255, 255, 255, 0.05);
        border: 1px solid rgba(255, 255, 255, 0.1);
        border-radius: 12px;
        color: #94a3b8;
        font-size: 0.95rem;
        font-weight: 500;
        transition: all 0.3s ease;

        @media (min-width: 768px) {
          padding: 0.875rem 1.5rem;
          font-size: 1rem;
        }

        svg {
          width: 20px;
          height: 20px;
          color: #64748b;
          transition: color 0.3s ease;
        }

        &:hover {
          border-color: #60a5fa;
          color: #60a5fa;
          background: rgba(96, 165, 250, 0.1);

          svg {
            color: #60a5fa;
          }
        }
      }
    }
  }
`;
