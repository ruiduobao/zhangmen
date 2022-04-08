// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '世界设定',
    link: '/世界设定/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        items: [
          { text: '地图', link: '/地图/' },
        ],
      },
      {
        items: [
          { text: '时间线', link: '/时间线/' },
        ],
      },
      {
        items: [
          { text: '设定相关', link: '/设定相关/' },
        ],
      },
      {
        items: [
          { text: '货币系统', link: '/货币系统/' },
        ],
      },
      {
        items: [
          { text: '物事品阶', link: '/物事品阶/' },
        ],
      },
    ],
  },
  {
    text: '人物故事',
    link: '/人物故事/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        items: [
          { text: '白山', link: '/白山/' },

        ],
      },
      {
        items: [
          { text: '齐云', link: '/齐云/' }
        ],
      }
    ],
  },
  {
    text: '周边整理',
    link: '/周边整理/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      {
        items: [
          { text: '优秀诗词', link: '/优秀诗词/' },
        ],
      },
      {
        items: [
          { text: '同人小说', link: '/同人小说/' },
        ],
      },
      {
        items: [
          { text: '卡片', link: '/卡片/' },
        ],
      },
      {
        items: [
          { text: '手绘', link: '/soft-RS/' },
        ],
      }
      // // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      // {
      //   text: '地信软件',
      //   items: [
      //     { text: 'ArcGIS专题', link: '#' },
      //     { text: 'QGIS专题', link: '#' },
      //     { text: 'GeoDa专题', link: '#' },
      //     { text: 'PIE 专题', link: '#' },
      //     { text: '其他', link: '#' }
      //   ],
      // },
      // {
      //   text: '遥感软件',
      //   items: [
      //     { text: '本地软件', link: '#' },
      //     { text: ' - ENVI', link: '#' },
      //     { text: ' - ERDAS', link: '#' },
      //     { text: ' - 其他', link: '#' },
      //     { text: '遥感云平台', link: '#' },
      //     { text: ' - GEE专题', link: '#' },
      //     { text: ' - PIE专题', link: '#' },
      //     { text: ' - world compute', link: '#' }
      //   ],
      // },
      // {
      //   text: '地图辅助',
      //   items: [
      //     { text: 'Google Earth', link: '#' },
      //     { text: '图新地球', link: '#' },
      //     { text: '奥维地图', link: '#' },
      //     { text: '水经注', link: '#' },
      //     { text: 'Bigmap', link: '#' }
      //   ],
      // },
    ],
  },
  // {
  //   text: '编程资源',
  //   link: '/coding/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
  //   items: [
  //     // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      // {
      //   items: [
      //     { text: '地信开发', link: '/coding-GIS/' },
      //   ],
      // },
      // {
      //   items: [
      //     { text: '遥感开发', link: '/coding-RS/' },
      //   ],
      // }
  //   ],
  // },
  
  // {
  //   text: '网址导航',
  //   link: '#',
  //   items: [
  //     // { text: '常用网址/论坛导航', link: '#' },
  //     // { text: '持续更新中...', link: '#'},
  //   ],
  // },
  // {
  //   text: '其他',
  //   link: '/daohang_GISRS/',
  //   items: [
  //     { text: '常用网站导航', link: '/daohang_web/' },
  //     // { text: '内容分类', link: '/categories/' },
  //     { text: '网站时间线', link: '/archives/' },
  //     { text: '关于网站', link: '/about/' },
  //     { text: '遥感论坛', link: 'https://www.rserforum.com/' },
  //     { text: '我要投稿', link: 'http://pics.landcover100.com/pics//image/20211128020929.png'},
  //   ],
  // },


]
