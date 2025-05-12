"use client";
import React from "react";
import { storyblokInit, apiPlugin } from "@storyblok/react";

// Initialize Storyblok client
try {
  storyblokInit({
    accessToken: process.env.STORYBLOK_TOKEN,
    use: [apiPlugin],
    apiOptions: {
      region: "us",
    },
  });
} catch (error) {
  console.error("Error initializing Storyblok:", error);
}

export default function StoryblokProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
} 