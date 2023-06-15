import { Container, Profile, Logout } from "./styles";

export function Header() {
  return (
    <Container>
      <Profile>
      <div>
        <strong>Léo Geison</strong>
        <Logout>
        sair
      </Logout>
        
      </div>

        <img src="https://github.com/leogeison.png" alt="foto do usuário" />
      </Profile>
               
    </Container>
  )
}


