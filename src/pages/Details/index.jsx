import { useState, useEffect } from 'react';
import { Container, Content, Writer } from './styles';
import { useParams, useNavigate } from 'react-router-dom';
import moment from 'moment-timezone';
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { api } from '../../services/api';
import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { Tag } from '../../components/Tag';
import { Rating } from '../../components/Rating';

import { FiArrowLeft, FiClock } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';

export function Details() {
  const [data, setData] = useState({});
  const params = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

  function handleBack() {
    navigate(-1);
  }

  async function handleRemove() {
    const confirm = window.confirm('Desa realmente remover a nota ?');

    if (confirm) {
      await api.delete(`/notes/${params.id}`);
      handleBack();
    }
  }

  const momentDate = moment.utc(data.updated_at).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm:ss');

  useEffect(() => {
    async function fetchMovie() {
      const response = await api.get(`/notes/${params.id}`);
      setData(response.data);
    }

    fetchMovie();
  }, []);
  return (
    <Container>
      <Header />
      {data && (
        <main>
          <Content>
            <div className="backButton">
              <FiArrowLeft />
              <ButtonText title="Voltar" onClick={handleBack} />
              <ButtonText title="Excluir filme" onClick={handleRemove} />
            </div>

            <div className="title">
              <h1>{data.title}</h1>
              <Rating note={data.rating} noteEmpty/>
            </div>
            <Writer>
              <img src={avatarUrl} alt={user.name} />

              <p>Por {user.name} </p>
              <FiClock />
              <p>{momentDate}</p>
            </Writer>

            {data.tags && (
              <div className="adjustTag">
                {data.tags.map(tag => (
                  <Tag key={String(tag.id)} title={tag.name} />
                ))}
              </div>
            )}

            <p>{data.description}</p>
          </Content>
        </main>
      )}
    </Container>
  );
}
