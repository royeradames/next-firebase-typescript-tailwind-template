import { ISbStoryParams, StoryblokClient } from "@storyblok/js";
import { storyblokApi } from "./config";

// We know storyblokApi is initialized in config.ts
const api = storyblokApi as StoryblokClient;

export const getStory = async (slug: string, params: ISbStoryParams = {}) => {
  const { data } = await api.get(`cdn/stories/${slug}`, {
    version: "draft",
    ...params,
  });
  return data.story;
};

export const getStories = async (params: ISbStoryParams = {}) => {
  const { data } = await api.get("cdn/stories", {
    version: "draft",
    ...params,
  });
  return data.stories;
};
