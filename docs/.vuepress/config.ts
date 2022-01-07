import { defineUserConfig } from "@vuepress/cli";
import type { GungnirThemeOptions } from "vuepress-theme-gungnir";
import { zh, en } from "vuepress-theme-gungnir/lib/node/i18n";
import { navbar, sidebar } from "./configs";

const isProd = process.env.NODE_ENV === "production";

export default defineUserConfig<GungnirThemeOptions>({
  // 个人博客请改成 /
  // base: "/",
  base: '/demo-vuepress-blog/',

  head: [["link", { rel: "icon", href: "/img/logo.svg" }]],

  // site-level locales config
  locales: {
    "/": {
      lang: "zh-CN",
      // 网站标签页名字
      title: '博客',
      description: 'xxx的博客',
    },
  },


  theme: "vuepress-theme-gungnir",

  // title: "",

  themeConfig: {
    // 一言，自动获取一句名言
    hitokoto: "https://v1.hitokoto.cn?c=d&c=i", // enable hitokoto (一言) or not?
    // 或者使用本地，修改 docs/.vuepress/public/hitokoto/index.json 文件
    // hitokoto: "/hitokoto/index.json",

    // personal information
    personalInfo: {
      name: "Shaaaaa（我的博客名字）",
      avatar: "/img/avatar.jpeg",
      description: "我的博客描述",
      sns: {
        github: "Renovamen",
        // linkedin: "xiaohan-zou-55bba0160",
        // facebook: "renovamen.zou",
        // twitter: "renovamen_zxh",
        // zhihu: "chao-neng-gui-su",
        email: "renovamenzxh@gmail.com",
        // rss: "/rss.xml",
        // customized sns
        bilibili: {
          icon: "bilibili",
          iconScale: 1.15,
          link: "https://www.bilibili.com/"
        },
        wechat: {
          icon: "wechat",
          link: "https://www.bilibili.com",
        }
      }
    },

    // header images on home page
    homeHeaderImages: [
      {
        path: "/img/home-bg/1.jpg",
        mask: "rgba(40, 57, 101, .4)"
      },
      {
        path: "/img/home-bg/2.jpg",
        mask: "rgb(251, 170, 152, .2)"
      },
      {
        path: "/img/home-bg/3.jpg",
        mask: "rgba(68, 74, 83, .1)"
      },
      {
        path: "/img/home-bg/4.jpg",
        mask: "rgba(19, 75, 50, .2)"
      }
    ],

    // other pages
    pages: {
      tags: {
        subtitle: "Black Sheep Wall",
        bgImage: {
          path: "/img/pages/tags.jpg",
          mask: "rgba(211, 136, 37, .5)"
        }
      },
      links: {
        subtitle:
          "When you are looking at the stars, please put the brightest star shining night sky as my soul.",
        bgImage: {
          path: "/img/pages/links.jpg",
          mask: "rgba(64, 118, 190, 0.5)"
        }
      }
    },

    // theme-level locales config
    locales: {
      /**
       * English locale config
       *
       * As the default locale is English, we don't need to set all of the locale fields
       */
      "/": {
        // navbar
        navbar: navbar.zh,
        // sidebar
        sidebar: sidebar.zh,
        backToHome: '返回首页',
        homeText: '首页 - 左上角',
        searchPlaceholder: '搜索',
        // i18n
        ...zh
      },

      /**
       * English 暂时不支持
       */
      "/en/": {
        // navbar
        navbar: navbar.en,
        // sidebar
        sidebar: sidebar.en,
        ...en
      }
    },

    themePlugins: {
      // only enable git plugin in production mode
      git: false,
      katex: true,
      mermaid: true,
      chartjs: false,
      giscus: false,
      mdPlus: {
        all: true
      },
      ga: false,
      ba: false,
      rss: false
    },

    footer: `
      &copy; <a href="https://github.com/Renovamen" target="_blank">Renovamen</a> 2018-2022
      <br>
      Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
      <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
    `
  },

  markdown: {
    extractHeaders: {
      level: [2, 3, 4, 5]
    },
    code: {
      lineNumbers: false
    }
  }
});