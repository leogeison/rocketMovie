import { FiPlus } from 'react-icons/fi';
import { Container, MySection, NewMovie } from './styles';
import { Header } from '../../components/Header';
import { Note } from '../../components/Note';

export function Home() {
  return (
    <Container>
      <Header />

      <MySection>
        <h2>Meus filmes</h2>
        <NewMovie>
          <FiPlus />
          Adicionar filme
        </NewMovie>
      </MySection>
      <main>
        {
          <Note
            data={{
              title: 'Interestellar',
              tags: [
                {
                  id: '1',
                  name: 'Ficção cientifica'
                },
                {
                  id: '2',
                  name: 'Drama'
                },
                {
                  id: '3',
                  name: 'Familia'
                }
              ]
            }}
          />
        }
      </main>
    </Container>
  );
}
