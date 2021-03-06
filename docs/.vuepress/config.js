module.exports = {
    title: '资料整理',
    description: '明日复明日',
    prot: 33333,
    repo: 'https://www.baidu.com',
    markdown:{
        lineNumbers: true
    },
    themeConfig: {
        lastUpdated: '最后更新时间',
        sidebar: 'auto',
        editLinks: true,
        // 编辑链接label
        editLinkText: '编辑此页',
        nav: [
            {text: 'css', link: '/css/'},
            {text: 'js手写题', link: '/js/'},
            {text: '浏览器', link: '/browser/'},
            {text: '框架', items: [
                { text: 'vue', link: '/vue/'}, 
                { text: 'webpack', link: '/webpack/'},
                { text: 'flutter', link: '/flutter/'},
                { text: 'nuxt', link: '/nuxt/'}
              ]},
        ],
        // sidebar: [
        //     "/css/",
        // ]
    },
    
}