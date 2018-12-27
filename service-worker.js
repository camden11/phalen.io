"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["/index.html","72f860b69d5acee2c35ca030cc4d5e91"],["/static/js/main.e64ef151.js","b8703099c356ab8e24f87ec3116f180b"],["/static/media/alignable_preview.b9041be1.jpg","b9041be119c14f5856361b1a8c076c77"],["/static/media/camden-mobile.7f8a2ce0.jpg","7f8a2ce0c8d77c430f88ede4b7eed3c4"],["/static/media/camden.db83fd46.jpg","db83fd469d1b455b88b8182bb190a5ae"],["/static/media/camden_phalen_resume_2018.55cb816c.pdf","55cb816c22f88f7a2af2b1b5f2adffd5"],["/static/media/hs_analyze.1bae5d51.png","1bae5d5161fd2d26390bec88bf713500"],["/static/media/hs_dashboard.5c4fc7fa.png","5c4fc7faff6e9616470f51f906d95534"],["/static/media/hubspot_preview.b4720f79.jpg","b4720f79537385298411695987390801"],["/static/media/idea_preview.9e86bfeb.jpg","9e86bfebdca8859e1cb8d82370d52f68"],["/static/media/mass-hike_brand_work.9344f8fb.jpg","9344f8fb52e1f5c60450bdd7f654c12e"],["/static/media/mass-hike_code.daaf0c5c.jpg","daaf0c5cb4c46c352afb062419bd21c6"],["/static/media/mass-hike_desktop.beaefb23.png","beaefb235c44fce94a6bcc1e566c72c6"],["/static/media/mass-hike_hike.9abca19c.jpg","9abca19c747d7c5499a8239e7681f26c"],["/static/media/mass-hike_logo.63bc4f3d.png","63bc4f3d53dafbe4553c9a44c09074c1"],["/static/media/mass-hike_mobile.0b68f6ba.png","0b68f6ba0f65c5f397a1415831fc4fa4"],["/static/media/mass-hike_preview.d81597c4.jpg","d81597c408cbd9bb7782f997377d786c"],["/static/media/mass-hike_wireframes_mobile.1c3ad8f6.png","1c3ad8f6ca4fc18534b3de7a3cb9c87e"],["/static/media/open_lines.7057f0a3.jpg","7057f0a3530dbecf3bbfa44d236be0d0"],["/static/media/open_lines_active.a275390c.jpg","a275390cfbf0af1453a1999a137cc37d"],["/static/media/openlines_preview.41d98fb5.jpg","41d98fb546c095cc8fc3fbfead716e06"],["/static/media/t2t_checkout.1c02702e.png","1c02702e3d21e1530350d0b3ecb65a19"],["/static/media/t2t_seller.e7c6b1ff.png","e7c6b1fffef342385e1fbf77b9ba765a"],["/static/media/t2t_shop.1ea7180e.png","1ea7180efacf9b7be38879efc8cf4838"],["/static/media/trailtag_logo.36cdae51.png","36cdae5186a6721e8119cd2558d9daf0"],["/static/media/trailtag_preview.b0120a69.jpg","b0120a694a6f07c0186f60f4904fdd4a"],["/static/media/trailtag_screen1.d8129044.png","d8129044034d3cc88df8aeb6db91ce9b"],["/static/media/trailtag_screen2.24d7fe87.png","24d7fe87b9578d2f3301deb0ea7a2854"],["/static/media/trailtag_ski.1f75e75b.jpg","1f75e75b8fb2b1c2cc302bf09ed9d365"],["/static/media/trailtag_ux.f671b54b.png","f671b54b216dc56ec8f56a4c7fb3c21f"],["/static/media/trash2treasure_preview.cdd0cfac.jpg","cdd0cfac1489ea05b95ee8bfc41ab00b"],["/static/media/upstatement_preview.7541ac6d.jpg","7541ac6d13099cf12f122eaac4279845"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(t))||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});