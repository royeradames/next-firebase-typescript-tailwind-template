import { storyblokInit, apiPlugin } from "@storyblok/js";

const { storyblokApi } = storyblokInit({
  accessToken: process.env.STORYBLOK_API_TOKEN,
  use: [apiPlugin],
  apiOptions: {
    region: "us", // or "eu" depending on your region
  },
});

if (!storyblokApi) {
  throw new Error("Failed to initialize Storyblok API");
}

export { storyblokApi };
