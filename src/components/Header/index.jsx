import {
  Container,
  Profile,
  ProfileImage,
  Logout,
  Brand,
  Search
} from './styles';
import { useAuth } from '../../hooks/auth';
import { Input } from '../../components/Input';
import { FiSearch } from 'react-icons/fi';
import { api } from '../../services/api';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

export function Header() {
  const { signOut, user } = useAuth();
  const avatarUrl = user.avatar
    ? `${api.defaults.baseURL}/files/${user.avatar}`
    : avatarPlaceholder;
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
          <strong>{user.name}</strong>
          <Logout onClick={signOut}>sair</Logout>
        </div>

        <ProfileImage to="/profile">
          <img src={avatarUrl} alt={user.name} />
        </ProfileImage>
      </Profile>
    </Container>
  );
}
