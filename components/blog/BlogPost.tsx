"use client";

import React from "react";
import { storyblokEditable, StoryblokComponent, SbBlokData } from "@storyblok/react";
import { BlogPostBlok } from "@/app/lib/storyblok/types";

interface BlogPostProps {
  blok: BlogPostBlok & SbBlokData;
}

export default function BlogPost({ blok }: BlogPostProps) {
  return (
    <div {...storyblokEditable(blok)} className="max-w-4xl mx-auto py-8">
      <h1 className="text-3xl font-bold mb-6">{blok.title}</h1>
      <div className="prose">
        {blok.content?.map((nestedBlok) => (
          <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
        ))}
      </div>
    </div>
  );
} 