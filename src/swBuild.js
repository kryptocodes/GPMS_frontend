const workboxBuild = require('workbox-build');

const buildSW = () => {
  workboxBuild
    .injectManifest({
      swSrc: 'src/swTemplate.js',
      swDest: 'build/service-worker.js',
      globDirectory: 'build',
      globPatterns: ['**/*.{html,css,js,png,jpg,jpeg,svg}'],
    })
    .then(({count, size, warnings}) => {
      // Optionally, log any warnings and details.
      warnings.forEach(console.warn);
      console.log(
        `${count} files will be precached, totaling ${size / 1000} KBs.`
      );
    })
    .catch(console.error);
};

buildSW();