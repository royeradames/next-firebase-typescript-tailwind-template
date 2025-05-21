import React from "react";
import { getStory } from "@/app/lib/storyblok/api";
import { StoryblokComponent } from "@storyblok/react";
import Content from "@/components/content/Content";

export default async function StoryblokPage() {
  const story = await getStory("storyblok");

  console.log("Story:", story);

  return (
    <Content title="Storyblok Content">
      <div className="p-4 border rounded-lg shadow-sm">
        <h2 className="text-xl font-semibold mb-2">{story.name}</h2>
        {story.content.body?.map((blok: any) => (
          <StoryblokComponent blok={blok} key={blok._uid} />
        ))}
      </div>
    </Content>
  );
}
