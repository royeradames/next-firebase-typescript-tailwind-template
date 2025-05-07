import { getStory } from "@/app/lib/storyblok/api";
import BlogPost from "@/components/blog/BlogPost";
import { StoryblokStory } from "@/app/lib/storyblok/types";
import React from "react";
export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const story = await getStory(`blog/${params.slug}`) as StoryblokStory;

  return (
    <main>
      <BlogPost blok={story.content} />
    </main>
  );
} 