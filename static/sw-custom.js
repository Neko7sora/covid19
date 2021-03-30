self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open('indexpages').then(function (cache) {
      var rooturl = [];
      rooturl.push(location.protocol+"//"+location.host)
      return cache.addAll([
        ...rooturl
      ]);
    })
  );
});

caches.keys().then(function(keys) {

  var online = [];
  online.push(navigator.onLine)
    var promises = [];
    keys.forEach(function(cacheName) {
        if (cacheName == "indexpages" && online[0] == true) {
            promises.push(caches.delete("indexpages"));
        }
    });
});
