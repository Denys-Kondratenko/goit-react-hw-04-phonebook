import { Field, Form } from 'formik';
import styled from 'styled-components';

export const Input = styled(Field)`
  border: none;
  color: ${({ theme }) => theme.colors.black};
  box-shadow: 0px 2px 8px 1px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`;

export const ContactForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 400px;
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.black};
`;

export const ContactLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  font-weight: 600;
  p {
    color: ${({ theme }) => theme.colors.red};
    font-weight: 400;
    font-size: 12px;
  }
`;

export const AddButton = styled.button`
  border-radius: 5px;
  border: none;
  cursor: pointer;
  box-shadow: 0px 2px 8px 1px rgba(0, 0, 0, 0.3);
`;
