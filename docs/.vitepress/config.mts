import { defineConfig } from 'vitepress'
import { resolve } from 'node:url'

const base = '/51mcu-notes/'

export default defineConfig({
  title: '51 MCU Notes',
  description: '51 MCU notes written by keiyou',
  lang: 'zh-CN',
  base: base,
  head: [['link', { rel: 'icon', href: resolve(base, 'avatar.png') }]],
  appearance: 'dark',
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: '/avatar.png',
    search: {
      provider: 'local',
    },
    socialLinks: [{ icon: 'github', link: 'https://github.com/keiyounya/51mcu-notes' }],
    footer: {
      message:
        'Released under the <a href="https://github.com/keiyounya/51mcu-notes/blob/main/LICENSE">MIT License</a>',
      copyright: 'Copyright © 2025-present <a href="https://github.com/keiyounya">Keiyou</a>',
    },
    sidebar: [
      {
        text: '关于',
        collapsed: true,
        items: [
          { text: '关于此笔记', link: '/1-about/1-about-this.md' },
          { text: '关于 51 单片机', link: '/1-about/2-about-51mcu.md' },
        ],
      },
    ],
  },
})
