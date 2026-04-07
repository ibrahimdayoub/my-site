import styled from 'styled-components';

export const ContactForm = styled.form`
  width: 45%;

  @media ${({ theme }) => theme.breakpoints.mobile}{
    width: 90%;
    margin: auto;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary_light};
  border: 1px solid ${({ $error, theme }) => $error ? theme.colors.error : theme.colors.gray};
  color: ${({ theme }) => theme.colors.para_text_color};
  border-radius: 5px;
  padding: 15px;
  transition: all 0.5s;

  // UX Fixes
  font-family: inherit;
  font-size: 14px; 
  line-height: 1.5;
  resize: vertical;

  &::placeholder {
    color: ${({ $error, theme }) => $error ? theme.colors.error : theme.colors.para_text_color};
    font-size: 14px;
    transition: all 0.5s;
  }

  &:focus {
    outline: none;  
    border-color: ${({ $error, theme }) => $error ? theme.colors.error_dark : theme.colors.secondary};
    box-shadow: none;
  }
`;
