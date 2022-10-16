import type { AstroComponentFactory } from "astro/dist/runtime/server";

export type Author = {
  slug: string;
  name: string;
  avatar: string;
  Content: AstroComponentFactory;
};
