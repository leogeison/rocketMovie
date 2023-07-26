import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 105px 120px auto;
  grid-template-areas:
    'header'
    'mySection'
    'content';

  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 0 123px;
  }

  > main::-webkit-scrollbar {
    width: 10px;
  }

  > main::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.COLORS.SALMON};
    border-radius: 8px;
  }
`;

export const MySection = styled.div`
  grid-area: mySection;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 123px;

  > h2 {
    font-size: 32px;
  }
`;

export const NewMovie = styled.button`
  width: 207px;
  height: 48px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.SALMON};
  color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  border: none;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    margin-right: 8px;
  }
`;
