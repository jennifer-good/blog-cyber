import Container from "@/app/_components/container";
import { Intro } from "../_components/intro";

export default function MissionPage() {
  return (
     <Container>
        <Intro />
        <main className="mx-auto py-10">
        <h1 className="text-3xl font-bold mb-4">Mission</h1>
        <p>
            {/* Your mission content here */}
            Our mission is to make cybersecurity accessible to everyone, empowering individuals with the knowledge and tools they need to protect themselves in the digital world.
        </p>
        </main>
    </Container>
  );
}