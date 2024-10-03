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
//async function getfromCache(url) {
//    let cache = await caches.open(cacheName);
//    let response = await cache.match(url);
//    try {
//    if (response) {
//        return response;
//    }
//    else {
//        let respuesta = await fetch(url);
//        cache.put(url, respuesta.clone());
//        return respuesta;
//    }
//    }
//    catch (x) {
//        console.log(x);
//    }
//}

////async function CacheOnly(url) {
////    let cache = await caches.open(cacheName);
////    let response = await cache.match(url);
////    try {
////        if (response) {
////            return response;
////        }
////        else {
////            return new response("no se encontro en cache");
////        }
////    }
////    catch (x) {
////        console.log(x);
////    }
////}

//async function NetworkFirst(url) {
//    let cache = await caches.open(cacheName);
//    let response = await cache.match(url);
//    try {
//        let respuesta = await fetch(url);
//        if (respuesta.ok) {
//            cache.put(url, respuesta.clone());
//            return respuesta;
//        }
       
//    }
//    catch (x) {
//        let respuesta = await cache.match(url);
//        if (response){
        
//            return response;
//        }
//        else
//        console.log(x);
//    }
//}

//async function StaleWhileRevalidate(url) {
    
//    try {
//        let cache = await caches.open(cacheName);
//        let response = await cache.match(url);
//        let r= fetch(url).then(response => {
//            cache.put(url, response.clone());
//        });
//        return response || r;

//    }
//    catch (x) {
//            console.log(x);
//    }
//}