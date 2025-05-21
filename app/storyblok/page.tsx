import React from "react";
import { getStory } from "@/app/lib/storyblok/api";
import Content from "@/components/content/Content";
import StoryblokBody from "@/components/storyblok/StoryblokBody";
import Shell from "@/components/shell";

export default async function StoryblokPage() {
  const story = await getStory("storyblok");

  return (
    <Shell>
      <Content title="Storyblok Content">
        <StoryblokBody body={story.content.body} />
      </Content>
    </Shell>
  );
}
