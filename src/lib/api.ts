import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, slug: realSlug, content } as Post;
}

export function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export function getRelatedPosts(currentPost: Post, limit: number = 3): Post[] {
  if (!currentPost.tags || currentPost.tags.length === 0) {
    // If no tags, return recent posts excluding current one
    return getAllPosts()
      .filter((post) => post.slug !== currentPost.slug)
      .slice(0, limit);
  }

  const allPosts = getAllPosts().filter((post) => post.slug !== currentPost.slug);

  // Calculate relevance score based on shared tags
  const postsWithScore = allPosts.map((post) => {
    const sharedTags = post.tags?.filter((tag) =>
      currentPost.tags?.includes(tag)
    ).length ?? 0;
    return { post, score: sharedTags };
  });

  // Sort by score (descending), then by date (recent first)
  return postsWithScore
    .sort((a, b) => {
      if (b.score !== a.score) {
        return b.score - a.score;
      }
      return a.post.date > b.post.date ? -1 : 1;
    })
    .map((item) => item.post)
    .slice(0, limit);
}
