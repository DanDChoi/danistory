import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin", "/auth/", "/guestbook"],
    },
    sitemap: "https://danistory.vercel.app/sitemap.xml",
  };
}
