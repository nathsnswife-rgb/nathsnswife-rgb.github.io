// Retire the old Monster Bash offline cache so the new checker preview loads.
self.addEventListener('install',event=>event.waitUntil(self.skipWaiting()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
 const keys=await caches.keys();
 await Promise.all(keys.filter(k=>k.startsWith('monster-bash-')).map(k=>caches.delete(k)));
 await self.registration.unregister();
 const clients=await self.clients.matchAll({type:'window',includeUncontrolled:true});
 await Promise.all(clients.map(c=>c.navigate(c.url).catch(()=>{})));
})()));
self.addEventListener('fetch',event=>{
 if(event.request.method==='GET'&&event.request.mode==='navigate'){
  event.respondWith(fetch(event.request,{cache:'no-store'}).catch(()=>new Response('Please reconnect and reload the treasure hunt preview.',{status:503})));
 }
});
