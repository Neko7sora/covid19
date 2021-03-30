caches.keys().then(function (keys) {

  var online = [];
  online.push(navigator.onLine)
  var promises = [];
  keys.forEach(function (cacheName) {
    if (cacheName == "indexpages" && online[0] == true) {
      promises.push(caches.delete("indexpages")).then(function () {
        self.addEventListener('install', function (event) {
          event.waitUntil(
            caches.open('indexpages').then(function (cache) {
              return cache.addAll([
                "/"
              ]);
            })
          );
        });
      })
    }
  });
});
