import Container from "@/app/_components/container";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import { Intro } from "../_components/intro";
import { PostTitle } from "../_components/post-title";

export default function PostsPage() {
  const allPosts = getAllPosts();

  return (
    <Container>
        <Intro />
        <main className="max-w-4xl mx-auto px-12 py-12">
            {allPosts.length > 0 && <MoreStories posts={allPosts} />}
        </main>
    </Container>
  );
}
