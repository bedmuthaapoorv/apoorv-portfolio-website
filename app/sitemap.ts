import type { MetadataRoute } from "next";
import { SITE_URL, LAST_UPDATED } from "@/data/profile";

export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: SITE_URL, lastModified: LAST_UPDATED, changeFrequency: "weekly", priority: 1 }];
}
