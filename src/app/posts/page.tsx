import Container from "@/app/_components/container";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";

export default function PostsPage() {
  const allPosts = getAllPosts();

  return (
    <main>
      <Container>
        <h1 className="mb-8 text-3xl font-bold md:text-5xl">All Posts</h1>
        {allPosts.length > 0 && <MoreStories posts={allPosts} />}
      </Container>
    </main>
  );
}
