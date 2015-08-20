# Node Sass Bypass

Bypass your css and scss imports so you can use a css/scss loader with webpack and keep your isomorphic code working server side.

# Installation

    $ npm install --save node-sass-bypass

# Usage

    import scssBypass from 'node-sass-bypass'
    scssBypass()
    // any file imported after that can import css/scss file without error
