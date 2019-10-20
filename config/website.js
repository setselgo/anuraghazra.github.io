const meta = {
  // Metadata
  // Finds usage in gatsby-config, and SEO component
  siteTitle: 'Anurag Hazra - Creative Web Designer',
  siteDescription: 'Anurag Hazra - Creative frontEnd web developer who loves javascript and modern web technologies.',
  siteTitleAlt: 'Anurag Hazra',
  siteShortName: 'Anurag Hazra',
  siteUrl: 'https://anuraghazra-gatsby-portfolio-git-adding-seo.anuraghazra1.now.sh', // No trailing slash!
}

const social = {
  siteLogo: `src/static/logo.svg`,
  siteBanner: `${meta.siteUrl}/images/social-banner.png`,
  twitter: '@anuraghazru',
}

const website = {
  ...meta,
  ...social,
  // googleAnalyticsID: 'UA-47519312-1',
  // Manifest
  themeColor: '#6D83F2',
  backgroundColor: '#6D83F2',
}

module.exports = website