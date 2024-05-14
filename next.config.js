const isProd = process.env.NODE_ENV === 'production';

const GH_PAGES_PREFIX = ''; // '/gpc-next' without CNAME

module.exports = {
  env: {
    publicPrefix: isProd ? GH_PAGES_PREFIX : '',
    siteUrl: 'https://globalprivacycontrol.org'
  },
  crossOrigin: 'anonymous',
  basePath: isProd ? GH_PAGES_PREFIX : '',
  assetPrefix: isProd ? GH_PAGES_PREFIX : '',
  output: 'export'
};
