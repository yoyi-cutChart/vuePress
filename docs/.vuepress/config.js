module.exports = {
	title: '前端切图仔 - k',
	description: 'ok fine anyway',
	base: '/vuePress/',
	themeConfig: {
		nav: [
      { text: '首页', 
        link: '/' 
      },
      { text: '博客', 
        link: '/Preface/',
      },
      { text: 'GitHub', link: 'https://github.com/yoyi-cutChart/vuePress'}
    ],
		sidebar: [
			{
				title: '写在头顶上',
				collapsable: true, // 是否折叠
				children: [ // 具体文章内容的路径
					'/Preface/'
				]
			}
		]
	},
	markdown: {
		// 显示代码块行号
		lineNumbers: true
	},
}