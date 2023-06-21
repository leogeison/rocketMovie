import { Container }  from "./styles"

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";

export function Details() {
  return (
    <Container>
      <Header />
      <Section title="Marcadores">
        <Tag title="drama"/>
        <Tag title="comédia"/>
        <Tag title="Ação"/>
      </Section>
      <Button title="Salvar alterações"/>

      
    </Container>
  );
}
