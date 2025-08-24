import Container from "@/app/_components/container";
import { Intro } from "../_components/intro";
import { PostTitle } from "../_components/post-title";

export default function MissionPage() {
  return (
     <Container>
        <Intro />
        <main className="max-w-4xl mx-auto px-8 py-10">
        <PostTitle>Mission</PostTitle>
        <p>
            {/* Your mission content here */}
            Our mission is to make cybersecurity accessible to everyone, empowering individuals with the knowledge and tools they need to protect themselves in the digital world.
        </p>
        </main>
    </Container>
  );
}