import { styled } from 'styled-components';

export const Container = styled.span`
  font-size: 12px;
  padding: 8px 16px;
  border-radius: 8px;
  margin-right: 24px;

  color: ${({ theme }) => theme.COLORS.WHITE};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
`;
