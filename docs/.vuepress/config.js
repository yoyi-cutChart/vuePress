module.exports = {
	title: '前端切图仔 - k',
	description: 'ok fine anyway',
	themeConfig: {
		nav: [
      { text: '首页', 
        link: '/' 
      },
      { text: '博客', 
        link: '/VuePress/',
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
				title: 'HTML',
				collapsable: true, // 是否折叠
				children: [ // 具体文章内容的路径
					'/HTML/'
				]
			},
			{
				title: 'CSS',
				collapsable: true, // 是否折叠
				children: [ // 具体文章内容的路径
					'/CSS/'
				]
			},
			{
				title: 'JS',
				collapsable: true, // 是否折叠
				children: [ // 具体文章内容的路径
					'/JS/'
				]
			}
		]
	},
	markdown: {
		// 显示代码块行号
		lineNumbers: true
	},
}