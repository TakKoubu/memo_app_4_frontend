export default {
  server: {
    port: 3000
  },
  head: {
    title: 'frontend',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/auth',
  ],
  proxy: {
    '/api': {
      target: 'http://localhost:5000',
      pathRewrite: {
        '^/api' : '/api'
      }
    }
  },
  axios: {
    baseURL: "http://localhost:5000",
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  },
  auth: {
    redirect: {
      login: '/login', //middleware:authを設定したURLにアクセスがあった場合の、リダイレクト先。
      logout: '/login', //ログアウト後のリダイレクト先
      callback: false,
      home: '/memo' ///ログイン後のリダイレクト先。
     },
     strategies: {
      local: {
        endpoints: {
          login: { url: '/api/auth/sign_in', method: 'post', propertyName: 'token' },
          logout: { url: '/api/auth/sign_out', method: 'delete' },
          user: false,
        }
      }
    }
  }
}
