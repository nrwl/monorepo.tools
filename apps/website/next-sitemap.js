const path = require('path');

module.exports = {
  siteUrl: process.env.SITE_URL || 'https://monorepo.tools',
  generateRobotsTxt: true,
  sourceDir: path.resolve(__dirname, '../../dist/apps/website/.next'),
  outDir: path.resolve(__dirname, '../../dist/apps/website/public'),
};
