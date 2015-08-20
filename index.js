var installed = false

function bypass(module, filename) {
  module._compile('', filename)
}

export default function () {
  if (installed) {
    return
  }

  require.extensions['.scss'] = bypass
  require.extensions['.css'] = bypass

  installed = true
}
