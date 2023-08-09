import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  grid-area: header;
  height: 105px;
  width: 100%;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  display: flex;
  justify-content: space-between;

  padding: 0 123px;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 0 64px;
  flex-grow: 1;
`;

export const Brand = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > h1 {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.SALMON};
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;

  > div {
    display: flex;
    flex-direction: column;
    margin-right: 9px;
    line-height: 18px;

    strong {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const ProfileImage = styled(Link)`
  > img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
  `;

export const Logout = styled.button`
  border: none;
  background: none;
  font-size: 14px;
  color: ${({ theme }) => theme.COLORS.GRAY_300};
  display: flex;
  justify-content: end;
`;
