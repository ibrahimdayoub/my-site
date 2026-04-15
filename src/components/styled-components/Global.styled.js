import styled, { keyframes } from "styled-components";

const floatingPlusPulse = (deg) => keyframes`
  0% {
    transform: rotate(${deg}) translate(0, 0) scale(1);
    opacity: 0.1;
  }
  50% {
    transform: rotate(${deg}) translate(0, 25px) scale(1.1);
    opacity: 0.25;
  }
  100% {
    transform: rotate(${deg}) translate(0, 0) scale(1);
    opacity: 0.1;
  }
`;

export const MainBody = styled.div`
  overflow: hidden;
  position: relative;
  background-color: #0b0f1a;
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`

export const FlexContainer = styled.div`
  display: flex;
  justify-content: ${({$justify}) => $justify || ''};
  align-items: ${({$align}) => $align || ''};
  margin-right: ${({$mRight}) => $mRight || 0};
  gap: ${({ $gap }) => $gap};
  flex-direction: ${({ $rowreverse }) => $rowreverse ? 'row-reverse' : 'row'};
  background: ${({ $hasbg }) => $hasbg ? "#131b3080" : null};
  padding: ${({ $hasbg }) => $hasbg ? '25px' : null};
  border-radius: ${({ $hasbg }) => $hasbg ? '10px' : null};

  & > div {
    flex: ${({ $fullwidthchild }) => $fullwidthchild && 1};
  }

  @media ${({ theme }) => theme.breakpoints.mobile}{
    margin-right: 0px;
    display: ${({ $responsiveflex }) => $responsiveflex ? 'flex' : 'block'};
    flex-direction: ${({ $responsivedirection }) => $responsivedirection};
    justify-content: ${({$responsivejustify}) => $responsivejustify || ''};
    gap: ${({ $responsivegap }) => $responsivegap};
      padding: ${({ $hasbg }) => $hasbg ? '25px 10px 10px 10px' : null};
  }

  @media(max-width: 350px) {  
    gap: ${({ $responsivegap2 }) => $responsivegap2};    
  }
`

export const FlexContainerAlt = styled.div`
  display: flex;
  justify-content: ${({$justify}) => $justify | ''};
  align-items: ${({$align}) => $align || ''};
  gap:25px;

  & > div {
    flex: ${({ $fullwidthchild }) => $fullwidthchild && 1};
  }

  @media ${({ theme }) => theme.breakpoints.mobile}{
    flex-direction: column-reverse;
    align-items: ${({$responsivealign}) => $responsivealign || ''};
  }
`

export const PaddingContainer = styled.div`
  padding-top: ${({ $top }) => $top};
  padding-bottom: ${({ $bottom }) => $bottom};
  padding-left: ${({ $left }) => $left};
  padding-right: ${({ $right }) => $right};

  @media ${({ theme }) => theme.breakpoints.mobile}{
    padding-top: ${({ $responsivetop }) => $responsivetop};
    padding-bottom: ${({ $responsiveBottom }) => $responsiveBottom};
    padding-left: ${({ $responsiveleft }) => $responsiveleft};
    padding-right: ${({ $responsiveright }) => $responsiveright};
  }
`

export const Heading = styled(PaddingContainer)`
  color:${({ theme }) => theme.colors.white};
  text-align: ${({ $align }) => $align};
  font-size: ${({ $size }) => {
    switch ($size) {
      case 'h1':
        return '4rem';
      case 'h2':
        return '3rem';
      case 'h3':
        return '2rem';
      case 'h4':
        return '1rem';
      default:
        return;
    }
  }};
  font-weight: ${({ $weight }) => $weight || 'normal'};

  @media ${({ theme }) => theme.breakpoints.mobile}{
    text-align: ${({ $responsivealign }) => $responsivealign};
    font-size: ${({ $size }) => {
    switch ($size) {
      case 'h1':
        return '3rem';
      case 'h2':
        return '2rem';
      case 'h3':
        return '1.5rem';
      case 'h4':
        return '0.75rem';
      default:
        return;
    }
  }};

  @media(max-width: 350px) {
    font-size: ${({ $size }) => {
      switch ($size) {
        case 'h1':
          return '2.25rem';
        case 'h2':
          return '1.5rem';
        case 'h3':
          return '1.25rem';
        case 'h4':
          return '0.5625rem';
        default:
          return;
        }
      }};
    }
  }
`

export const BlueText = styled.span`
  color:  ${({ $error, theme }) => $error ? theme.colors.error : theme.colors.secondary};
`

export const ParaText = styled(PaddingContainer)`
  color: ${({ theme }) => theme.colors.para_text_color};
  text-align: justify;
  line-height: 1.5;

  @media ${({ theme }) => theme.breakpoints.mobile}{
    font-size:14px;
    text-align: ${({ $responsivealign }) => $responsivealign};
  }
`

export const Particle = styled.img`
  position: absolute;
  top: ${({ $initialtop }) => $initialtop};
  left: ${({ $initialleft }) => $initialleft};
  right: ${({ $initialright }) => $initialright};
  bottom: ${({ $initialbottom }) => $initialbottom};
  animation: ${({$rotate}) => floatingPlusPulse($rotate)} 4s ease-in-out infinite;
  animation-direction: alternate;
  opacity:0.15;

  @media (max-width: 767px) {
    width: 15%;
  }
`

export const IconContainer = styled.div`
  display:flex;
  align-items:center;

  color: ${({ $color, theme }) => {
    switch ($color) {
      case 'white':
        return theme.colors.white;
      case 'blue':
        return theme.colors.secondary;
      default:
        return;
    }
  }};
  
  font-size: ${({ $size }) => $size};

  @media ${({ theme }) => theme.breakpoints.mobile}{
    font-size: ${({ $responsivesize }) => $responsivesize};
  }
`

export const IconContainerAlt = styled.div`
  color: ${({ $color, theme }) => {
    switch ($color) {
      case 'white':
        return theme.colors.white;
      case 'blue':
        return theme.colors.secondary;
      default:
        return;
    }
  }};

  font-size: ${({ $size }) => $size};
  display: none;

  @media (max-width: 767px) {
    display: block;
  }
`

export const Button = styled.a`
  display: inline-block;
  width: max-content;
  padding: 0.5rem 0.75rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary_light};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease; 

  &:hover{
    color: ${({ theme }) => theme.colors.primary_light};
    background-color: ${({ theme }) => theme.colors.white};
  }

  @media ${({ theme }) => theme.breakpoints.mobile}{
    margin: 0 ${({ $setMXAuto }) => $setMXAuto ? 'auto' : 0};
  }

  @media(max-width: 350px) {
    padding: ${({ $responsivepadding2 }) => $responsivepadding2}; 
    font-size: 14px;
  }
`

export const ButtonAlt = styled.button`
  display: inline-block;
  width: max-content;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary_light};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease; 

  &:hover{
    color: ${({ theme }) => theme.colors.primary_light};
    background-color: ${({ theme }) => theme.colors.white};
  }

  @media ${({ theme }) => theme.breakpoints.mobile}{
    margin: 0 ${({ $setMXAuto }) => $setMXAuto ? 'auto' : 0};
    padding: 0.25rem 0.5rem;
  }
`

export const ButtonAlt2 = styled.a`
  display: inline-block;
  width: max-content;
  padding: 0.5rem 1rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.primary_light};
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 5px;
  cursor: pointer;
  transition: all 0.3s ease; 
  font-size: 14px;

  &:hover{
    color: ${({ theme }) => theme.colors.primary_light};
    background-color: ${({ theme }) => theme.colors.white};
  }

  @media ${({ theme }) => theme.breakpoints.mobile}{
    margin: 0 ${({ $setMXAuto }) => $setMXAuto ? 'auto' : 0};
    padding: 0.25rem 0.5rem;
    font-size:12px;
  }
`