import { SbBlokData, SbBlokKeyDataTypes } from "@storyblok/react";

export interface StoryblokComponent extends SbBlokData {
  _uid: string;
  component: string;
  [key: string]: SbBlokKeyDataTypes;
}

export interface Blok extends SbBlokData {
  _uid: string;
  component: string;
  title: string;
  content: StoryblokComponent[];
}

export interface StoryblokStory {
  content: Blok;
  name: string;
  slug: string;
  full_slug: string;
  created_at: string;
  published_at: string;
  first_published_at: string;
  uuid: string;
}
