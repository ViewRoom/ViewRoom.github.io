import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

// ICP
const ICP =
  '<a href="https://beian.miit.gov.cn/#/Integrated/index"><img id="icp" src="https://blog.dreamruins.com/img/icp.png" alt="icp">湘ICP备2023010530号</a>';
// 当前日期
const date = new Date(),
  year = date.getFullYear();

export default hopeTheme({
  // 当前网站部署到的域名
  hostname: "https://blog.dreamruins.com",

  author: {
    // 作者名称
    name: "望间",
    // 个人网站
    url: "https://dreamruins.com",
    // 作者邮箱
    email: "thedreamruins@163.com",
  },

  // 站点图标
  favicon: "",
  // LOGO
  logo: "/logo.svg",
  logoDark: "/logo-white.svg",
  // 仓库链接
  // repo: "vuepress-theme-hope/vuepress-theme-hope",
  // 文档位置
  docsDir: "src",
  // 导航栏
  navbar,
  // 侧边栏
  sidebar,
  // 页脚
  footer: ICP,
  // 展示页脚
  displayFooter: true,
  // 版权
  copyright: `Copyright © 2021-${year} 望间`,
  // 全屏
  fullscreen: true,

  /**
   * 字体图标库
   * "iconfont", "iconify", "fontawesome", "fontawesome-with-brands"
   */
  iconAssets: "fontawesome",
  /**
   * 主题模式
   * "switch": 在深色模式，浅色模式和自动之间切换 (默认)
   * "toggle": 在深色模式和浅色模式之间切换
   * "auto": 自动根据用户设备主题或当前时间决定是否应用深色模式
   * "enable": 强制深色模式
   * "disable": 禁用深色模式
   */
  darkmode: "switch",

  blog: {
    // 头像
    avatar: "https://image.dreamruins.com/images/van_Gogh-moon.jpg",
    // 个人描述
    description: "一个前端开发者",
    // 个人简介
    intro: "/intro.html",
    // 头像剪裁为圆形
    roundAvatar: true,
    // 社交
    medias: {
      // Baidu: "https://example.com",
      BiliBili: "https://space.bilibili.com/318565776",
      // Bitbucket: "https://example.com",
      // Dingding: "https://example.com",
      // Discord: "https://example.com",
      // Dribbble: "https://example.com",
      Email: "mailto:thedreamruins@163.com",
      // Evernote: "https://example.com",
      // Facebook: "https://example.com",
      // Flipboard: "https://example.com",
      Gitee: "https://gitee.com/dreamruins",
      GitHub: "https://github.com/ViewRoom",
      // Gitlab: "https://example.com",
      // Gmail: "mailto:info@example.com",
      // Instagram: "https://example.com",
      // Lark: "https://example.com",
      // Lines: "https://example.com",
      // Linkedin: "https://example.com",
      // Pinterest: "https://example.com",
      // Pocket: "https://example.com",
      QQ: "tencent://AddContact/?fromId=45&amp;fromSubId=1&amp;subcmd=all&amp;uin=2548116435",
      // Qzone: "https://example.com",
      // Reddit: "https://example.com",
      // Rss: "https://example.com",
      Steam: "https://example.com",
      // Twitter: "https://example.com",
      // Wechat: "https://example.com",
      // Weibo: "https://example.com",
      // Whatsapp: "https://example.com",
      // Youtube: "https://example.com",
      Zhihu: "https://example.com",
    },
  },

  // 加密
  encrypt: {
    config: {
      
    },
  },

  plugins: {
    // 博客模式
    blog: true,

    // 评论
    comment: {
      provider: "Waline",
      serverURL: "https://waline.dreamruins.com/",
    },

    // 代码复制
    copyCode: {
      // 移动端
      showInMobile: true,
    },

    // 组件
    components: {
      components: [
        "ArtPlayer",
        "AudioPlayer",
        "Badge",
        "BiliBili",
        "PDF",
        "SiteInfo",
      ],
    },

    // markdown 拓展
    mdEnhance: {
      // 自定义对其方式
      align: true,
      // 自定义属性
      attrs: true,
      // 卡片
      card: true,
      // 图表
      chart: true,
      echarts: true,
      mermaid: true,
      // 代码标签页
      codetabs: true,
      // 自定义提示容器
      container: true,
      // 代码演示
      demo: true,
      // 图片描述
      figure: true,
      // 流程图
      flowchart: true,
      // 脚注
      footnote: true,
      // GFM 语法
      gfm: true,
      // 图片懒加载
      imgLazyload: true,
      // 图片自定义大小
      imgSize: true,
      // 图片标记
      imgMark: true,
      // 任务列表
      tasklist: true,
      // 导入文件
      include: true,
      // 数学公式
      mathjax: true,
      katex: true,
      // 高亮标记
      mark: true,
      // 交互演示
      playground: {
        presets: ["ts", "vue"],
      },
      // 幻灯片
      presentation: ["highlight", "math", "search", "notes", "zoom"],
      // 自定义样式
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      // 下角标
      sub: true,
      // 上脚标
      sup: true,
      // 标签页
      tabs: true,
      // vue {{}} 语法
      vPre: true,
      // vue 交互演示
      vuePlayground: true,
    },

    // uncomment these if you want a PWA
    // pwa: {
    //   favicon: "/favicon.ico",
    //   cacheHTML: true,
    //   cachePic: true,
    //   appendBase: true,
    //   apple: {
    //     icon: "/assets/icon/apple-icon-152.png",
    //     statusBarColor: "black",
    //   },
    //   msTile: {
    //     image: "/assets/icon/ms-icon-144.png",
    //     color: "#ffffff",
    //   },
    //   manifest: {
    //     icons: [
    //       {
    //         src: "/assets/icon/chrome-mask-512.png",
    //         sizes: "512x512",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-mask-192.png",
    //         sizes: "192x192",
    //         purpose: "maskable",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-512.png",
    //         sizes: "512x512",
    //         type: "image/png",
    //       },
    //       {
    //         src: "/assets/icon/chrome-192.png",
    //         sizes: "192x192",
    //         type: "image/png",
    //       },
    //     ],
    //     shortcuts: [
    //       {
    //         name: "Demo",
    //         short_name: "Demo",
    //         url: "/demo/",
    //         icons: [
    //           {
    //             src: "/assets/icon/guide-maskable.png",
    //             sizes: "192x192",
    //             purpose: "maskable",
    //             type: "image/png",
    //           },
    //         ],
    //       },
    //     ],
    //   },
    // },
  },
});
