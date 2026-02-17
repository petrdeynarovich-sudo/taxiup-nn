import { Helmet } from "react-helmet-async";


import { useEffect } from "react";

type SeoProps = {
  title: string;
  description: string;
  path: string;        // "/" или "/park"
  image?: string;      // "/og.jpg"
};

export function Seo({ title, description, path, image = "/og.jpg" }: SeoProps) {
  useEffect(() => {
    const origin =
      typeof window !== "undefined"
        ? window.location.origin
        : "https://taxiup.online";

    const url = origin + path;

    // <html lang="ru">
    document.documentElement.lang = "ru";

    // <title>
    document.title = title;

    const setMeta = (attr: "name" | "property", key: string, value: string) => {
      let el = document.head.querySelector(
        `meta[${attr}="${key}"]`
      ) as HTMLMetaElement | null;

      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }

      el.setAttribute("content", value);
    };

    const setLink = (rel: string, href: string) => {
      let el = document.head.querySelector(
        `link[rel="${rel}"]`
      ) as HTMLLinkElement | null;

      if (!el) {
        el = document.createElement("link");
        el.rel = rel;
        document.head.appendChild(el);
      }

      el.href = href;
    };

    setMeta("name", "description", description);
    setLink("canonical", url);

    // OpenGraph
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", "TaxiUp");
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:image", origin + image);

    // Twitter
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", origin + image);
  }, [title, description, path, image]);

  return null;
}
