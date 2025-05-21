"use client";
import { StoryblokComponent } from "@storyblok/react";

export default function StoryblokBody({ body }: { body: any[] }) {
  return (
    <>
      {body?.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </>
  );
} 