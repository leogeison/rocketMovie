import { Container } from './styles';
import { Tag } from '../Tag';
import { Rating } from "../Rating";

export function Note({ data, ...rest }) {
  return (
    <Container{...rest}>
      <h1> {data.title} </h1>
      <Rating note={data.rating}/>
      <p> Pragas nas colheitas fizeram a civilização humana regredir para uma
      sociedade agrária em futuro de data desconhecida. Cooper</p>
      {data.tags && (
        <footer>
          {data.tags.map(tag => (
            <Tag key={tag.id} title={tag.name} />
          ))}
        </footer>
      )}
    </Container>
  );
}

