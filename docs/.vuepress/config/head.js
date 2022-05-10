// head
module.exports = [
  // 注入到页面<head> 中的标签，格式[tagName, { attrName: attrValue }, innerHTML?]
  ['link', { rel: 'icon', href: '/img/favicon.ico' }], //favicons，资源放在public文件夹
  [
    'meta',
    {
      name: 'keywords',
      content: '修真门派掌门路，齐休，楚秦门',
    },
  ],
  // [
  //   'meta',
  //   {
  //     name: 'sogou_site_verification',
  //     content: 'y15XLjhNaO',
  //   },
  // ],
  // 添加百度推送


  // 添加百度统计
  // ['meta', { name: 'baidu-site-verification', content: 'xxx' }], // 百度统计的站长验证
  ['meta', { name: 'theme-color', content: '#11a8cd' }], // 移动浏览器主题颜色
  
      // 添加百度统计
[
        "script",
        {},
        `
        var _hmt = _hmt || [];
        (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?20e66b46736337366a23602cd376cc3b";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
          `
],
//头条js提交收录
[
  "script",
  {},
  `
  var el = document.createElement("script");
  el.src = "https://lf1-cdn-tos.bytegoofy.com/goofy/ttzz/push.js?63e938b7b2f130d6f9b60dbb31836b5912c7f83f73c02e831bae25f69978bf5431a338bfe8517054addc861a521fc04670aa30cdf5a37e663d5331479b5a12d275476d6d0d2e368be4dbc26e37139219";
  el.id = "ttzz";
  var s = document.getElementsByTagName("script")[0];
  s.parentNode.insertBefore(el, s);
  })(window)
    `
],
//360js提交收录
[
  "script",
  {},
  `
  var src = "https://s.ssl.qhres2.com/ssl/ab77b6ea7f3fbf79.js";
  document.write('<script src="' + src + '" id="sozz"><\/script>');
  })();
    `
],
['script', { src: 'https://cdn.jsdelivr.net/npm/twikoo@1.4.18/dist/twikoo.all.min.js' }],






  //[
  //  'script',
  //  {
  //    'data-ad-client': 'ca-pub-7828333725993554',
  //    async: 'async',
  //    src: 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js',
  //  },
  //], // 网站关联Google AdSense 与 html格式广告支持
]
