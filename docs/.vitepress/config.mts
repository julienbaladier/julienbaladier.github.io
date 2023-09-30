import { defineConfig } from 'vitepress'
import markdownItTextualUml from 'markdown-it-textual-uml';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Notes",
  description: "Some Awesome Notes",
  markdown: {
    config(md) {
      md.use(markdownItTextualUml);
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
