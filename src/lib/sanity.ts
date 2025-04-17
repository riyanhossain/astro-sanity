import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

/**
 * Create and configure the Sanity client instance
 */
export const client = createClient({
  projectId: import.meta.env.SANITY_PROJECT_ID || "6vcelkys",
  dataset: import.meta.env.SANITY_DATASET || "production",
  useCdn: true, // `false` if you want to ensure fresh data
  apiVersion: "2023-03-20", // use a UTC date string
});

// Image URL builder configuration
const builder = imageUrlBuilder(client);

/**
 * Helper function to generate optimized image URLs from Sanity image records
 * @param source The Sanity image object
 * @returns An image URL builder for the provided source
 */
export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
