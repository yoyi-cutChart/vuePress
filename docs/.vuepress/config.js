module.exports = {
	title: '前端切图仔 - k',
	description: 'ok fine anyway',
	base: '/vuePress/',
	head: [
    ['link', { rel: 'icon', href: '/images/duckke.png' }]
  ],
	themeConfig: {
		nav: [
      { text: '首页', 
        link: '/' 
      },
      { text: '博客', 
        link: '/Vue/',
      },
      { text: 'GitHub', link: 'https://github.com/yoyi-cutChart/vuePress'}
    ],
		sidebar: [
      {
				title: 'VuePress',
				collapsable: true, // 是否折叠
				children: [ // 具体文章内容的路径
          '/VuePress/'
				]
      },
      {
				title: 'JavaScript',
				collapsable: true, // 是否折叠
				children: [ // 具体文章内容的路径
          '/JavaScript/'
				]
      },
      {
				title: 'Vue.js',
				collapsable: true, // 是否折叠
				children: [ // 具体文章内容的路径
          '/Vue/'
				]
			}
		]
	},
	markdown: {
		// 显示代码块行号
		lineNumbers: true
	},
}