import { Express } from "express";

export const SEORoutes = (server: Express) => {
  server.get("/robots.txt", (_, res) => {
    res.setHeader("Content-Type", "text/plain;charset=UTF-8");
    res.status(200).send("robots.txt");
  });

  server.get("/sitemap.xml", (_, res) => {
    res.set("Content-Type", "text/xml");
    res.send(
      `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:mobile="http://www.google.com/schemas/sitemap-mobile/1.0" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
        <url><loc>https://moobie.com.br</loc></url>
      </urlset>`
    );
  });
};
