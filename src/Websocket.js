const Cable = require("es6-actioncable").default;
const w3cwebsocket = require("websocket").w3cwebsocket;
const EventEmitter = require("events");

class Websocket extends EventEmitter {
    constructor() {
        super();

        this.WS_URL = "wss://ws.coinfalcon.com";
        this.WS_ORIGIN = "https://coinfalcon.com";
        this.consumer = this._initConsumer(this.WS_URL, this.WS_ORIGIN);

        // methods binding
        this.subscribe = this.subscribe.bind(this);
    }

    /* Private Methods */

    /**
     * @param {String} url
     * @param {String} origin
     */
    _initConsumer(url, origin) {
        return Cable.createConsumer(url, {
            createWebsocket: options => {
                return new w3cwebsocket(
                    url,
                    options.protocols,
                    origin,
                    options.headers,
                    options.extraRequestOptions
                );
            }
        });
    }

    /**
     * @param {String} channel
     * @param {Object} payload [optional]
     */
    _normalize(channel, payload = {}) {
        return { evt: "test", data: payload };
    }

    /* Public Methods */

    /**
     * @param {String} channel
     * @param {Object} opts [optional]
     */
    subscribe(channel, opts = {}) {
        const options = Object.assign({}, { channel: channel }, opts);
        this.consumer.subscriptions.create(options, {
            connected: () => {
                this.emit(`${channel}:connected`);
            },
            received: payload => {
                const { evt, data } = this._normalize(channel, payload);
                this.emit(`${channel}:${evt}`, data);
            }
        });
    }
}

module.exports = Websocket;
