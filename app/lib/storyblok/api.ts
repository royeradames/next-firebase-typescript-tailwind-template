import { ISbStoryParams } from "@storyblok/react";

// Create a function to get the Storyblok API token
const getStoryblokToken = () => {
  const token = process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN;
  if (!token) {
    console.warn(
      "NEXT_PUBLIC_STORYBLOK_API_TOKEN is not set in environment variables. Storyblok features will not work."
    );
    return null;
  }
  return token;
};

// Create a function to fetch stories
export const getStories = async (params: ISbStoryParams = {}) => {
  const token = getStoryblokToken();
  if (!token) {
    throw new Error(
      "NEXT_PUBLIC_STORYBLOK_API_TOKEN is not set in environment variables"
    );
  }

  const queryParams = new URLSearchParams({
    token,
    version: "draft",
    ...Object.fromEntries(
      Object.entries(params).map(([key, value]) => [
        key,
        Array.isArray(value) ? value.join(",") : String(value),
      ])
    ),
  }).toString();

  const response = await fetch(
    `https://api.storyblok.com/v2/cdn/stories?${queryParams}`,
    {
      next: { revalidate: 60 }, // Cache for 60 seconds
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch stories: ${response.statusText}`);
  }

  const data = await response.json();
  return data.stories;
};

// Create a function to fetch a single story
export const getStory = async (slug: string, params: ISbStoryParams = {}) => {
  const token = getStoryblokToken();
  if (!token) {
    throw new Error(
      "NEXT_PUBLIC_STORYBLOK_API_TOKEN is not set in environment variables"
    );
  }

  const queryParams = new URLSearchParams({
    token,
    version: "draft",
    ...Object.fromEntries(
      Object.entries(params).map(([key, value]) => [
        key,
        Array.isArray(value) ? value.join(",") : String(value),
      ])
    ),
  }).toString();

  const response = await fetch(
    `https://api.storyblok.com/v2/cdn/stories/${slug}?${queryParams}`,
    {
      next: { revalidate: 60 }, // Cache for 60 seconds
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch story: ${response.statusText}`);
  }

  const data = await response.json();
  return data.story;
};
