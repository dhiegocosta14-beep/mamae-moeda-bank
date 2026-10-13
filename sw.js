self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(self.clients.claim()));
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(self.clients.matchAll({type:'window',includeUncontrolled:true}).then(cs=>{for(const c of cs){if('focus' in c)return c.focus()}return self.clients.openWindow('./')}))});
self.addEventListener('push',e=>{let d={};try{d=e.data.json()}catch(x){d={title:'Mamãe Moeda Bank',body:e.data?e.data.text():''}}e.waitUntil(self.registration.showNotification(d.title||'Mamãe Moeda Bank',{body:d.body||'',icon:'icon-192.png',badge:'icon-192.png',tag:d.tag}))});
