import React from "react";
import { getStories } from "@/app/lib/storyblok/api";
import { StoryblokComponent } from "@storyblok/react";
import Content from "@/components/content/Content";
import { StoryblokStory } from "@/app/lib/storyblok/types";

export default async function StoryblokPage() {
  const stories = await getStories();

  console.log("Stories:", stories);

  return (
    <Content title="Storyblok Content">
      <div className="grid gap-6">
        {stories.map((story: StoryblokStory) => (
          <div key={story.uuid} className="p-4 border rounded-lg shadow-sm">
            <h2 className="text-xl font-semibold mb-2">{story.name}</h2>
            <StoryblokComponent blok={story.content} />
          </div>
        ))}
      </div>
    </Content>
  );
}
