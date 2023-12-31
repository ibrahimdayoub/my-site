import styled, { keyframes } from "styled-components";

const transformY = (deg) => keyframes`   
  from {
    transform: rotate(${deg}) translate(0px,30px);
  }
  to {
    transform: rotate(${deg}) translate(0px,0px);
  }
`

export const MainBody = styled.div`
  overflow:hidden;
  position:relative;
  background-color: ${({ theme }) => theme.colors.primary};
`

export const Container = styled.div`
  max-width: 1280px;
  margin: auto;
`

export const FlexContainer = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify || ''};
  align-items: ${(props) => props.align || ''};
  margin-right: ${(props) => props.mRight || 0};
  gap: ${({ gap }) => gap};
  flex-direction: ${({ rowReverse }) => rowReverse ? 'row-reverse' : 'row'};

  & > div {
    flex: ${({ fullWidthChild }) => fullWidthChild && 1};
  }

  @media ${({ theme }) => theme.breakpoints.mobile}{
    margin-right: 0px;
    display: ${({ responsiveFlex }) => responsiveFlex ? 'flex' : 'block'};
    flex-direction: ${({ responsiveDirection }) => responsiveDirection};
    justify-content: ${(props) => props.responsivejustify || ''};
    // gap: ${({ responsivegap }) => responsivegap};
  }

  @media(max-width: 350px) {  
    gap: ${({ responsivegap2 }) => responsivegap2};    
  }
`

export const FlexContainerAlt = styled.div`
  display: flex;
  justify-content: ${(props) => props.justify | ''};
  align-items: ${(props) => props.align || ''};
  gap:25px;

  & > div {
    flex: ${({ fullWidthChild }) => fullWidthChild && 1};
  }

  @media ${({ theme }) => theme.breakpoints.mobile}{
    flex-direction: column-reverse;
    align-items: ${(props) => props.responsivealign || ''};
  }
`

export const PaddingContainer = styled.div`
  padding-top: ${({ top }) => top};
  padding-bottom: ${({ bottom }) => bottom};
  padding-left: ${({ left }) => left};
  padding-right: ${({ right }) => right};

  @media ${({ theme }) => theme.breakpoints.mobile}{
    padding-top: ${({ responsiveTop }) => responsiveTop};
    padding-bottom: ${({ responsiveBottom }) => responsiveBottom};
    padding-left: ${({ responsiveLeft }) => responsiveLeft};
    padding-right: ${({ responsiveRight }) => responsiveRight};
  }
`

export const Heading = styled(PaddingContainer)`
  color:${({ theme }) => theme.colors.white};
  text-align: ${({ align }) => align};
  font-size: ${({ size }) => {
    switch (size) {
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

  @media ${({ theme }) => theme.breakpoints.mobile}{
    text-align: ${({ responsivealign }) => responsivealign};
    font-size: ${({ size }) => {
    switch (size) {
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
    font-size: ${({ size }) => {
    switch (size) {
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
  color: ${({ theme }) => theme.colors.secondary};
`

export const ParaText = styled(PaddingContainer)`
  color: ${({ theme }) => theme.colors.para_text_color};
  line-height: 2rem;
  text-align: justify;

  @media ${({ theme }) => theme.breakpoints.mobile}{
    text-align: ${({ responsivealign }) => responsivealign};
  }
`

export const Particle = styled.img`
  position: absolute;
  top: ${({ initialTop }) => initialTop};
  left: ${({ initialLeft }) => initialLeft};
  right: ${({ initialRight }) => initialRight};
  bottom: ${({ initialBottom }) => initialBottom};
  animation:  ${props => transformY(props.rotate)} 3s ${({ delay }) => delay || 0}s linear infinite;
  animation-direction: alternate;
  opacity:0.25;

  @media (max-width: 767px) {
    width: 15%;
  }
`

export const IconContainer = styled.div`
    color: ${({ color, theme }) => {
        switch (color) {
            case 'white':
                return theme.colors.white;

            case 'blue':
                return theme.colors.secondary;

            default:
                return;
        }
    }};
    font-size: ${({ size }) => size};

    @media(max-width: 350px) {
    font-size: ${({ responsivesize2 }) => responsivesize2};
  }
`

export const IconContainerAlt = styled.div`
  color: ${({ color, theme }) => {
    switch (color) {
        case 'white':
          return theme.colors.white;

        case 'blue':
          return theme.colors.secondary;

        default:
          return;
      }
  }};
  font-size: ${({ size }) => size};
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
    margin: 0 ${({ setMXAuto }) => setMXAuto ? 'auto' : 0};
  }

  @media(max-width: 350px) {
    padding: ${({ responsivepadding2 }) => responsivepadding2}; 
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
    margin: 0 ${({ setMXAuto }) => setMXAuto ? 'auto' : 0};
    padding: 0.25rem 0.5rem;
  }
`

export const ButtonAlt2 = styled.a`
  display: inline-block;
  font-size:16px;
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
    margin: 0 ${({ setMXAuto }) => setMXAuto ? 'auto' : 0};
    padding: 0.25rem 0.5rem;
    font-size:14px;
  }
`