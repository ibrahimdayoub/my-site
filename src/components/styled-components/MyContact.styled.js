import styled, { css } from 'styled-components';

export const ContactForm = styled.form`
  width: 45%;

  @media ${({ theme }) => theme.breakpoints.mobile}{
    width: 90%;
    margin: auto;
  }
`;


const sharedStyles = css`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.primary_light};
  border: 1px solid ${({ $error, theme }) => $error ? theme.colors.error : theme.colors.gray};
  color: ${({ theme }) => theme.colors.para_text_color};
  border-radius: 5px;
  padding: 15px;
  transition: all 0.5s;
  font-family: inherit;
  font-size: 14px !important;
  line-height: 1.5;

  &::placeholder {
    color: ${({ $error, theme }) => $error ? theme.colors.error : theme.colors.para_text_color};
    font-size: 14px !important;
  }

  &:focus {
    outline: none;
    border-color: ${({ $error, theme }) => $error ? theme.colors.error_dark : theme.colors.secondary};
  }
`;

export const FormInput = styled.input`
  ${sharedStyles}
`;

export const FormArea = styled.textarea`
  ${sharedStyles}
  resize: vertical;
  min-height: 100px;
`;

// export const FormInput = styled.input`
//   width: 100%;
//   background-color: ${({ theme }) => theme.colors.primary_light};
//   border: 1px solid ${({ $error, theme }) => $error ? theme.colors.error : theme.colors.gray};
//   color: ${({ theme }) => theme.colors.para_text_color};
//   border-radius: 5px;
//   padding: 15px;
//   transition: all 0.5s;

//   // UX Fixes
//   font-family: inherit;
//   font-size: 14px !important; 
//   line-height: 1.5;
//   resize: vertical;

//   & {
//     font-size: 14px !important;
//   }

//   &::placeholder {
//     color: ${({ $error, theme }) => $error ? theme.colors.error : theme.colors.para_text_color};
//     font-size: 14px !important;
//     transition: all 0.5s;
//   }

//   &:focus {
//     outline: none;  
//     border-color: ${({ $error, theme }) => $error ? theme.colors.error_dark : theme.colors.secondary};
//     box-shadow: none;
//   }
// `;

// export const FormArea = styled.textarea`
//   width: 100%;
//   background-color: ${({ theme }) => theme.colors.primary_light};
//   border: 1px solid ${({ $error, theme }) => $error ? theme.colors.error : theme.colors.gray};
//   color: ${({ theme }) => theme.colors.para_text_color};
//   border-radius: 5px;
//   padding: 15px;
//   transition: all 0.5s;

//   // UX Fixes
//   font-family: inherit;
//   font-size: 14px !important; 
//   line-height: 1.5;
//   resize: vertical;

//   & {
//     font-size: 14px !important;
//   }

//   &::placeholder {
//     color: ${({ $error, theme }) => $error ? theme.colors.error : theme.colors.para_text_color};
//     font-size: 14px !important;
//     transition: all 0.5s;
//   }

//   &:focus {
//     outline: none;  
//     border-color: ${({ $error, theme }) => $error ? theme.colors.error_dark : theme.colors.secondary};
//     box-shadow: none;
//   }
// `;