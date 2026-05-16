<wizard-report>
# PostHog post-wizard report

The wizard has completed a deep integration of PostHog analytics into the Fancy Mumble landing page. PostHog is initialized in `src/main.tsx` using `posthog-js` and wrapped with `PostHogProvider` from `@posthog/react`. Event tracking has been added to all key user interaction points: download buttons (across the hero, downloads section, and navbar), GitHub link clicks, navigation link clicks, and screenshot lightbox opens. The `Button` component was updated to forward `onClick` to anchor elements so tracking works on link-style buttons. Environment variables are stored in `.env.local` and referenced via `import.meta.env`.

| Event | Description | File |
|---|---|---|
| `download_clicked` | User clicked a download button. Properties: `platform` (windows/linux/linuxDeb/android/unknown), `location` (hero/downloads/navbar), `label` (button text) | `src/components/Hero.tsx`, `src/components/Downloads.tsx`, `src/components/Navbar.tsx` |
| `github_link_clicked` | User clicked "View on GitHub" for the main Fancy Mumble repo. Properties: `location` (hero) | `src/components/Hero.tsx` |
| `server_github_clicked` | User clicked "View on GitHub" for the Fancy Mumble Server repo | `src/components/ServerInfo.tsx` |
| `nav_link_clicked` | User clicked a navigation link (Features, Screenshots, Download). Properties: `label`, `href` | `src/components/Navbar.tsx` |
| `screenshot_viewed` | User opened a screenshot in the lightbox. Properties: `src`, `alt` | `src/components/MediaPlaceholder.tsx` |

## Next steps

We've built some insights and a dashboard for you to keep an eye on user behavior, based on the events we just instrumented:

- [Analytics basics dashboard](/dashboard/685120)
- [Total downloads over time](/insights/MHQy3unw) - daily line chart of all download clicks
- [Downloads by platform](/insights/wrN2mXcn) - bar chart breaking down downloads by platform (windows/linux/android)
- [Download conversion funnel](/insights/kp6s2OX9) - funnel from page visit → download click with conversion rate
- [GitHub engagement](/insights/jrQAZ3AL) - trend of clicks on the main repo vs server repo GitHub links
- [Screenshot views](/insights/4Zw8BJyw) - how often visitors expand screenshots in the lightbox

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

</wizard-report>
