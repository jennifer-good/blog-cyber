import Container from "@/app/_components/container";
import { Intro } from "../_components/intro";
import { PostTitle } from "../_components/post-title";

export default function AboutPage() {
  return (
    <Container>
        <Intro />
        <main className="max-w-4xl mx-auto px-8 py-10">
        <PostTitle>About Me</PostTitle>
        <p>
            {/* Your about me content here */}
            Hi, I'm [Your Name]. Welcome to my blog!
        </p>
        </main>
    </Container>
  );
}