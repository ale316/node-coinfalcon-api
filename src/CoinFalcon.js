const Cable = require("es6-actioncable").default;

class CoinFalcon {
    /**
     * @param {Object} opts
     * @param {string} opts.key
     * @param {string} opts.secret
     */
    constructor(opts) {
        this.key = opts.key;
        this.secret = opts.secret;
    }
}

module.exports = CoinFalcon;
