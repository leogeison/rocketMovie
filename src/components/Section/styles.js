import { styled } from "styled-components";

export const Container = styled.section`
  margin: 40px 80px;

  > h2 {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    font-size: 20px;
    font-weight: 400;

    padding-bottom: 16px;
    margin-bottom: 24px;
  }
`;
