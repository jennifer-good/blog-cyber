import Container from "@/app/_components/container";
import { Intro } from "../_components/intro";

export default function AboutPage() {
  return (
    <Container>
        <Intro />
        <main className="mx-auto py-10">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <p>
            {/* Your about me content here */}
            Hi, I'm [Your Name]. Welcome to my blog!
        </p>
        </main>
    </Container>
  );
}