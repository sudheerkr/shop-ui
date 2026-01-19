// CSR
// While CSR yields a rich interactive experience after load, it has well-known drawbacks for first-page load performance and SEO.
// Today’s best practice is to avoid pure-CSR for content-rich or public-facing pages.
// Instead of CSR, use hybrid approaches (SSR/SSG plus hydration) for the initial render.

//SSR
// Server-rendering HTML can drastically improve FCP and make content indexable for search engines.
// React 18's improvements make SSR + hydration very performant.
// React 18 also introduced Progressive Hydration and Selective Hydration which mitigate the traditional TTI gap—React can hydrate parts of the UI as their scripts arrive or as the user interacts.