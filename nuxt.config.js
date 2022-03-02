export default {
  server:{
    port:3000,
    host:'0.0.0.0'
  },
  srcDir: 'src/',
  mode: 'universal',
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: '「金瑞祥贴金首页」专业贴箔_贴金箔价格_大理石刻字_石头刻字_石刻机[不满意不收费]',
    htmlAttrs: {
      lang: 'zh-CN'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '「经营范围～地道」:【贴金装潢】｜【佛像贴金】｜【石头刻字】｜【大理石刻字】｜【庙宇装潢】｜【酒店贴金】｜【金字招牌】｜【网站工程】 「十年老厂」 「联系电话」:13951638402"' },
      {hid:'keywords',name:'keywords',content:'贴金箔,南京佛像贴金,石头刻字,南京贴金工艺,大理石刻字'},
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: 'favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "element-ui/lib/theme-chalk/index.css",
    "~/assets/css/global.css",
    '~/assets/font/iconfont.css',
    'quill/dist/quill.snow.css',
    'quill/dist/quill.bubble.css',
    'quill/dist/quill.core.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/ElementUI", ssr: true },
    { src: '~/plugins/main', ssr: true },
    { src: "@plugins/vue-quill-editor", ssr: false },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/toast',
    '@nuxtjs/axios',
    '@nuxtjs/router'
  ],
  toast: {
    position: 'top-center',
    duration: 1000
  },
  axios: {
    proxy: true, //开启代理
    credentials: true, //跨域请求需使用凭证
  },
  proxy: [
    ['/api', {
      target: 'http://127.0.0.1:9000', // (后端请求地址)
      changeOrigin: true,
      pathRewrite: { '^/api': '' }
    }]
  ],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
