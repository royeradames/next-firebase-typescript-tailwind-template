import { SbBlokData, SbBlokKeyDataTypes } from "@storyblok/react";

export interface StoryblokComponent extends SbBlokData {
  _uid: string;
  component: string;
  [key: string]: SbBlokKeyDataTypes;
}

export interface BlogPostBlok extends SbBlokData {
  _uid: string;
  component: "blog_post";
  title: string;
  content: StoryblokComponent[];
}

export interface StoryblokStory {
  content: BlogPostBlok;
  name: string;
  slug: string;
  full_slug: string;
  created_at: string;
  published_at: string;
  first_published_at: string;
  uuid: string;
}
