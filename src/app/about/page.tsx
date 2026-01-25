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
            Hi, I'm Jennifer Good. Welcome to my blog! I am currently a cybersecurity engineer for a major retail company.
            I have a passion for technology, security, and sharing knowledge with others. 
            In my free time, I enjoy hiking, reading, and experimenting with new recipes in the kitchen.
        </p>
        </main>
    </Container>
  );
}