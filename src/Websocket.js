const Cable = require("es6-actioncable").default;
const w3cwebsocket = require('websocket').w3cwebsocket;

class Websocket {
    /**
     * @param {Object} opts
     * @param {String} opts.key
     * @param {String} opts.secret
     */
    constructor(opts) {
        this.key = opts.key;
        this.secret = opts.secret;
    }

    /**
     * @param {}
     */
}

module.exports = Websocket;
