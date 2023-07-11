import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px auto;
  grid-template-areas:
    'header'
    'Content';

  > main {
    grid-area: Content;
    overflow-y: scroll;
    padding: 40px 0;

  }

  > main::-webkit-scrollbar {
      width: 8px;
    
    }
    
    > main::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.COLORS.SALMON};
      border-radius: 8px;
    
    }


`;

export const Content = styled.div`
  
  margin: 0 123px;

  display: flex;
  flex-direction: column;

  .backButton {
    display: flex;
    align-items: center;
    gap: 8px;

    > svg {
      color: ${({ theme }) => theme.COLORS.SALMON};
    }
  }

  > h1 {
    font-size: 36px;
    font-weight: 500;
    margin: 24px 0;
  }

  > p {
    font-size: 16px;
    text-align: justify;
  }

  .adjustTag {
    display: flex;
    margin: 40px 0;
  }
`;

export const Writer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  > img {
    width: 16px;
    height: 16px;
    border-radius: 50%;
  }

  > svg {
    color: ${({ theme }) => theme.COLORS.SALMON};
  }
`;
