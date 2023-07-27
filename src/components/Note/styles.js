import { styled } from 'styled-components';

export const Container = styled.button`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_200};

  border: none;
  border-radius: 16px;

  padding: 32px;
  margin-bottom: 24px;

  > h1 {
    flex: 1;
    text-align: left;
    font-weight: 700;
    font-size: 24px;

    color: ${({ theme }) => theme.COLORS.WHITE};
    margin-bottom: 8px;
  }

  > P {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
    margin: 15px 0;
  }

  > footer {
    width: 100%;
    display: flex;
    margin-top: 24px;
  }
`;
