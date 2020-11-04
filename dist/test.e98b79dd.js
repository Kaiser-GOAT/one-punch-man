// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"test.js":[function(require,module,exports) {
var content = "\n.onePunchMan * {\n    box-sizing: border-box;\n    margin: 0px;\n    padding: 0px;\n  }\n.onePunchMan *::before ::after {\n    box-sizing: border-box;\n    margin: 0px;\n    padding: 0px;\n  }\n  body {\n    background: #e9c066;\n  }\n  .onePunchMan {\n    position: relative;\n  }\n  .face {\n    width: 320px;\n    height: 500px;\n    left: 50%;\n    top: 20px;\n    position: absolute;\n    position: relative;\n    margin-left: -300px;\n    z-index: 0;\n  }\n  .light {\n    width: 300px;\n    z-index: 2;\n    position: absolute;\n    transform: translate(-70px);\n    top: -50px;\n    display: none;\n  }\n  .face:hover > .light {\n    display: block;\n  }\n  .face .yuan1 {\n    position: absolute;\n    width: 320px;\n    height: 350px;\n    border-radius: 50%;\n    background: #f7ceb0;\n    overflow: hidden;\n    z-index: 1;\n  }\n  .face .yuan2 {\n    position: absolute;\n    width: 300px;\n    height: 400px;\n    border-radius: 150px/200px;\n    bottom: 30px;\n    background: #f7ceb0;\n    transform: translate(10px);\n    z-index: 1;\n  }\n  .face .fang {\n    position: absolute;\n    width: 320px;\n    height: 15px;\n    border-top: 130px solid #f7ceb0;\n    border-left: 14px solid transparent;\n    border-right: 14.5px solid transparent;\n  \n    transform: translateY(185px);\n    z-index: 1;\n  }\n  .eyesLeft {\n    border: 4px solid black;\n    width: 100px;\n    height: 55px;\n    position: relative;\n    position: absolute;\n    left: 25%;\n    z-index: 1;\n    top: 200px;\n    margin-left: -50px;\n    border-radius: 40% 40% 50% 50%;\n    background: white;\n  }\n  @keyframes move {\n    0% {\n      transform: translate(0px);\n    }\n    25% {\n      transform: translate(33px);\n    }\n    80% {\n      transform: translate(-35px);\n    }\n    100% {\n      transform: translate(0px);\n    }\n  }\n  .eyes:hover > .eyeballs {\n    animation: move 2s infinite linear;\n  }\n  .eyeballs {\n    position: absolute;\n    position: relative;\n    top: 215px;\n    width: 15px;\n    height: 15px;\n    z-index: 1;\n    left: 50%;\n    margin-left: -7.5px;\n  }\n  .eyeballs .leftEyeball {\n    position: absolute;\n    border: 5px solid black;\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n    transform: translate(-75px);\n    background-color: black;\n    z-index: 1;\n  }\n  .eyeballs .rightEyeball {\n    position: absolute;\n    border: 1px solid black;\n    width: 13px;\n    height: 13px;\n    border-radius: 50%;\n    transform: translate(75px);\n    background-color: black;\n    z-index: 1;\n  }\n  .eyesRight {\n    border: 4px solid black;\n    width: 100px;\n    height: 55px;\n    position: relative;\n    position: absolute;\n    left: 75%;\n    z-index: 1;\n    top: 200px;\n    margin-left: -50px;\n    border-radius: 40% 40% 50% 50%;\n    background: white;\n  }\n  .leftEyebrows {\n    position: absolute;\n    border: 4px solid black;\n    width: 110px;\n    height: 30px;\n    z-index: 1;\n    left: 23%;\n    top: 180px;\n    margin-left: -50px;\n    border-radius: 50% 50% 0 0;\n    border-right-color: transparent;\n    border-left-color: transparent;\n    border-bottom-color: transparent;\n  }\n  .rightEyebrows {\n    position: absolute;\n    border: 4px solid black;\n    width: 110px;\n    height: 30px;\n    z-index: 1;\n    left: 74%;\n    top: 180px;\n    margin-left: -50px;\n    border-radius: 50% 50% 0 0;\n    border-right-color: transparent;\n    border-left-color: transparent;\n    border-bottom-color: transparent;\n  }\n  .nose .straight {\n    position: absolute;\n    border: 5px solid black;\n    width: 100px;\n    height: 15px;\n    z-index: 3;\n    top: 278px;\n    left: 30%;\n    border-radius: 50% 50% 0% 0%;\n    border-right-color: transparent;\n    border-left-color: transparent;\n    border-bottom-color: transparent;\n    transform: rotate(95deg);\n  }\n  .nose .oval {\n    position: absolute;\n    border: black 4px solid;\n    width: 25px;\n    height: 25px;\n    top: 319px;\n    z-index: 3;\n    left: 45%;\n    border-radius: 20px/15px;\n    border-right-color: transparent;\n    border-top-color: transparent;\n    transform: rotate(-10deg);\n  }\n  .mouth .oval1 {\n    width: 80px;\n    height: 100px;\n    z-index: 1;\n    position: absolute;\n    bottom: 100px;\n    left: 52%;\n    margin-left: -50px;\n    border-radius: 80px/100px;\n    background: #ed6157;\n  }\n  .mouth .oval2 {\n    width: 160px;\n    height: 80px;\n    z-index: 2;\n    position: absolute;\n    bottom: 125px;\n    left: 40%;\n    margin-left: -80px;\n    border-radius: 0% 0% 50% 50%;\n    background: #f7ceb0;\n  }\n  \n";
var demo1 = document.querySelector('#demo1');
var demo2 = document.querySelector('#demo2');
var n = 1;
var time = 100;
var timeMachine;
var player = {
  init: function init() {
    demo1.innerText = content.substr(0, n);
    demo2.innerHTML = content.substr(0, n);
    player.play();
    player.bindEvent();
  },
  hashmap: {
    '#btnStop': 'pause',
    '#btnPlay': 'play',
    '#btnFast': 'fast',
    '#btnSlow': 'slow',
    '#btnNormal': 'normal'
  },
  bindEvent: function bindEvent() {
    for (var key in player.hashmap) {
      if (player.hashmap.hasOwnProperty(key)) {
        var value = player.hashmap[key];
        document.querySelector(key).onclick = player[value];
      }
    }
  },
  x: function x() {
    n += 1;

    if (n > content.length) {
      window.clearInterval(timeMachine);
      return;
    }

    demo1.innerText = content.substr(0, n);
    demo2.innerHTML = content.substr(0, n);
    demo1.scrollTop = demo1.scrollHeight;
  },
  play: function play() {
    timeMachine = setInterval(player.x, time);
  },
  pause: function pause() {
    window.clearInterval(timeMachine);
  },
  slow: function slow() {
    player.pause();
    time = 200;
    player.play();
  },
  fast: function fast() {
    player.pause();
    time = 0;
    player.play();
  },
  normal: function normal() {
    player.ause();
    time = 100;
    player.play();
  }
};
player.init();
},{}],"../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62249" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../AppData/Local/Yarn/Data/global/node_modules/parcel/src/builtins/hmr-runtime.js","test.js"], null)
//# sourceMappingURL=/test.e98b79dd.js.map