"use client";

import Link from "next/link";
import { Post } from "@/interfaces/post";

type Props = {
  relatedPosts: Post[];
};

export function RelatedPosts({ relatedPosts }: Props) {
  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="mt-12 pt-8 pb-8 border-t border-gray-200">
      <h3 className="text-2xl font-bold mb-6">Your Next Read</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {relatedPosts.map((post) => (
          <article
            key={post.slug}
            className="hover:shadow-lg transition-shadow rounded-lg overflow-hidden border border-gray-200"
          >
            {post.coverImage && (
              <div className="relative w-full h-48 overflow-hidden bg-gray-100">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform"
                />
              </div>
            )}
            <div className="p-4">
              <h4 className="text-lg font-semibold mb-2 line-clamp-2 hover:text-blue-600">
                <Link href={`/posts/${post.slug}`}>{post.title}</Link>
              </h4>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {post.excerpt}
              </p>
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-3">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
              <p className="text-xs text-gray-500">{post.date}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
