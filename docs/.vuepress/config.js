const head = require('./config/head.js');
const plugins = require('./config/plugins.js');
const themeConfig = require('./config/themeConfig.js');

module.exports = {
  lang: 'zh-CN',
  // theme: 'default', // 使用npm包主题
  // theme: 'vdoing', // 使用npm包主题
  theme: require.resolve('../../vdoing'), // 使用本地主题

  title: "修真门派掌门路",
  description: "本命/灵根/同参的世界",
  // themeConfig: {
  //   sidebar: { mode: 'structuring', collapsable: false} //  'structuring' | { mode: 'structuring', collapsable: Boolean} | 'auto' | 自定义
  // },
  // base: '/', // 格式：'/<仓库名>/'， 默认'/'
  markdown: {
    lineNumbers: true, // 代码行号
  },

  head,
  plugins,
  themeConfig,
  markdown: {
    extractHeaders: [ 'h2', 'h3', 'h4', 'h5', 'h6' ]
  }

}
