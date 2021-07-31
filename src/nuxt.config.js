export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  generate: {
    dir: 'dist',
    subFolders: false
  },

  server: {
    host: '0.0.0.0' // default: localhost
  },

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    htmlAttrs: {
      lang: 'en',
      xmlns: 'http://www.w3.org/1999/xhtml',
      'xmlns:fb': 'http://ogp.me/ns/fb#'
    },
    headAttrs: {
      prefix: 'og: http://ogp.me/ns# profile: http://ogp.me/ns/profile#'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no' },
      { name: 'author', content: 'Nomadify' },
      { name: 'robots', content: 'index, follow' },
      { name: 'og:site_name', content: 'Nomadify' },
      { name: 'og:locale', content: 'en_US' },
      { name: 'og:url', content: 'https://nomadify.ca' },
      { name: 'og:type', content: 'profile' },
      { name: 'profile:first_name', content: 'Nomadify' },
      { name: 'profile:username', content: '&#064;nomadify' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '&#064;n0madify' },
      { name: 'theme-color', content: '#1a202c' },
      { name: 'msapplication-navbutton-color', content: '#1a202c' },
      { name: 'apple-mobile-web-app-capable', content: 'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ],
    link: [
      { rel: 'canonical', href: 'https://nomadify.ca' },
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'shortcut icon', type: 'image/png', href: '/compass.png', sizes: '64x64', alt: 'Compass' },
      { rel: 'apple-touch-icon', type: 'image/png', href: '/compass.png', sizes: '76x76', alt: 'Compass' },
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Josefin+Slab&family=Raleway&display=swap' }
    ]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/fontawesome',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://google-analytics.nuxtjs.org/setup
    '@nuxtjs/google-analytics'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/content
    '@nuxt/content'
  ],

  // Content module configuration (https://go.nuxtjs.dev/config-content)
  content: {},

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {

    extend (config, ctx) {
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true
          }
        })

        config.module.rules.push({
          test: /\.(pdf|txt|xml|ico|md)$/,
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]'
          }
        })
      }
    }
  },

  googleAnalytics: {
    id: 'G-DDSVX245JP'
  },

  fontawesome: {
    icons: {
      brands: [
        'faTwitter',
        'faInstagram',
        'faTiktok',
        'faYoutube'
      ],
      solid: [
        'faAddressCard',
        'faArrowAltCircleDown',
        'faBars',
        'faBook',
        'faBriefcase',
        'faCode',
        'faHandshake',
        'faRedo',
        'faRocket',
        'faUserTie',
        'faMapMarkerAlt'
      ]
    }
  },

  // Defaults options
  tailwindcss: {
    cssPath: 'node_modules/tailwindcss/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    config: {
      theme: {
        fontFamily: {
         'sans': ['Raleway', 'Roboto', 'Arial', 'sans-serif'],
         'serif': ['"Josefin Slab"', '"Times New Roman"', 'Times', 'serif'],
         'body': ['Raleway', 'Roboto', 'Arial', 'sans-serif'],
        }
      }
    }
  }

}
