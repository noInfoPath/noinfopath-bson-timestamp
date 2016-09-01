var mongo = require("mongodb"),
	NoBSONTimestamp = require("./index"),
	d = new Date(),
	timestamp = new mongo.Timestamp(0, d.valueOf()/1000);


var tsn = NoBSONTimestamp.toNumber(timestamp),
	ts = NoBSONTimestamp.fromNumber(tsn);

console.log(timestamp, ts);
