import styled from 'styled-components';

export const ContactForm = styled.form`
  width: 45%;

  @media ${({ theme }) => theme.breakpoints.mobile}{
    width: 90%;
    margin: auto;
  }
`;

export const FormLabel = styled.p`
  color: ${({ theme }) => theme.colors.para_text_color};
  font-size: 14px;
  padding-bottom: 10px;
`;

export const FormInput = styled.input`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary_light};
  border:1px solid ${({ theme }) => theme.colors.gray};
  color: ${({ theme }) => theme.colors.para_text_color};
  border-radius: 5px;
  padding: 15px;
  transition: all 0.5s;

  &::placeholder{
    color: ${({ theme }) => theme.colors.para_text_color};
  }

  &:focus {
    outline: none;  
    border-color: ${({ theme }) => theme.colors.secondary};
    box-shadow: none;
  }
`;
