import { styled } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    'header'
    'content';

  > main {
    grid-area: content;
    overflow-y: auto;
  }

  .inputs {
    width: 100%;

    display: flex;
    gap: 40px;
    margin-bottom: 40px;
  }

  .tags {
    display: flex;
    gap: 24px;
    flex-wrap: wrap;
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border-radius: 8px;
    padding: 16px;
    margin: 24px 0 40px;
  }
`;

export const Form = styled.form`
  width: 1137px;
  margin: 40px auto;

  > header {
    display: flex;
    flex-direction: column;

    > a {
      display: flex;
      align-items: center;
      gap: 8px;
      color: ${({ theme }) => theme.COLORS.SALMON};
    }

    > h1 {
      font-size: 36px;
      margin: 24px 0 40px;
    }
  }
`;
