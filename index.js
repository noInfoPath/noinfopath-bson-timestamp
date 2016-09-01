var NoBSONTimestamp = {
	toNumber: function (ts) {
			//The MongoDb (BSON) Timestamp object stores the Unix epoc data as seconds not milliseconds, so we need
			//to multiple the high bits by 1000 to account for this.
		var ti = (ts.getHighBits() * 1000),
			//Next use the converted time index to create a JavaScript Date object. Not that we are not
			//concerned with the milliseconds at this stage.
			dt = new Date(ti),
			//Next create a new date, but this time with a the milliseconds provided via the low bits of the
			//Timestamp object.
			nd = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate(), dt.getHours(), dt.getMinutes(), dt.getSeconds(), ts.getLowBits()),
			//Finally, use the value of the new date as our return value.
			dv = nd.valueOf();

		return dv;

	},
	fromNumber: function(n){
			//Make a JavaScript Date object from the provided number. The number is expected to have been,
			//created by calling Date object's valueOf method.
		var dt = new Date(n),
			//Next create a new date from the original date, including the milliseconds.
			nd = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate(), dt.getHours(), dt.getMinutes(), dt.getSeconds(), dt.getMilliseconds()),
			//Then create a new date object that excludes the milliseconds.
			nd2 = new Date(nd.getFullYear(), nd.getMonth(), nd.getDate(), nd.getHours(), nd.getMinutes(), nd.getSeconds()),
			//Now we need to account for the fact the BSON Timestamp wants the time index to be in seconds,
			//so we need to divide by 1000.
			ti = nd2.valueOf() / 1000,
			//Create a BSON Timestamp using the converted time index and the milliseconds from original date object.
			ts2 = new mongo.Timestamp(nd.getMilliseconds(), ti);

		return ts2;
	}
};

module.exports = NoBSONTimestamp;