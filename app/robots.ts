export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://yourdomain.com/sitemap.xml", // change after deploy
  };
}