import { ISbStoryParams } from "@storyblok/react";

// Debug logging
console.log("API Token:", process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN);

// Create a function to get the Storyblok API token
const getStoryblokToken = () => {
  const token = process.env.NEXT_PUBLIC_STORYBLOK_API_TOKEN;
  console.log("Token:", token);
  if (!token) {
    throw new Error("NEXT_PUBLIC_STORYBLOK_API_TOKEN is not set in environment variables");
  }
  return token;
};

// Create a function to fetch stories
export const getStories = async (params: ISbStoryParams = {}) => {
  try {
    const token = getStoryblokToken();
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
  } catch (error) {
    console.error("Error fetching stories:", error);
    throw error;
  }
};

// Create a function to fetch a single story
export const getStory = async (slug: string, params: ISbStoryParams = {}) => {
  try {
    const token = getStoryblokToken();
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
  } catch (error) {
    console.error("Error fetching story:", error);
    throw error;
  }
};
