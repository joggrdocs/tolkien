import { defineConfig } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'tempo',
  description:
    'A set of libraries used to programmatically build markdown documents.',
  srcDir: 'content',
  themeConfig: {
    siteTitle: false,
    logo: {
      dark: '/images/tempo-logo-dark.svg',
      light: '/images/tempo-logo-light.svg',
    },
    logoLink: '/',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
});
