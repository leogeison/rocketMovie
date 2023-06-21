import { styled } from 'styled-components';

export const Container = styled.span`
  font-size: 16px;
  padding: 16px;
  border-radius: 10px;
  margin-right: 24px;

  

  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;
