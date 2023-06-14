import { Container }  from "./styles"
import { Button } from "../../components/Button";

export function Details() {
  return (
    <Container>
      <h1>Testando aplicação</h1>
      <span>Léo Geison</span>

      <Button title="Entrar" loading />
      <Button title="Salvar"/>
      <Button title="Cadastrar"/>
      
    </Container>
  );
}
