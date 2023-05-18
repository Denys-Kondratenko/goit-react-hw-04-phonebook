import { Field } from 'formik';
import styled from 'styled-components';

export const FilterForm = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Input = styled(Field)`
  border: none;
  color: ${({ theme }) => theme.colors.black};
  box-shadow: 0px 2px 8px 1px rgba(0, 0, 0, 0.3);
  border-radius: 5px;
`;
