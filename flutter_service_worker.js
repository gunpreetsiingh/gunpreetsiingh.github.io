'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "b4a793d50697cd29981dba81dfd819a4",
"index.html": "30f45259f7f6c8145b11ac0ddf61028a",
"/": "30f45259f7f6c8145b11ac0ddf61028a",
"main.dart.js": "678fa6f1c4fe5b875278bf914447252e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "1bb4c1394871812f230c4c4804359312",
".git/config": "9258d2737c12533991e7ad9460b7d386",
".git/objects/0d/bd2a74e680a9645c52d23818b8cbd7d85db0a5": "86e523249f79e8c531ce1b3789ed857e",
".git/objects/59/245f0fc0d1cb6e6c7ea8489b0d3c3ffef4fa89": "395bfd1944ecd5b8a1333fc535a79246",
".git/objects/50/d9b8963ba0ac5bfd26abae8754e5547af4aea4": "4b4ebad2563778657b72b078501fc4d1",
".git/objects/03/e832bbbfcf0359dece7740ebc49acb0086d0ec": "965fe0ad0cd09e456c4b1cf5c15adff0",
".git/objects/9b/d5739cb6ecf1aa74706a0f71c7c4270b3a70e8": "f4c5bcc13447ec7b56d862de5d597316",
".git/objects/04/e8f1835e8a7f06c24a836a2743486d19a1bde5": "16e4c2af6ccc8fdd18f91b0b7ff59c56",
".git/objects/04/b1aa489ccc68fc718f0988481347c131c71607": "1fd0a7d69cc1a1ce6b520df7fa0f60ff",
".git/objects/6a/44d7e6e239e43a51b79b6d4b0b7d017a44b203": "0b75ea9ec6077c6e576fbe124938ef2c",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/35/41412f1302b7a6403c7d12f1ac33d7006ef906": "516611542cfcdaa87fde49f157908944",
".git/objects/69/3d08bef502af4b6ff4ec79ba051432b2ab3079": "bb998e1c8278087a3cb04ef83020b7f6",
".git/objects/3c/3fb2c178a7437eaca5200a3115baf7cbaadb36": "686b609899681a87c1ba572feeca7256",
".git/objects/5a/ed1d0cd9bb79a73d391f5d93b585d82d50647a": "0cc9ff4410bd263305a4da1d02e93610",
".git/objects/5a/9e0b18d80dc724ef5adf968e0e30d0a6770923": "8d0b94d9c6f0a79c5b89e1bc13602158",
".git/objects/a4/a566ec933a0267ddb997839dddf3efe08dfe8e": "f53615cdc1eaf18dfd6cdde158a9bd2d",
".git/objects/b5/8b0d16285c9c01dcb3ec460b9b9b57414ea531": "fa078fb9900f67be1f8fbb2e906a888e",
".git/objects/ac/495ac81cd03686a704bf6f1f7d0613e6ae35e6": "38949a24e5d7602201d66dca1ad2133b",
".git/objects/ad/8174d3e3649c8b191fe1b0ea0e3dd336922997": "f09993e837f76db1ad906bf58a7bad2d",
".git/objects/be/d450022b3da7169e6417f930801267128c554e": "09df78c99034f5edb2034fc6cd679b69",
".git/objects/d6/70c6bc3157fe5d0b370e852ca91224c0fe2fa7": "3977861fee792cd8a175824ee0d7382b",
".git/objects/d6/67b5bd0cf141deea7c1b71c251e08c25033809": "6098722fd610d4f88457ab94d9b9f130",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/4a67988ae93b84f5078564f9d870772db1852d": "5c230d22c6a87b9f641eaba781da907c",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/e5/900f8cf143cb03dd9a44d29d5e56a169da65c3": "34e7a1720b984544e480a5f76b1ffe7d",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e2/d28d3193e5237a30781508cde84635f7d185d1": "367128d60d96cac277d29c9b297a2683",
".git/objects/e2/eeb7de71d04b92bf98cc28f5cc288b1286ed36": "6afb32c0e3f50f2140cd46844d3c8d9b",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/7123b4846d27751e2ae5641d018d642bf86f21": "af86532ee9b5e88a5c3540328d507329",
".git/objects/ca/8280eaeb83c5d4ca8e5517dcc51951f657bb21": "cdd6bd0e29b7d69cc57f8f3ac271b6fa",
".git/objects/ca/7c164ddc748df3cfdf041f8e8aabafbc1589ad": "ca58991784200d70bec515ba7119f419",
".git/objects/c8/6cdf6a3be0f99c9aa531fbfcdc8793ccba14bb": "120d02645704d3cd077061f85ba6f3d6",
".git/objects/c6/8424d1ce2e51cdd1f244a1b6d7c1ea1dfbc8e9": "8054072e6991479e5c46804e7e097142",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/7d/07b4bf0a8dfc5dece90c9a7d15147356190d52": "a2a0b96bd692b1be9a75c845d853a437",
".git/objects/29/c1d5c2c78cab29fc319b6dd86cc38dcb8a245b": "c00c829d54a7350c2e1ff847f0d06b82",
".git/objects/1f/fdda8f3bfb66085672150364efdb1043a3ba63": "567d8ac08081fe64ed01e3363bfd2f46",
".git/objects/73/d56b19f27b85b88ce3a73cd43c572db9c49c33": "0ae3d9ce33fd673ae904e2bf2fceacdb",
".git/objects/80/162d160528271b1631792acb0bc0c18bbfe125": "d7c0c36dcca746c8c33b7ee03e219fa1",
".git/objects/74/61566f71bf69e16bb1659c9e045b8fab64f043": "6e1d15fab0548e88cbbd93f384f4a28d",
".git/objects/17/5fd1e2977409979906f85b196013ebfbdc8ace": "38f0dfabaa52cbf706629803f1ec3494",
".git/objects/8f/578b78258bf1c70909a63f4afceb1ab90c92e7": "d10e4c232a770b1f1296ba1b291378d4",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/19/44840438c279bb617c26056021019449d003a1": "947d6179e5c5dd02c3db1ee1183354bb",
".git/objects/4c/b005e02d357038e1f93d325fbcf0283a318130": "585322b27d928c24d71f0ed189ef6040",
".git/objects/26/7ff035a39098dbde26fffc767012e26460b60d": "2750ff2f759f2f184cad2a8912c556cd",
".git/objects/4d/d119932d3ba03fa4dc823d0b76a03b027f9080": "93c8feed8f51380bc338f2c4f3cd3a88",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/9f/c2a622c29a3e77c7e4e48f621ea4796b158b12": "efe7712751ea10e0d4211fd20f9f7c65",
".git/objects/6b/e32efe3e4dc9a709b06df38b7e6814ea8aff83": "683d2dd587a4e07002854a71b7ce46cb",
".git/objects/6e/268d3ed1c08194869f39706fcd10bf4268127d": "bc2119031136da9f3cb19b9a05db52c0",
".git/objects/36/b9fbb51027f98503944f4f9e5ad9050b3550d3": "947a33a1598bef5595b208cdeef95646",
".git/objects/5c/2f888f16d720e79dda94dff578f53442372c6a": "437998f570e09e30c302866d14498476",
".git/objects/09/bf8d9da2e78f6e3ffa89aac5bb0669bba5e719": "b727fc675212c07b4b25693edc81c41e",
".git/objects/65/40e180e12aef124d905d6109b2c0610a7f422e": "ee168b7c433f2cfb90645c422874089d",
".git/objects/62/007f1540f23c4f66badff34d32197974d2cf32": "d8f8bd0c7f92abeeb5511149be87324a",
".git/objects/98/c05afe247da96e8bf824e15858d42d6f8539ba": "8acc9d891145b37afec76c3b419dc438",
".git/objects/53/f84b7613dfb70f597210a6e9d3e13268cc05e6": "d17cfbe3525d62b2f440dad1e7b74c31",
".git/objects/30/5eb7c0ec42b89bfc6fb32bacfd56b83312f7b6": "4d2c0329ee06ae32b4830e3708583db7",
".git/objects/5e/c91b531d562a80a51656086d9bf83787535617": "c24ae2b6486f721efe0399c60a1caaae",
".git/objects/5b/71128e13033b9e6c30c21735793c258809b93b": "d82a056c5df1b545529162450ad69c85",
".git/objects/99/4761922386f6aa255e2001de5c6ec259f988be": "d3038ff6a7f94b9956aae256f2d25388",
".git/objects/90/8e2a7954857695b8b9d33659926ce8ce19ee0b": "b38d25ba8359fc6665e92acd8c5b8533",
".git/objects/90/fa7a6fa9dbbd1a3a14696aeffaa02a32a21668": "f37a15dabf88a9234575f64d119d4abb",
".git/objects/bf/22d225c33b57b360cf9d2c1f963be27cde0980": "5cce6672a83b034da8d6c4826a5c8079",
".git/objects/d4/e9c6c0cb47935aadeed00a81ef6177928f5491": "475a8fa1997256454e544ae94a8c6fe2",
".git/objects/a7/a6c3534a75e113430fc6933239d371ebc99417": "a7a7435aa89c556e7bc2dd971feb5f3d",
".git/objects/dd/0883d806b7c88983a324529094c25dfb52bcbc": "b18737b6e93f995739ff1a63051babe6",
".git/objects/b6/6ed2ac727d82ddb5c3fe1f322c778fb29675be": "0a190d768d39307dad20b5a0e1f14477",
".git/objects/d2/cdeb67d8ccaf1f57e8a6f956ff3263de67d44d": "2fdd4dfb335abd44daac701924c3b758",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/83f835855a9355145ea575be42e0490dadcab4": "7c77ae73bde0a834f0886d2549d5d18d",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a8/a57ed617080759a42031b293238bd29028e818": "ad79e1b590d0d253d8bba36bca76a352",
".git/objects/b0/b8d6b5879103ca1b0acefc668de42730bb2436": "0ca942df857a2dc9f36a05800699b9ab",
".git/objects/a6/4b86b74126fc477d34594343859e06e450217d": "af53d9b726203d9652cbc3cead261e74",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ef/b7e72b94ea18d3f7810becb0eefd5d03ba5541": "eb6876e09809d9cc0d330859f22ee2ab",
".git/objects/c4/eab021664be5e4f98ff819e03429561f55b014": "f49c5ab2c34af7408105fe5f62cb3692",
".git/objects/cc/74158fbc7f88ecd3e311467f528bffa8ba00b8": "5441267357f7696f04bf256600b50782",
".git/objects/e6/dfa748bc90a5f78ecdb6624ef5648b163fb69b": "8ab17aa06043d759d373e99528aea038",
".git/objects/f0/d8dee440df6805d4de7e6f8f548aad1dd6bc6e": "10ac68730828551e4fc11ac945d349ec",
".git/objects/f6/d5b8c453101ef3ba810d3724365578ab7190b5": "e10514b2741af629a511e47ac8f58710",
".git/objects/cb/f7c012a9cab74dc4ff82e03b997cb05de9d1cf": "c0b495712af9101dabc4ec85f31eab2c",
".git/objects/f8/94d513bd5d90e584ff1f05bdf9612883138e51": "5cc2c62151a771b3b4070d0c33bc3d9d",
".git/objects/46/88eb3a6907331a3fab332a5d3c106dcf29d921": "57f134545814d7d6818776d8b606bfbb",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/41/15e356a33b741876f95ebc4379a3abc832e9dc": "06eaec36924c44529f14b7b78c9165dc",
".git/objects/1b/66e2bf369f668efca36918381a5c0e5a09f128": "46ed9bf0206dd905b5366aab884a29ba",
".git/objects/1b/81732516b076dff9f6ef29fc64c122dee59130": "0f0833a58c208fc50c037a3af0f84c94",
".git/objects/77/f31c1fe30b5df7367df1443a8cd13ab6e99cba": "8586f59e3dea941430a393c847c4e55c",
".git/objects/70/f48953adfd0e0b482347aaf85dc341aca56622": "f5e9929bd5b732a0230d8e41479c75ab",
".git/objects/1e/d3ce892d3d1e13402aec57692e3bf364f94c12": "0f9db823261abba0d13ce589ddbcbbe2",
".git/objects/84/87f6f8cc2201a25cfd5727d50a34319e242046": "88b847b4f7e627e04a222fb0af8acddb",
".git/objects/40/c3983fb18f988ab02159d890753040a54c32c5": "d10ec7ca7e3dff28ed1b5582031c3a7d",
".git/objects/40/9a3f9e7b5cd3f3d67fe60871f988c9fd6b621a": "edfc8492581534b16490651cf6bff0fc",
".git/objects/2e/5b9f163d6755786e219b435077d72633c19c18": "3590b084174d12f139d31e94eb0e375a",
".git/objects/2b/2d44e0124765134e7af7de994dd8d8cfc4d7e6": "b64cee94fa37c5d811e31f746759a12f",
".git/objects/2b/14e77180ac381f96d7f915a355f93238ecd380": "e67de27922b01edb0ec0425ef28edc7b",
".git/objects/7f/929d55a9f2e44c7b5cc64c7c621aecc30dff4a": "a8973dffd08d92632f0ce7f723c73df6",
".git/objects/25/e6002a42c219252115ed5fa81efe6dbbef6deb": "e9b4692de5a10f52c076a178bf82190d",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "2b9007bc7cf24615d88d90a00c7b389d",
".git/logs/refs/heads/master": "2b9007bc7cf24615d88d90a00c7b389d",
".git/logs/refs/remotes/origin/master": "81da768d40a19abfacfb5c06261c7829",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "5bbc87c6e328924a1770550fd86443ae",
".git/refs/remotes/origin/master": "5bbc87c6e328924a1770550fd86443ae",
".git/index": "d768810e11098153aa01d049a7c9091a",
".git/COMMIT_EDITMSG": "dbfa5d4f8a5bffc1abf91e3d05db90e9",
".git/FETCH_HEAD": "00349d93c851fa12ca0986578d3d2f5f",
"assets/AssetManifest.json": "e8297b8b2994c4e93483a98754af2367",
"assets/NOTICES": "a0e028dfd2d0ab9b0dac42a1966984a0",
"assets/FontManifest.json": "9ca5dcfcd70a3310e33da7169e2df95e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/flutterfire_ui/assets/countries.json": "794c39e999ec6dc3c1c2b3dac6d17642",
"assets/packages/flutterfire_ui/assets/icons/facebook.svg": "5fad3daafe7c7c5163fca56662d2738a",
"assets/packages/flutterfire_ui/assets/icons/google.svg": "3b5ceaea5e2391782d39df225a375d5d",
"assets/packages/flutterfire_ui/assets/icons/apple_light.svg": "2508cc7c5d302fd37edff1b87fedb594",
"assets/packages/flutterfire_ui/assets/icons/twitter.svg": "6086e2aad26effea1344c8e118520e32",
"assets/packages/flutterfire_ui/assets/icons/apple_dark.svg": "1b587ffd7d75c462847f8137a93f3161",
"assets/packages/flutterfire_ui/assets/fonts/SocialIcons.ttf": "a1207fae1578da27a062cb73d424aed9",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/invite.png": "466462ceacccca3dc9f114d62a94526a",
"assets/assets/qrCode.jpeg": "da580a6ed1243c1af16d0635a6393cf2",
"assets/assets/splash_bg.jpg": "825b5ed9bc7338ac5fc6a3830f22911f",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
