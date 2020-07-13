if (typeof importScripts === 'function') {
    importScripts(
      'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
    );
  
    /* global workbox */
    if (workbox) {
      console.log('Workbox is loaded 🚀');
      workbox.core.skipWaiting();
  
      /* injection point for manifest files.  */
      workbox.precaching.precacheAndRoute(self.__WB_MANIFEST);
  
      /* custom cache rules */
      workbox.routing.registerRoute(
        new workbox.routing.NavigationRoute(
          new workbox.strategies.NetworkFirst({
            cacheName: 'PRODUCTION',
          })
        )
      );
       // Adding staleWhileRevalidate for all img files
       workbox.routing.registerRoute(
        /.*\/imgs\/(.*\/)?.*\.(png|jpg|jpeg|gif|svg)/,
        new workbox.strategies.StaleWhileRevalidate()
      );
    } else {
      console.log('Workbox could not be loaded. Hence, no offline support.');
    }
  }