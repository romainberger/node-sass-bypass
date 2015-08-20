import assert from 'assert'

describe('node-sass-bypass', function() {
    it('should work', function(done) {
        require('./')()

        try {
            var css = require('./test.css'),
                scss = require('./test.scss')
            done()
        }
        catch (err) {
            throw err
        }
    })
})
