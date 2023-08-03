import { styled } from 'styled-components';
export const Container = styled.div`
  display: flex;
  align-items: center;

  background-color: ${({ theme, isNew }) =>
    isNew ? 'transparent' : theme.COLORS.BACKGROUND_700};
  color: ${({ theme, isNew }) => theme.COLORS.WHITE};

  border: ${({ theme, isNew }) =>
    isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : 'none'};

  border-radius: 10px;
  padding-right: 16px;
  
 
  
  > button {
    border: none;
    background: none;
  }

  .button-addRemove { 
    color: ${({ theme }) => theme.COLORS.SALMON};

  }

  > input {
    width: 100%;
    height: 56px;

    padding: 16px;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
`;
