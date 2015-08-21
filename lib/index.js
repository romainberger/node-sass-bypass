'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
var installed = false;

function bypass(module, filename) {
  module._compile('', filename);
}

exports['default'] = function () {
  if (installed) {
    return;
  }

  require.extensions['.scss'] = bypass;
  require.extensions['.css'] = bypass;

  installed = true;
};

module.exports = exports['default'];