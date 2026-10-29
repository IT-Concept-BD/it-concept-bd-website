# IT Concept BD website

Nuxt 4 + Tailwind CSS 4 + `@nuxtjs/i18n` (English only). Package manager: **yarn**.

```bash
yarn install
yarn dev        # http://localhost:3000
yarn build      # production build
yarn preview
```

## Where things live

| What | Where |
| --- | --- |
| All copy (including `[placeholders]`) | `i18n/locales/en.json` |
| One component per page section | `app/components/*Section.vue`, `AppNav.vue`, `AppFooter.vue` |
| Design tokens (Tailwind `@theme`) | `app/assets/css/main.css` |
| Approved component styles and animations | `app/assets/css/site.css` |
| Counters, scrollspy, copy helper | `app/composables/` |
| Icon paths | `app/utils/icons.ts` |

Preflight is intentionally not loaded: the approved design carries its own resets.
Avoid class names that match Tailwind utilities (for example `ring`); utilities outrank the component layer.
