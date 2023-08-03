import { FiArrowLeft } from 'react-icons/fi';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { TextArea } from '../../components/TextArea';
import { NoteItem } from '../../components/NoteItem';
import { Section } from '../../components/Section';
import { Container, Form } from './styles';
import { Button } from '../../components/Button';

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <a href="/">
              <FiArrowLeft /> Voltar
            </a>
            <h1>Novo filme</h1>
          </header>

          <div className="inputs">
            <Input placeholder="Titulo" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </div>
          <TextArea placeholder="Observações" />
          <div className="tags">
            <NoteItem value="Comédia" />
            <NoteItem isNew placeholder=" novo marcador" />
          </div>
          <Button title="Salvar" />
        </Form>
      </main>
    </Container>
  );
}
