// service-worker.js
let urls = [
    "/",
    "/index",
    "/datos",
    "/estilos.css",
    "/imgs/icono.png",
    "/imgs/icono-128.png",
    "/imgs/icono-512.png",
    "/imgs/pokemon.png",
];
let cacheName = "pokemonCachev1";
async function precache() {
    let cache = await caches.open(cacheName);
    cache.addAll(urls);
} 
    //precache
self.addEventListener("install", function (e) {
    e.waitUntil(precache());
    });

self.addEventListener('fetch', event => {
    event.respondWith(getfromCache(event.request));
});
async function getfromCache(url) {
    let cache = await caches.open(cacheName);
    let response = await cache.match(url);
    try {
    if (response) {
        return response;
    }
    else {
        let respuesta = await fetch(url);
        cache.put(url, respuesta.clone());
        return respuesta;
    }
    }
    catch (x) {
        console.log(x);
    }
}