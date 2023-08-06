import { Container, Header, SocialLink } from "ui";
// import "../styles.css";

export default function Page() {
  return (
    <>
      <Header.Root>
        <Container className="justify-between">
          <Header.Content className="text-white font-medium text-2xl">
            I.M portifolio
          </Header.Content>

          <Header.Content className="text-white font-sm text-md flex gap-20">
            <a href="#projects">Projects</a>
            <a href="#technologies">Technologies</a>
            <a href="#about-me">About me</a>
          </Header.Content>

          <Header.Content className="text-white font-sm text-md flex gap-6">
            <SocialLink name="github" url="https://github.com/hallexcosta" />
            <SocialLink name="linkedin" url="https://github.com/hallexcosta" />
            <SocialLink name="instagram" url="https://github.com/hallexcosta" />
            <SocialLink name="facebook" url="https://github.com/hallexcosta" />
          </Header.Content>
        </Container>
      </Header.Root>
    </>
  );
}
