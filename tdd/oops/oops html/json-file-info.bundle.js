(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

},{}],2:[function(require,module,exports){
(function (process){(function (){
// 'path' module extracted from Node.js v8.11.1 (only the posix part)
// transplited with Babel

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

'use strict';

function assertPath(path) {
  if (typeof path !== 'string') {
    throw new TypeError('Path must be a string. Received ' + JSON.stringify(path));
  }
}

// Resolves . and .. elements in a path with directory names
function normalizeStringPosix(path, allowAboveRoot) {
  var res = '';
  var lastSegmentLength = 0;
  var lastSlash = -1;
  var dots = 0;
  var code;
  for (var i = 0; i <= path.length; ++i) {
    if (i < path.length)
      code = path.charCodeAt(i);
    else if (code === 47 /*/*/)
      break;
    else
      code = 47 /*/*/;
    if (code === 47 /*/*/) {
      if (lastSlash === i - 1 || dots === 1) {
        // NOOP
      } else if (lastSlash !== i - 1 && dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res.charCodeAt(res.length - 1) !== 46 /*.*/ || res.charCodeAt(res.length - 2) !== 46 /*.*/) {
          if (res.length > 2) {
            var lastSlashIndex = res.lastIndexOf('/');
            if (lastSlashIndex !== res.length - 1) {
              if (lastSlashIndex === -1) {
                res = '';
                lastSegmentLength = 0;
              } else {
                res = res.slice(0, lastSlashIndex);
                lastSegmentLength = res.length - 1 - res.lastIndexOf('/');
              }
              lastSlash = i;
              dots = 0;
              continue;
            }
          } else if (res.length === 2 || res.length === 1) {
            res = '';
            lastSegmentLength = 0;
            lastSlash = i;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          if (res.length > 0)
            res += '/..';
          else
            res = '..';
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0)
          res += '/' + path.slice(lastSlash + 1, i);
        else
          res = path.slice(lastSlash + 1, i);
        lastSegmentLength = i - lastSlash - 1;
      }
      lastSlash = i;
      dots = 0;
    } else if (code === 46 /*.*/ && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}

function _format(sep, pathObject) {
  var dir = pathObject.dir || pathObject.root;
  var base = pathObject.base || (pathObject.name || '') + (pathObject.ext || '');
  if (!dir) {
    return base;
  }
  if (dir === pathObject.root) {
    return dir + base;
  }
  return dir + sep + base;
}

var posix = {
  // path.resolve([from ...], to)
  resolve: function resolve() {
    var resolvedPath = '';
    var resolvedAbsolute = false;
    var cwd;

    for (var i = arguments.length - 1; i >= -1 && !resolvedAbsolute; i--) {
      var path;
      if (i >= 0)
        path = arguments[i];
      else {
        if (cwd === undefined)
          cwd = process.cwd();
        path = cwd;
      }

      assertPath(path);

      // Skip empty entries
      if (path.length === 0) {
        continue;
      }

      resolvedPath = path + '/' + resolvedPath;
      resolvedAbsolute = path.charCodeAt(0) === 47 /*/*/;
    }

    // At this point the path should be resolved to a full absolute path, but
    // handle relative paths to be safe (might happen when process.cwd() fails)

    // Normalize the path
    resolvedPath = normalizeStringPosix(resolvedPath, !resolvedAbsolute);

    if (resolvedAbsolute) {
      if (resolvedPath.length > 0)
        return '/' + resolvedPath;
      else
        return '/';
    } else if (resolvedPath.length > 0) {
      return resolvedPath;
    } else {
      return '.';
    }
  },

  normalize: function normalize(path) {
    assertPath(path);

    if (path.length === 0) return '.';

    var isAbsolute = path.charCodeAt(0) === 47 /*/*/;
    var trailingSeparator = path.charCodeAt(path.length - 1) === 47 /*/*/;

    // Normalize the path
    path = normalizeStringPosix(path, !isAbsolute);

    if (path.length === 0 && !isAbsolute) path = '.';
    if (path.length > 0 && trailingSeparator) path += '/';

    if (isAbsolute) return '/' + path;
    return path;
  },

  isAbsolute: function isAbsolute(path) {
    assertPath(path);
    return path.length > 0 && path.charCodeAt(0) === 47 /*/*/;
  },

  join: function join() {
    if (arguments.length === 0)
      return '.';
    var joined;
    for (var i = 0; i < arguments.length; ++i) {
      var arg = arguments[i];
      assertPath(arg);
      if (arg.length > 0) {
        if (joined === undefined)
          joined = arg;
        else
          joined += '/' + arg;
      }
    }
    if (joined === undefined)
      return '.';
    return posix.normalize(joined);
  },

  relative: function relative(from, to) {
    assertPath(from);
    assertPath(to);

    if (from === to) return '';

    from = posix.resolve(from);
    to = posix.resolve(to);

    if (from === to) return '';

    // Trim any leading backslashes
    var fromStart = 1;
    for (; fromStart < from.length; ++fromStart) {
      if (from.charCodeAt(fromStart) !== 47 /*/*/)
        break;
    }
    var fromEnd = from.length;
    var fromLen = fromEnd - fromStart;

    // Trim any leading backslashes
    var toStart = 1;
    for (; toStart < to.length; ++toStart) {
      if (to.charCodeAt(toStart) !== 47 /*/*/)
        break;
    }
    var toEnd = to.length;
    var toLen = toEnd - toStart;

    // Compare paths to find the longest common path from root
    var length = fromLen < toLen ? fromLen : toLen;
    var lastCommonSep = -1;
    var i = 0;
    for (; i <= length; ++i) {
      if (i === length) {
        if (toLen > length) {
          if (to.charCodeAt(toStart + i) === 47 /*/*/) {
            // We get here if `from` is the exact base path for `to`.
            // For example: from='/foo/bar'; to='/foo/bar/baz'
            return to.slice(toStart + i + 1);
          } else if (i === 0) {
            // We get here if `from` is the root
            // For example: from='/'; to='/foo'
            return to.slice(toStart + i);
          }
        } else if (fromLen > length) {
          if (from.charCodeAt(fromStart + i) === 47 /*/*/) {
            // We get here if `to` is the exact base path for `from`.
            // For example: from='/foo/bar/baz'; to='/foo/bar'
            lastCommonSep = i;
          } else if (i === 0) {
            // We get here if `to` is the root.
            // For example: from='/foo'; to='/'
            lastCommonSep = 0;
          }
        }
        break;
      }
      var fromCode = from.charCodeAt(fromStart + i);
      var toCode = to.charCodeAt(toStart + i);
      if (fromCode !== toCode)
        break;
      else if (fromCode === 47 /*/*/)
        lastCommonSep = i;
    }

    var out = '';
    // Generate the relative path based on the path difference between `to`
    // and `from`
    for (i = fromStart + lastCommonSep + 1; i <= fromEnd; ++i) {
      if (i === fromEnd || from.charCodeAt(i) === 47 /*/*/) {
        if (out.length === 0)
          out += '..';
        else
          out += '/..';
      }
    }

    // Lastly, append the rest of the destination (`to`) path that comes after
    // the common path parts
    if (out.length > 0)
      return out + to.slice(toStart + lastCommonSep);
    else {
      toStart += lastCommonSep;
      if (to.charCodeAt(toStart) === 47 /*/*/)
        ++toStart;
      return to.slice(toStart);
    }
  },

  _makeLong: function _makeLong(path) {
    return path;
  },

  dirname: function dirname(path) {
    assertPath(path);
    if (path.length === 0) return '.';
    var code = path.charCodeAt(0);
    var hasRoot = code === 47 /*/*/;
    var end = -1;
    var matchedSlash = true;
    for (var i = path.length - 1; i >= 1; --i) {
      code = path.charCodeAt(i);
      if (code === 47 /*/*/) {
          if (!matchedSlash) {
            end = i;
            break;
          }
        } else {
        // We saw the first non-path separator
        matchedSlash = false;
      }
    }

    if (end === -1) return hasRoot ? '/' : '.';
    if (hasRoot && end === 1) return '//';
    return path.slice(0, end);
  },

  basename: function basename(path, ext) {
    if (ext !== undefined && typeof ext !== 'string') throw new TypeError('"ext" argument must be a string');
    assertPath(path);

    var start = 0;
    var end = -1;
    var matchedSlash = true;
    var i;

    if (ext !== undefined && ext.length > 0 && ext.length <= path.length) {
      if (ext.length === path.length && ext === path) return '';
      var extIdx = ext.length - 1;
      var firstNonSlashEnd = -1;
      for (i = path.length - 1; i >= 0; --i) {
        var code = path.charCodeAt(i);
        if (code === 47 /*/*/) {
            // If we reached a path separator that was not part of a set of path
            // separators at the end of the string, stop now
            if (!matchedSlash) {
              start = i + 1;
              break;
            }
          } else {
          if (firstNonSlashEnd === -1) {
            // We saw the first non-path separator, remember this index in case
            // we need it if the extension ends up not matching
            matchedSlash = false;
            firstNonSlashEnd = i + 1;
          }
          if (extIdx >= 0) {
            // Try to match the explicit extension
            if (code === ext.charCodeAt(extIdx)) {
              if (--extIdx === -1) {
                // We matched the extension, so mark this as the end of our path
                // component
                end = i;
              }
            } else {
              // Extension does not match, so our result is the entire path
              // component
              extIdx = -1;
              end = firstNonSlashEnd;
            }
          }
        }
      }

      if (start === end) end = firstNonSlashEnd;else if (end === -1) end = path.length;
      return path.slice(start, end);
    } else {
      for (i = path.length - 1; i >= 0; --i) {
        if (path.charCodeAt(i) === 47 /*/*/) {
            // If we reached a path separator that was not part of a set of path
            // separators at the end of the string, stop now
            if (!matchedSlash) {
              start = i + 1;
              break;
            }
          } else if (end === -1) {
          // We saw the first non-path separator, mark this as the end of our
          // path component
          matchedSlash = false;
          end = i + 1;
        }
      }

      if (end === -1) return '';
      return path.slice(start, end);
    }
  },

  extname: function extname(path) {
    assertPath(path);
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find
    var preDotState = 0;
    for (var i = path.length - 1; i >= 0; --i) {
      var code = path.charCodeAt(i);
      if (code === 47 /*/*/) {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            startPart = i + 1;
            break;
          }
          continue;
        }
      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }
      if (code === 46 /*.*/) {
          // If this is our first dot, mark it as the start of our extension
          if (startDot === -1)
            startDot = i;
          else if (preDotState !== 1)
            preDotState = 1;
      } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }

    if (startDot === -1 || end === -1 ||
        // We saw a non-dot character immediately before the dot
        preDotState === 0 ||
        // The (right-most) trimmed path component is exactly '..'
        preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      return '';
    }
    return path.slice(startDot, end);
  },

  format: function format(pathObject) {
    if (pathObject === null || typeof pathObject !== 'object') {
      throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof pathObject);
    }
    return _format('/', pathObject);
  },

  parse: function parse(path) {
    assertPath(path);

    var ret = { root: '', dir: '', base: '', ext: '', name: '' };
    if (path.length === 0) return ret;
    var code = path.charCodeAt(0);
    var isAbsolute = code === 47 /*/*/;
    var start;
    if (isAbsolute) {
      ret.root = '/';
      start = 1;
    } else {
      start = 0;
    }
    var startDot = -1;
    var startPart = 0;
    var end = -1;
    var matchedSlash = true;
    var i = path.length - 1;

    // Track the state of characters (if any) we see before our first dot and
    // after any path separator we find
    var preDotState = 0;

    // Get non-dir info
    for (; i >= start; --i) {
      code = path.charCodeAt(i);
      if (code === 47 /*/*/) {
          // If we reached a path separator that was not part of a set of path
          // separators at the end of the string, stop now
          if (!matchedSlash) {
            startPart = i + 1;
            break;
          }
          continue;
        }
      if (end === -1) {
        // We saw the first non-path separator, mark this as the end of our
        // extension
        matchedSlash = false;
        end = i + 1;
      }
      if (code === 46 /*.*/) {
          // If this is our first dot, mark it as the start of our extension
          if (startDot === -1) startDot = i;else if (preDotState !== 1) preDotState = 1;
        } else if (startDot !== -1) {
        // We saw a non-dot and non-path separator before our dot, so we should
        // have a good chance at having a non-empty extension
        preDotState = -1;
      }
    }

    if (startDot === -1 || end === -1 ||
    // We saw a non-dot character immediately before the dot
    preDotState === 0 ||
    // The (right-most) trimmed path component is exactly '..'
    preDotState === 1 && startDot === end - 1 && startDot === startPart + 1) {
      if (end !== -1) {
        if (startPart === 0 && isAbsolute) ret.base = ret.name = path.slice(1, end);else ret.base = ret.name = path.slice(startPart, end);
      }
    } else {
      if (startPart === 0 && isAbsolute) {
        ret.name = path.slice(1, startDot);
        ret.base = path.slice(1, end);
      } else {
        ret.name = path.slice(startPart, startDot);
        ret.base = path.slice(startPart, end);
      }
      ret.ext = path.slice(startDot, end);
    }

    if (startPart > 0) ret.dir = path.slice(0, startPart - 1);else if (isAbsolute) ret.dir = '/';

    return ret;
  },

  sep: '/',
  delimiter: ':',
  win32: null,
  posix: null
};

posix.posix = posix;

module.exports = posix;

}).call(this)}).call(this,require('_process'))
},{"_process":3}],3:[function(require,module,exports){
// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };

},{}],4:[function(require,module,exports){
module.exports=[
  {
    "id": "1",
    "dob": "27/12/1981",
    "Name": {
      "firstName": "Sahil",
      "lastName": "Dhawan",
      "middleName": ""
    },
    "Address": {
      "city": "faridabad",
      "state": "haryana",
      "zipCode": "121002",
      "streetAddress1": "1934",
      "streetAddress2": "Sec 28"
    }
  },
  {
    "id": "4",
    "dob": "30/03/1990",
    "Name": {
      "firstName": "Dharmender",
      "lastName": "Kaushik",
      "middleName": ""
    },
    "Address": {
      "city": "ballabgarh",
      "state": "haryana",
      "zipCode": "",
      "streetAddress1": "adarsh nagar gurgaon",
      "streetAddress2": ""
    }
  },
  {
    "id": "6",
    "dob": "01/09/1988",
    "Name": {
      "firstName": "Nikita",
      "lastName": "Bhati",
      "middleName": ""
    },
    "Address": {
      "city": "faridabad",
      "state": "haryana",
      "zipCode": "121001",
      "streetAddress1": "H.No.-1162",
      "streetAddress2": "sector 7C"
    }
  },
  {
    "id": "7",
    "dob": "10/10/1991",
    "Name": {
      "firstName": "Pradeep",
      "lastName": "Maithani",
      "middleName": ""
    },
    "Address": {
      "city": "faridabad",
      "state": "haryana",
      "zipCode": "121004",
      "streetAddress1": "House N0. 2663",
      "streetAddress2": "Housing Bord Noida colony Sector 3 "
    }
  },
  {
    "id": "9",
    "dob": "26/08/1991",
    "Name": {
      "firstName": "Rakesh",
      "lastName": "Kumar",
      "middleName": ""
    },
    "Address": {
      "city": "delhi",
      "state": "delhi",
      "zipCode": "110092",
      "streetAddress1": "HOUSE NO-J/10B",
      "streetAddress2": "SANTHA NIWAS, GALI NO-8, laxmi nagar"
    }
  },
  {
    "id": "10",
    "dob": "08/07/1989",
    "Name": {
      "firstName": "Sudhansu",
      "lastName": "Sekhar",
      "middleName": "Das"
    },
    "Address": {
      "city": "Noida",
      "state": "Uttar pardesh",
      "zipCode": "201303",
      "streetAddress1": "DD-6",
      "streetAddress2": "Gali No-2, Ambedkar Bihar,Sector-37"
    }
  },
  {
    "id": "11",
    "dob": "03/11/1989",
    "Name": {
      "firstName": "Sudhir",
      "lastName": "Nayak",
      "middleName": ""
    },
    "Address": {
      "city": "Noida",
      "state": "Uttar pardesh",
      "zipCode": "",
      "streetAddress1": "1934",
      "streetAddress2": "monu pg"
    }
  },
  {
    "id": "12",
    "dob": "15/02/1982",
    "Name": {
      "firstName": "Tarun",
      "lastName": "Bansal",
      "middleName": ""
    },
    "Address": {
      "city": "Noida",
      "state": "Uttar pardesh",
      "zipCode": "201301",
      "streetAddress1": "Flat # K 1105",
      "streetAddress2": "Prateek Laurel, Sector 120"
    }
  },
  {
    "id": "13",
    "dob": "10/10/1991",
    "Name": {
      "firstName": "Pradeep",
      "lastName": "Maithani",
      "middleName": ""
    },
    "Address": {
      "city": "faridabad",
      "state": "haryana",
      "zipCode": "121004",
      "streetAddress1": "House N0. 2663",
      "streetAddress2": "Housing Bord colony Sector 3"
    }
  },
  {
    "id": "15",
    "dob": "26/08/1995",
    "Name": {
      "firstName": "Rakesh",
      "lastName": "Kumar",
      "middleName": ""
    },
    "Address": {
      "city": "delhi",
      "state": "delhi",
      "zipCode": "110092",
      "streetAddress1": "HOUSE NO-J/10B",
      "streetAddress2": "SANTHA NIWAS, GALI NO-8, laxmi nagar"
    }
  },
  {
    "id": "16",
    "dob": "08/07/1989",
    "Name": {
      "firstName": "Sudhansu",
      "lastName": "Sekhar",
      "middleName": "Das"
    },
    "Address": {
      "city": "Noida",
      "state": "Uttar pardesh",
      "zipCode": "201303",
      "streetAddress1": "DD-6",
      "streetAddress2": "Gali No-2, Ambedkar Bihar,Sector-37"
    }
  },
  {
    "id": "17",
    "dob": "03/11/1989",
    "Name": {
      "firstName": "sudhir",
      "lastName": "sharma",
      "middleName": ""
    },
    "Address": {
      "city": "Noida",
      "state": "Uttar pardesh",
      "zipCode": "",
      "streetAddress1": "1856",
      "streetAddress2": "monu pg"
    }
  },
  {
    "id": "18",
    "dob": "15/02/1982",
    "Name": {
      "firstName": "Tarun",
      "lastName": "Bansal",
      "middleName": ""
    },
    "Address": {
      "city": "Gurgaon",
      "state": "Haryana",
      "zipCode": "121002",
      "streetAddress1": "Flat # K 1105",
      "streetAddress2": "Main Street, Sector 28"
    }
  }
]

},{}],5:[function(require,module,exports){
const people = require('./people.js');
const fs = require('fs');
const path = require('path');
const dataFile = require('./data.json');

class ReadFile{

    constructor(filePath){
        this.filePath = filePath;
        this.data = '';
        this.peopleInstance={};
    }

    storeAndPrintFile(){
        this.data = dataFile;
    
    }

    printFile(){
         this.peopleInstance = new people.People();
        for(let itr = 0; itr < this.data.length ; itr ++){
            this.peopleInstance.addNewPerson(this.data[itr]);
        }
        this.peopleInstance.sortArrayInfo();
        this.peopleInstance.printInfoOfPerson(this.peopleInstance.personArray);
    }

    filterCity(city){

        let cityArray = this.peopleInstance.personLivingInNoida(city);
    
        this.peopleInstance.printInfoOfPerson(cityArray);
     }

}

const value = document.getElementById('filterCity');
const more = document.getElementById('printAll');
value.addEventListener('click',callCity);
more.addEventListener('click',loadPerson);

function callCity(){
    let city = document.getElementById('city').value;
    fileInstance.filterCity(city);
}


function loadPerson(){
    fileInstance.peopleInstance.printInfoOfPerson(fileInstance.peopleInstance.personArray);
}


var fileInstance = new ReadFile('data.json');
fileInstance.storeAndPrintFile();
fileInstance.printFile();


},{"./data.json":4,"./people.js":6,"fs":1,"path":2}],6:[function(require,module,exports){
const person = require('./person.js');

class People{

    constructor(){
        this.personArray = [];
        this.ptr = 0;
    }

    addNewPerson(personObj){
        return this.personArray.push(new person.Person(personObj));
    }

    printInfoOfPerson(personArray){
        let info = '';
        let start = 0;
        let end = 5;
        if(personArray === this.personArray){
           end = this.ptr + 5;
        }
        for(let itr = start; itr < end && itr < personArray.length; itr ++){
            let personObj = personArray[itr];
            info += '<h3>' + 'Person ' + String(itr + 1) + '</h3>';
            info += 'Name : ' + String(personObj.name.firstName) + ' ' + String(personObj.name.middleName) + ' ' +String(personObj.name.lastName) + '<br>';
            //info += 'Age : ' + String(personObj.age) + '<br>';
            info += 'Address : ' + String(personObj.address.streetAddress1) + ' ' + String(personObj.address.streetAddress2)
                     + ' ' + String(personObj.address.city) + ' ' + String(personObj.address.state) + ' ' + String(personObj.address.zipCode) + '<br><br>';
        }
        document.getElementById('content').innerHTML = info;
        if(personArray === this.personArray) 
              this.ptr += 5;
        return '';
    }

    personBornAfter1990(){
        return this.personArray.filter(personObj =>(personObj.age <= new Date().getFullYear() - 1990));
    }

    personFirstNameStartsWithS(){
        return this.personArray.filter(personObj => (personObj.name.firstName.toLowerCase.charAt(0)) === 's');
    }

    personLivingInNoida(city){
        return this.personArray.filter(personObj => (personObj.address.city.toLowerCase() === city.toLowerCase()));
    }

    sortArrayInfo(){
        return this.personArray = this.personArray.sort((person1,person2) => {
            let firstName1 = person1.name.firstName.toLowerCase();
            let firstName2 = person2.name.firstName.toLowerCase();
            let lastName1 = person1.name.lastName.toLowerCase();
            let lastName2 = person2.name.lastName.toLowerCase();
            let city1 = person1.address.city.toLowerCase();
            let city2 = person2.address.city.toLowerCase();
            let zipCode1 = person1.address.zipCode;
            let zipCode2 = person2.address.zipCode;
            if(firstName1 !== firstName2)
               return (firstName1 > firstName2)?1:-1;
            if(lastName1 !== lastName2)
               return (lastName1 > lastName2)?1:-1;
            if(city1 !== city2)
               return (city1>city2)?1:-1;
            return (zipCode1 > zipCode2)?1:-1;
        });
    }
}

exports.People = People;
},{"./person.js":8}],7:[function(require,module,exports){
class Name{

    constructor(nameObj = {}){
        this.firstName = nameObj.firstName;
        this.lastName = nameObj.lastName;
        this.middleName = nameObj.middleName;
    }
}

class Address{

    constructor(addressObj = {}){
        this.streetAddress1 = addressObj.streetAddress1;
        this.streetAddress2 = addressObj.streetAddress2;
        this.city = addressObj.city;
        this.state = addressObj.state;
        this.zipCode = addressObj.zipCode;
    }
}

class DateOfBirth{

    static getYearFromShortDate(birthDate = ''){
        let birthArray = birthDate.split('/');
        return birthArray[2];
    }
}

exports.Name = Name;
exports.Address = Address;
exports.DateOfBirth = DateOfBirth;
},{}],8:[function(require,module,exports){
const attributes = require('./person-attributes.js')

class Person{

    constructor(personObj = {}){
        this.id = personObj.id;
        this.name = new attributes.Name(personObj.Name);
        this.address = new attributes.Address(personObj.Address);
        this.age = this.findAgeFromDob(personObj.dob);
    }

    findAgeFromDob(birthDate){
        let age = new Date().getFullYear() - attributes.DateOfBirth.getYearFromShortDate(birthDate);
        return age;
    }
}

exports.Person = Person;
},{"./person-attributes.js":7}]},{},[5]);
