import { Container, Profile, Logout, Brand, Search } from './styles';
import { Input } from '../../components/Input';

export function Header() {
  return (
    <Container>
     <Brand>
     <h1>RocketMovies</h1>
     </Brand>
     
     <Search>
     <Input placeholder="Pesquisar pelo título"/>
      
     </Search>

     
      <Profile> 
        <div>
          <strong>Léo Geison</strong>
          <Logout>sair</Logout>
        </div>

        <img src="https://github.com/leogeison.png" alt="foto do usuário" />
      </Profile>
    </Container>
  );
}
