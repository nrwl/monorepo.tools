// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nx/next/plugins/with-nx');
const fs = require('fs');
const path = require('path');

const SITE_URL = process.env.SITE_URL || 'https://monorepo.tools';
const REDIRECT_PATHS = new Set(['conf']);

function generateSitemapAndRobots() {
  const pagesDir = path.join(__dirname, 'pages');
  const publicDir = path.join(__dirname, 'public');

  const routes = fs
    .readdirSync(pagesDir)
    .filter((f) => /\.tsx?$/.test(f))
    .map((f) => f.replace(/\.tsx?$/, ''))
    .filter((name) => !name.startsWith('_') && !REDIRECT_PATHS.has(name));

  const urls = routes
    .map((name) => {
      const loc = name === 'index' ? `${SITE_URL}/` : `${SITE_URL}/${name}`;
      const priority = name === 'index' ? '1.0' : '0.8';
      return `  <url><loc>${loc}</loc><changefreq>weekly</changefreq><priority>${priority}</priority></url>`;
    })
    .join('\n');

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  const robots = `User-agent: *
Allow: /
Disallow: /api/

Sitemap: ${SITE_URL}/sitemap.xml
`;

  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), sitemap);
  fs.writeFileSync(path.join(publicDir, 'robots.txt'), robots);
}

if (process.env.NEXT_PHASE === 'phase-production-build') {
  generateSitemapAndRobots();
}

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },
  redirects: async () => {
    return [
      {
        source: '/conf',
        destination:
          'https://monorepo.world?utm_source=monorepo.tools&utm_medium=website&utm_campaign=monorepoworld',
        permanent: true,
      },
    ];
  },
  headers: async () => {
    return [
      {
        source: '/',
        headers: [
          {
            key: 'Link',
            value: '</sitemap.xml>; rel="sitemap"',
          },
        ],
      },
    ];
  },
};

module.exports = withNx(nextConfig);
