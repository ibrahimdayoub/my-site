import styled from "styled-components";

export const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  margin-top: 2.5rem;

  @media ${({ theme }) => theme.breakpoints.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${({ theme }) => theme.breakpoints.mobile} {
    grid-template-columns: 1fr;
  }
`;

export const StatCard = styled.div`
  position: relative;
  padding: 2.5rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primary_light}; 
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 0.5rem;
  transition: all 0.3s ease;
  overflow: hidden;
  z-index: 1;

  .bg-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 135px;
    color: ${({ theme }) => theme.colors.gray};
    opacity: 0.1;
    z-index: -1;
    transition: all 0.35s ease;
    pointer-events: none;
  }

  &:hover .bg-icon {
    opacity: 0.2;
  }

  @media ${({ theme }) => theme.breakpoints.mobile} {
    padding: 1.5rem;
    
    .bg-icon {
      top: 50%;
      right: 10px;
      left: unset;
      transform: translate(0%, -50%);
      font-size: 75px;
      opacity: 0.5;
    }
  }
`;

export const StatNumber = styled.h2`
  font-size: 2.5rem;
  color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 0.5rem;

  @media ${({ theme }) => theme.breakpoints.mobile} {
    font-size: 2rem;
  }
`;

export const StatTitle = styled.p`
  color: ${({ theme }) => theme.colors.white};
  font-size: 1rem;
  text-transform: uppercase;
`;