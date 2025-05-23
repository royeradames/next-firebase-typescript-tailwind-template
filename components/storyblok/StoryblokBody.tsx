"use client";
import React from "react";
import { StoryblokComponent, SbBlokData } from "@storyblok/react";

export default function StoryblokBody({ body }: { body: SbBlokData[] }) {
  return (
    <>
      {body?.map((blok) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))}
    </>
  );
} 