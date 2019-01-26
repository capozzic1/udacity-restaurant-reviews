const CACHE_NAME = 'my-cache';
const urlsToCache = [
    '/',
    '/index.html',
    '/restaurant.html',
    '/css/styles.css',
    '/js/dbhelper.js',
    '/js/main.js',
    '/js/restaurant_info.js',
    '/data/restaurants.json',
 
]

self.addEventListener('install', (event) => {
    console.log('service worker installing')
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then((cache) => {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    )
})


self.addEventListener('fetch', (event) => {
    console.log(event.request);
    event.respondWith(
        caches.match(event.request)
        .then(() => {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    )
});



