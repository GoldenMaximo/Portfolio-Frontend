// Next.js has some weird rules about folder structuring
// So I had to put all the page content onto src/pages
// https://github.com/vercel/next.js/issues/8617
export { default } from '../../src/pages/projects/[slug]';
export { getStaticPaths, getStaticProps } from '../../src/pages/projects/[slug]';