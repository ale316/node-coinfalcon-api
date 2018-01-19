const Websocket = require('../index.js').Websocket

const coinfalcon = new Websocket()
coinfalcon.subscribe("TradesChannel", { market: "BTC-EUR" })
coinfalcon.on("TradesChannel:init", (s) => console.log(s))
coinfalcon.on("TradesChannel:update", (s) => console.log("UPDATE", s))