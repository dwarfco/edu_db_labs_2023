/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4e2ca0828ff635447c1ef347ee0f9a01"
  },
  {
    "url": "assets/css/0.styles.ddbc24d7.css",
    "revision": "0dc41feb0e6b9c6ffdb70703928bab56"
  },
  {
    "url": "assets/img/actions_get.85077981.png",
    "revision": "850779819498dbc283a7568a2b85fbfc"
  },
  {
    "url": "assets/img/datafile_post.0c9234b1.png",
    "revision": "0c9234b12792952bacfe8483661e6e6b"
  },
  {
    "url": "assets/img/datafiles_delete.49d96822.png",
    "revision": "49d96822d7e0bc8e16126b1f0f6b14e0"
  },
  {
    "url": "assets/img/datafiles_get_after_delete.992e01c0.png",
    "revision": "992e01c042296b4ed42a9c1192e70b4a"
  },
  {
    "url": "assets/img/datafiles_get_after_post.4cec477b.png",
    "revision": "4cec477b02b294176dcd3c8230a04d5e"
  },
  {
    "url": "assets/img/datafiles_get.1c844a98.png",
    "revision": "1c844a98619dc10b7fb213d216efe9a2"
  },
  {
    "url": "assets/img/relational_schema.a1d51330.png",
    "revision": "a1d51330886f69b591db3cfb6fb01f43"
  },
  {
    "url": "assets/img/roles_get.470c3fc4.png",
    "revision": "470c3fc430f39acceb24ee527b1b6704"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/user_delete.840b4f52.png",
    "revision": "840b4f52338a2d8e45735ef15aebb78e"
  },
  {
    "url": "assets/img/user_get_delete.959f33f1.png",
    "revision": "959f33f159e7d48613f27cc766ec62bf"
  },
  {
    "url": "assets/img/users_get_new.258b7c82.png",
    "revision": "258b7c822634158357885784cf15a44f"
  },
  {
    "url": "assets/img/users_get.43839cbd.png",
    "revision": "43839cbd4c2e6567d2e41de9603418b5"
  },
  {
    "url": "assets/img/users_post.00184470.png",
    "revision": "00184470447bf486cae6ec8165c889d0"
  },
  {
    "url": "assets/js/10.6db29c85.js",
    "revision": "8c2ae717064859491bcc824cf7ad1616"
  },
  {
    "url": "assets/js/11.ae9ae219.js",
    "revision": "87565f34b00c7a3601d3e5f6fb559965"
  },
  {
    "url": "assets/js/12.b1468cfc.js",
    "revision": "bb210cb631338f01208b3f3b75d136c2"
  },
  {
    "url": "assets/js/13.81c6422e.js",
    "revision": "f6a26ee655bc299979566c80f26cef20"
  },
  {
    "url": "assets/js/14.44983906.js",
    "revision": "1bd420b7e15f74f76cf6701816b0d06b"
  },
  {
    "url": "assets/js/15.65030050.js",
    "revision": "1450219a44efd18789e9b3547f4532e9"
  },
  {
    "url": "assets/js/16.5fa7a41f.js",
    "revision": "76834b8a042455cb90864f87442dc857"
  },
  {
    "url": "assets/js/17.71bdce30.js",
    "revision": "e46edac40600b549f263b4dd67f481b0"
  },
  {
    "url": "assets/js/18.ee7d0d64.js",
    "revision": "7db1be782bba4561acba654896c69578"
  },
  {
    "url": "assets/js/19.0e8e5bc8.js",
    "revision": "b86d648e96b0d338ce1c81c0c463c094"
  },
  {
    "url": "assets/js/2.4dce6878.js",
    "revision": "5f3001a5ae0939e22f16a14030b62dae"
  },
  {
    "url": "assets/js/20.e0cb1bef.js",
    "revision": "a54450f3977626de01d8a3557868bca9"
  },
  {
    "url": "assets/js/21.a11ac45e.js",
    "revision": "d4a6bdc45f4f1e14a21f283b146f2dc9"
  },
  {
    "url": "assets/js/22.771c0c2a.js",
    "revision": "e83f389defcb0dd5fed5d0b34d06be5b"
  },
  {
    "url": "assets/js/23.214a2566.js",
    "revision": "d0ebd9504eee278b1903072ff79c9158"
  },
  {
    "url": "assets/js/24.fb949811.js",
    "revision": "cd1bc86b37d86d1042901c5f1afe0166"
  },
  {
    "url": "assets/js/26.6dec4e79.js",
    "revision": "57e940fd028f64683c665bc0f029fdf5"
  },
  {
    "url": "assets/js/3.bf9dfa5a.js",
    "revision": "74f9117ace28042ee2d675077bac2d76"
  },
  {
    "url": "assets/js/4.a897aabd.js",
    "revision": "7624a982ea8d681c895b08e693a303a8"
  },
  {
    "url": "assets/js/5.326ba5e0.js",
    "revision": "80f30f0fade8a992862c5b44c8a70fd0"
  },
  {
    "url": "assets/js/6.20957c03.js",
    "revision": "d666bc23dc41137f5759cfd2d59b03d1"
  },
  {
    "url": "assets/js/7.dc65073d.js",
    "revision": "150274c8155336ce55c65d305f07b8d6"
  },
  {
    "url": "assets/js/8.4e6744f6.js",
    "revision": "8a5400a8d70751cbf9253aab0dccde5b"
  },
  {
    "url": "assets/js/9.5f82a72a.js",
    "revision": "5d10b3c0800f6aef7226ff05cf9c66dd"
  },
  {
    "url": "assets/js/app.d3b58541.js",
    "revision": "f41fa7c94fd178952f0c5463eb535ba2"
  },
  {
    "url": "conclusion/index.html",
    "revision": "ce42b6b42c570d9edbeb1b465664c003"
  },
  {
    "url": "design/index.html",
    "revision": "1f0c9112f3400d027f18241e352e3550"
  },
  {
    "url": "index.html",
    "revision": "61873bab30d7be36fab326f4409749ba"
  },
  {
    "url": "intro/index.html",
    "revision": "52e13835c9b60a150afb9e46b60b7ed5"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "d479e1756faa9947b4e383033e02e691"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "95fe9ac706cb7b846c1887446c6cfa28"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "46e6f79ad79de1c525a14ad08c680e3c"
  },
  {
    "url": "software/index.html",
    "revision": "bd44f591ef68d00932cfcbabd2d2cf87"
  },
  {
    "url": "test/index.html",
    "revision": "0c87512bc0a3a6ba3cd94f8bced15119"
  },
  {
    "url": "use cases/index.html",
    "revision": "3632c55a5aae3aac7801f15b29a59a38"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
