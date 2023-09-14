import { withMermaid } from "vitepress-plugin-mermaid";
import mathjax3 from 'markdown-it-mathjax3';

const customElements = [
  'mjx-container',
  'mjx-assistive-mml',
  'math',
  'maction',
  'maligngroup',
  'malignmark',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mi',
  'mlongdiv',
  'mmultiscripts',
  'mn',
  'mo',
  'mover',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'ms',
  'mscarries',
  'mscarry',
  'mscarries',
  'msgroup',
  'mstack',
  'mlongdiv',
  'msline',
  'mstack',
  'mspace',
  'msqrt',
  'msrow',
  'mstack',
  'mstack',
  'mstyle',
  'msub',
  'msup',
  'msubsup',
  'mtable',
  'mtd',
  'mtext',
  'mtr',
  'munder',
  'munderover',
  'semantics',
  'math',
  'mi',
  'mn',
  'mo',
  'ms',
  'mspace',
  'mtext',
  'menclose',
  'merror',
  'mfenced',
  'mfrac',
  'mpadded',
  'mphantom',
  'mroot',
  'mrow',
  'msqrt',
  'mstyle',
  'mmultiscripts',
  'mover',
  'mprescripts',
  'msub',
  'msubsup',
  'msup',
  'munder',
  'munderover',
  'none',
  'maligngroup',
  'malignmark',
  'mtable',
  'mtd',
  'mtr',
  'mlongdiv',
  'mscarries',
  'mscarry',
  'msgroup',
  'msline',
  'msrow',
  'mstack',
  'maction',
  'semantics',
  'annotation',
  'annotation-xml',
];


export default withMermaid({

  head: [
    [
      'link',
      { rel: 'icon', type: "image/x-icon", href: '/favicon.ico' }
    ],
    [
      'link',
      { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css' }
    ]
  ],
  title: '技术文档',
  description: '技术文档',
	lastUpdated: true,
	markdown: {
		theme: {
      light: 'github-light',
      dark: 'github-light',
    },
    config: (md) => {
      md.use(mathjax3);
    },
		lineNumbers: true,
	},
  siteTitle: 'Think',
  port: 6006,
	themeConfig: {
    nav: [
      { text: 'Linux', link: '/linux/' },
      { text: 'Markdown', link: '/tools/markdown' },
      { text: 'Golang', link: '/golang/' },
      { text: 'Rust', link: '/rust/' },
    ],
		sidebar: [
      {
        text: 'Linux基本的使用',
        collapsible: true,
        collapsed: true,
        items: [
          { text: 'Linux基本命令', link: '/linux/index' },
          { text: '制作ubuntu安装U盘', link: '/linux/install-ubuntu' },
          { text: 'ubuntu安装Jenkins', link: '/linux/jenkins' },
          { text: 'ubuntu安装Redis', link: '/linux/redis' },
          { text: 'ubuntu安装shadowsocks', link: '/linux/sh' },
          { text: 'ubuntu安装web服务器', link: '/linux/ubuntu-server' },
          { text: 'ubuntu服务器优化', link: '/linux/ubuntu' },
          { text: 'ubuntu安装React Native环境', link: '/linux/ubuntu-install-rn-env' },
          { text: 'mongoDB数据基本操作', link: '/linux/mongodb' },
          { text: 'ubuntu部署代理服务器', link: '/linux/ubuntu-command' },
          { text: 'nvm安装nodejs', link: '/linux/nodejs' },
          { text: 'CentOS系统基本配置', link: '/linux/centos' },
          { text: 'CentOS系统安装mysql', link: '/linux/centos-mysql' },
        ]
      },
      {
        text: 'TypeScript 文档',
        collapsible: true,
        collapsed: true,
        items: [
          { text: '简介', link: '/typescript/0_in' },
		      { text: '基本类型', link: '/typescript/1_type' },
          { text: '接口', link: '/typescript/2_interface' },
          { text: '类', link: '/typescript/3_class' },
          { text: '函数', link: '/typescript/4_function' },
          { text: '泛型', link: '/typescript/5_generic' },
          { text: '其他', link: '/typescript/6_other' },
        ]
      },
      {
        text: 'Vue3 文档',
				collapsible: true,
        collapsed: true,
        items: [
          { text: '介绍', link: '/vue3/' },
          { text: 'SFC 语法规范', link: '/vue3/sfc' },
          { text: 'SFC 工具', link: '/vue3/sfc-tools' },
          { text: '单文件组件 setup', link: '/vue3/setup' },
          { text: '单文件组件样式特性', link: '/vue3/sfc-style' },
          { text: '常用的库', link: '/vue3/packages' },
          { text: '教案案例', link: '/vue3/1.class' },
          { text: 'JaveScript语法', link: '/vue3/0.js' },
        ]
      },
      {
        text: 'Golang 文档',
				collapsible: true,
        collapsed: true,
        items: [
          { text: 'Golang基本语法', link: '/golang/' },
          { text: '服务器构建', link: '/golang/01.golang' },
          { text: 'mysql的存储', link: '/golang/02.mysql' },
          { text: '数据缓存', link: '/golang/03.redis' },
          { text: 'Session的使用', link: '/golang/04.session' },
          { text: '微服务的架构', link: '/golang/05.micro-server' },
          { text: '项目租房网', link: '/golang/06.home' },
          { text: '电商项目', link: '/golang/project' },
          { text: 'API项目', link: '/golang/api' },
          { text: '常用项目列表', link: '/golang/lists' },
          { text: '项目目录结构', link: '/golang/layout' },
        ]
      },
      {
        text: 'Rust 文档',
				collapsible: true,
        collapsed: true,
        items: [
          { text: 'Rust基本语法', link: '/rust/' },
          { text: 'Rust实现cat命令', link: '/rust/cat' },
        ]
      },
      {
        text: '工具的使用',
				collapsible: true,
        collapsed: true,
        items: [
          { text: '协同工作流程', link: '/tools/think' },
          { text: 'Markdow使用文档', link: '/tools/markdown' },
          { text: '电子书和文档', link: '/tools/booklists' },
          { text: 'git学习文档', link: '/tools/git' },
          { text: 'github协作开发', link: '/tools/github' },
          { text: 'SQL语法', link: '/tools/sql' },
          { text: 'matrix通信服务框架', link: '/tools/matrix-synapse' },
          { text: 'kernel驱动开发', link: '/tools/driver' },
          { text: '心理学-亚瑟·阿伦36问', link: '/tools/36ask' },
        ]
      },
      {
        text: 'Mermaid 文档',
				collapsible: true,
        collapsed: true,
        items: [
          { text: '介绍', link: '/mermaid/' },
          { text: '流程图样式', link: '/mermaid/flowchart' },
          { text: '常用样式案例', link: '/mermaid/examples' },
        ]
      },
      {
        text: '面试题',
				collapsible: true,
        collapsed: true,
        items: [
          { text: 'Web前端面试题', link: '/interview/h5' },
        ]
      },
      {
        text: '少儿教育',
				collapsible: true,
        collapsed: true,
        items: [
          { text: '介绍', link: '/kidsedu/index' },
          { text: '教学要求', link: '/kidsedu/1.class' },
          { text: '小学生空间认知与数学发展关系', link: '/kidsedu/lunwen1' },
          { text: 'C++课程简介', link: '/kidsedu/1.cpp' },
          { text: 'Python课程简介', link: '/kidsedu/2.python' },
          { text: 'Scratch课程简介', link: '/kidsedu/3.scratch' },
        ]
      },
    ],
		
		footer: {
			license: {
				text: 'MIT License',
				link: 'https://opensource.org/licenses/MIT'
			},
			copyright: `Copyright © 2022-${new Date().getFullYear()} Richard Wang`
		},
		lastUpdatedText: 'Updated Date',
		docFooter: {
      prev: 'Pagina prior',
      next: 'Proxima pagina'
    }
	},
  mermaid: {

  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => customElements.includes(tag),
      },
    },
  },
})
