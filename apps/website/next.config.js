// eslint-disable-next-line @typescript-eslint/no-var-requires
const withNx = require('@nx/next/plugins/with-nx');

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
};

module.exports = withNx(nextConfig);
