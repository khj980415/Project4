const staticAssets=[
    './',
    './css/style.css',
    './js/main.js',
    './images/back_green.svg',
    './images/back.svg',
    './images/banner1.png',
    './images/banner2.png',
    './images/banner3.png',
    './images/banner4.png',
    './images/banner5.png',
    './images/best1.png',
    './images/best2.png',
    './images/best3.png',
    './images/best4.png',
    './images/best5.png',
    './images/best6.png',
    './images/community_active.svg',
    './images/community.svg',
    './images/delete.png',
    './images/favicon.ico',
    './images/home_active.svg',
    './images/home.svg',
    './images/icon_72.png',
    './images/icon_96.png',
    './images/icon_128.png',
    './images/icon_144.png',
    './images/icon_152.png',
    './images/icon_192.png',
    './images/icon_384.png',
    './images/icon_512.png',
    './images/icon_time.png',
    './images/magazine1.png',
    './images/magazine2.png',
    './images/magazine3.png',
    './images/magazine4.png',
    './images/magazine5.png',
    './images/magazine6.png',
    './images/more_arrow.png',
    './images/mypage_active.svg',
    './images/mypage.svg',
    './images/notice.svg',
    './images/product1.png',
    './images/product2.png',
    './images/product3.png',
    './images/product4.png',
    './images/product5.png',
    './images/product6.png',
    './images/recent1.png',
    './images/recent2.png',
    './images/recent3.png',
    './images/recipe_active.svg',
    './images/recipe.svg',
    './images/Recommend1.png',
    './images/Recommend2.png',
    './images/Recommend3.png',
    './images/Recommend4.png',
    './images/Recommend5.png',
    './images/Recommend6.png',
    './images/search_green.svg',
    './images/search.svg',
    './images/star_green.png',
    './images/star_red.png',
    './images/star_yellow.png',
    './images/store_active.svg',
    './images/store.svg',
    './images/view1.png',
    './images/view2.png',
    './images/view3.png',
    './images/view4.png',
    './images/view5.png',
    './images/view6.png',
    './images/voice.svg'
];

self.addEventListener('install', async event=>{
    const cache = await caches.open('static-cache');
    cache.addAll(staticAssets);
});

self.addEventListener('fetch', event => {
    const req = event.request;
    const url = new URL(req.url);

    if(url.origin === location.url){
        event.respondWith(cacheFirst(req));
    } else {
        event.respondWith(newtorkFirst(req));
    }
});

async function cacheFirst(req){
    const cachedResponse = caches.match(req);
    return cachedResponse || fetch(req);
}

async function newtorkFirst(req){
    const cache = await caches.open('dynamic-cache');

    try {
        const res = await fetch(req);
        cache.put(req, res.clone());
        return res;
    } catch (error) {
        return await cache.match(req);
    }
}