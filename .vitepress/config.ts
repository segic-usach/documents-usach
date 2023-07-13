import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "USACH Documentation",
  description: "The home of the USACH lineups.",
  base: "/documents-usach/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Inicio', link: '/' },
      { text: 'Politicas' , link: '/external-software-development-collaboration' }
    ],

    sidebar: [
      {
        text: 'Políticas',
        items: [
          { text: 'Colaboración en Desarrollo de Software Externo', link: '/external-software-development-collaboration' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
