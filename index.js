const pino = require("pino")({
	transport: {
	  target: 'pino-pretty'
	}
});

module.exports = {
	randomArrayItem(array) {
		if (array.constructor !== Array) throw new TypeError(`Expected an Array but got "${typeof array}"`);

		return array[Math.floor(Math.random() * array.length)];
	},

	spliceArray(array, index) {
		if (array.constructor !== Array) throw new TypeError(`Expected an Array but got "${typeof array}"`);
		// if (typeof index !== "number") throw new TypeError(`Expected a Number but got "${typeof number}"`);

		return array.splice(array.indexOf(index), 1);
	},

	randomNumber(number) {
		if (typeof number !== "number") throw new TypeError(`Expected a Number but got "${typeof number}"`);

		return Math.floor(Math.random() * number);
	},

	async wait(time) {
		if (typeof time !== "number") throw new TypeError(`Expected a Number but got "${typeof time}"`);

		return new Promise(resolve => setTimeout(resolve, time));
	},

	fetchHostUrl(url) {
		if (typeof url !== "string") throw new TypeError(`[fetchHostUrl]: Expected a String but got "${typeof url}"`);

		let uRegex = url != null ? url.match(/:\/\/([0-9]?\.)?(.[^/:]+)/i) : null;
		return uRegex != null && uRegex.length > 2 && typeof uRegex[2] === "string" && uRegex[2].length > 0 ? uRegex[2] : null;
	},

	fetchRootUrl(url) {
		if (typeof url !== "string") throw new TypeError(`Expected a String but got "${typeof url}"`);

		let host = this.fetchHostUrl(url);
		let uParts = host.split(".").reverse();
		return host != null && uParts.length > 1 ? host = uParts[1] + "." + uParts[0] : host;
	},

	owoify(text) {
		if (typeof text !== "string") throw new TypeError(`Expected a String but got "${typeof text}"`);

		return text.replaceAll(/(?:l)/g, "w")
			.replaceAll(/(?:L)/g, "W")
			.replaceAll(/!k+/g, ` ${this.randomArrayItem(["OwO", "UwU", ">w<", "^w^", ">w<", "^w^", "YwY", "AwA"])}`)
			.replaceAll("u", "wu")
			.replaceAll("U", "Wu")
			.replaceAll("o", "w")
			.replaceAll("O", "W");
	},

	_insertString(firstString, index, string) {
		if (index > 0) return firstString.substring(0, index) + string + firstString.substr(index);
		return string + firstString;
	},

	print(...args) {
		pino.info(args[1] ? args : args[0]);
	},

	warn(...args) {
		pino.warn(args[1] ? args : args[0]);
	},

	error(...args) {
		pino.error(args[1] ? args : args[0]);
	},

	debug(...args) {
		pino.debug(args[1] ? args : args[0]);
	},

	fatal(...args) {
		pino.fatal(args[1] ? args : args[0]);
	},

	getLogger() {
		return pino;
	}
};