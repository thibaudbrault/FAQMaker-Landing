import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

export default defineConfig({
  site: "https://faqmaker.co",
  integrations: [
    tailwind(),
    react(),
  ],
});
