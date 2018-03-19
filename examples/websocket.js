const Websocket = require('../index.js').Websocket

const coinfalcon = new Websocket()
coinfalcon.subscribe("OrderbookChannel", { market: "REF-BTC" })
coinfalcon.on("OrderbookChannel:connected", (s) => console.log(s))
coinfalcon.on("OrderbookChannel:init", (s) => console.log(s))
coinfalcon.on("OrderbookChannel:update", (s) => console.log("UPDATE", s))