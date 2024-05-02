module.exports = {
  reactStrictMode: true,
  transpilePackages: ['ui'],
  productionBrowserSourceMaps: false, // Disable source maps in development
  optimizeFonts: false, // Disable font optimization
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/hallexcosta.png',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/HallanCosta/be-a-savior/raw/main/docs/images/**',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/HallexCosta/habits-tracker/blob/main/docs/images/web/**',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
        port: '',
        pathname: '/HallexCosta/league-of-legends-login-page/blob/main/docs/images/light/**',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
        port: '',
        pathname: '/HallexCosta/animes-united/main/assets/screens/anime-detail-watched-episodes.png'
      },
    ],
  },
  // experimental: {
  //   logging: {
  //     level: 'verbose'
  //   }
  // }
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};
