import { AuthorDescr } from "@/components/AuthorDescr/AuthorDescr";
import { AuthorImage } from "@/components/AuthorImage/AuthorImage";
import { Container } from "@/components/Container/Container";

export const AboutArtist = () => {
  return (
    <section>
      <Container className="flex flex-col items-center gap-8 md:flex-row-reverse md:justify-between">
        <AuthorImage />
        <AuthorDescr />
      </Container>
    </section>
  );
};
