import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';
import { FiPlus, FiSearch } from 'react-icons/fi';
import { Container, MySection, NewMovie } from './styles';
import { Header } from '../../components/Header';
import { Note } from '../../components/Note';
import { Input } from '../../components/Input';

export function Home() {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);

  const navigate = useNavigate();

  function handleDetails(id){
    navigate(`/details/${id}`);
  }

  useEffect(() => {
    async function fetchMovies() {
      const response = await api.get(`/notes?title=${search}`);
      setMovies(response.data);
    }
    fetchMovies();
  }, [search]);

  return (
    <Container>
      <Header>
        <Input
          placeholder="Pesquisar pelo título"
          type="text"
          icon={FiSearch}
          onChange={e => setSearch(e.target.value)}
        />
      </Header>

      <MySection>
        <h2>Meus filmes</h2>
        <NewMovie to="/new">
          <FiPlus />
          Adicionar filme
        </NewMovie>
      </MySection>
      <main>
        {movies.map(movie => (
          <Note
            key={String(movie.id)}
            data={movie}
            onClick={() => handleDetails(movie.id)}
          />
        ))}
      </main>
    </Container>
  );
}
