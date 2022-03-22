module.exports = {
  siteMetadata: {
    title: 'gatsby-gtag-partytown'
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-google-gtag',
      options: {
        trackingIds: ['G-C60YCNF3ND'],
        pluginConfig: {
          head: true
        }
      }
    }
  ]
};
