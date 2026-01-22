import styled from 'styled-components';

interface SectionTitleProps {
  children: React.ReactNode;
  light?: boolean;
}

const StyledSectionTitle = styled.h2<{ light?: boolean }>`
  text-align: center;
  font-size: clamp(2rem, 5vw, 2.75rem);
  font-weight: 700;
  margin-bottom: 3.5rem;
  color: ${(props) => (props.light ? 'white' : '#1e293b')};
  position: relative;
  letter-spacing: -0.02em;

  @media (min-width: 768px) {
    margin-bottom: 4rem;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 4px;
    background: linear-gradient(45deg, #60a5fa, #a78bfa);
    border-radius: 4px;
  }

  &::before {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: ${(props) =>
      props.light ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)'};
    border-radius: 4px;
  }
`;

export function SectionTitle({ children, light }: SectionTitleProps) {
  return (
    <StyledSectionTitle className={`section-title ${light ? 'light' : ''}`} light={light}>
      {children}
    </StyledSectionTitle>
  );
}

