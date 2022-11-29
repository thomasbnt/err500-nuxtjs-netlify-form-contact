export default {
  /*
  ** Rendering mode
  ** Doc: https://nuxtjs.org/api/configuration-mode
  */
  server: {
    port: 3000,
    host: '0.0.0.0'
    // host: '127.0.0.1'
  },
  components: true,
  target: 'static',
  ssr: false,
  /*
  ** The easiest way to fix this is by adding a generate property in your nuxt.config and setting fallback: true.
  ** Then it will fallback to the generated 404.html when in SPA mode instead of Netlify's 404 page.
  */
  generate: {
/*    async routes () {
      const { $content } = require('@nuxt/content')
      const files = await $content({ deep: true }).only(['path']).fetch()

      return files.map(file => file.path === '/index' ? '/' : file.path)
    },*/
    fallback: true
  },

  /*
  ** Headers of the page
  ** Doc: https://vue-meta.nuxtjs.org/api/#metainfo-properties
  */
  head: {
    title: 'This is a example of the err 500 with Netlify form and Nuxt v2',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'monetization', content: '$ilp.uphold.com/ZrmQjNMeaZFJ' },
      { name: 'theme-color', content: '#7A3C3C' }
    ],
    link: [
    ]
  },
  router: {
    home: '/',
    contact: '/contact'
  },

  /*
  ** Global CSS
  ** Doc: https://nuxtjs.org/api/configuration-css
  */
  css: [
    '~/static/assets/css/main.css'
  ],

  /*
  ** Plugins to load before mounting the App
  ** Doc: https://nuxtjs.org/guide/plugins
  */
  plugins: [],
  //plugins: ['~/plugins/SaveLocationRouteri18n'],

  /*
  ** Nuxt.js modules
  ** Doc: https://nuxtjs.org/guide/modules
  */
  modules: [
    // Doc: https://http.nuxtjs.org
    '@nuxt/http',
    '@nuxt/content',
    '@nuxtjs/axios',
    '@aceforth/nuxt-optimized-images'
  ],


  /*
  ** HTTP module configuration
  */
  http: {
    // See https://http.nuxtjs.org/api/#options
  },
  optimizedImages: {
    optimizeImages: true
  },

  loading: {
    color: 'blue',
    height: '3px',
    continuous: true,
    duration: 1000
  },

  /*
  ** Build configuration
  ** Doc: https://nuxtjs.org/api/configuration-build
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
};
