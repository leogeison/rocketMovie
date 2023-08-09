import {
  Container,
  Profile,
  ProfileImage,
  Logout,
  Brand,
  Search
} from './styles';
import { Input } from '../../components/Input';
import { FiSearch } from 'react-icons/fi';

export function Header() {
  return (
    <Container>
      <Brand>
        <h1>RocketMovies</h1>
      </Brand>

      <Search>
        <Input placeholder="Pesquisar pelo título" icon={FiSearch} />
      </Search>

      <Profile>
        <div>
          <strong>Léo Geison</strong>
          <Logout>sair</Logout>
        </div>

        <ProfileImage to="/profile">
          <img src="https://github.com/leogeison.png" alt="foto do usuário" />
        </ProfileImage>
      </Profile>
    </Container>
  );
}
