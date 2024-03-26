import { AuthorDescr } from "@/components/AuthorDescr/AuthorDescr";
import { AuthorImage } from "@/components/AuthorImage/AuthorImage";
import { Container } from "@/components/Container/Container";

export const AboutArtist = () => {
  return (
    <section>
      <Container className="flex justify-between shrink-0">
        <AuthorDescr />
        <AuthorImage />
      </Container>
    </section>
  );
};
