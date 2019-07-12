import express from "express";
import next from "next";
import nextI18NextMiddleware from "next-i18next/middleware";
import NextI18NextInstance from "../i18n";

const port = parseInt(process.env.PORT || "3000", 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(async () => {
  const server = express();

  console.log("nextI18next", NextI18NextInstance.i18n.language);

  server.use(nextI18NextMiddleware(NextI18NextInstance));

  server.get("*", (req, res) => handle(req, res));

  await server.listen(port);
  // tslint:disable-next-line:no-console
  console.log(
    `> Server listening at http://localhost:${port} as ${
      dev ? "development" : process.env.NODE_ENV
    }`
  );
});

// createServer((req, res) => {
//   const parsedUrl = parse(req.url!, true);
//   const { pathname, query } = parsedUrl;

//   if (pathname === "/a") {
//     app.render(req, res, "/a", query);
//   } else if (pathname === "/b") {
//     app.render(req, res, "/b", query);
//   } else {
//     handle(req, res, parsedUrl);
//   }
// }).listen(port);
