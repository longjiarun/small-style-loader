var utils = require('loader-utils'),
    assign = require('object-assign'),
    path = require('path')

module.exports = function(source) {

    this.cacheable && this.cacheable()
    var opts = utils.parseQuery(this.query) || {}

    opts = assign({
        insertAt: 'bottom'
    }, opts)

    opts.css = source

    return 'require(' + utils.stringifyRequest(this, '!' + path.join(__dirname, 'add.js')) + ')(' + JSON.stringify(opts) + ')'
}