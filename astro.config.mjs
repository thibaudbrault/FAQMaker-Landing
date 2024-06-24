import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";
import icon from "astro-icon";

export default defineConfig({
  site: "https://faqmaker.co",
  integrations: [tailwind(), icon()],
  image: {
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  }
});
