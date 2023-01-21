const pino = require("pino")({
	transport: {
	  target: 'pino-pretty'
	}
});

module.exports = {
	randomArrayItem(array) {
		if (array.constructor !== Array) throw new TypeError(`[randomArrayItem]: Expected an Array but got "${typeof array}"`);

		return array[Math.floor(Math.random() * array.length)];
	},

	spliceArray(array, index) {
		if (array.constructor !== Array) throw new TypeError(`[spliceArray]: Expected an Array but got "${typeof array}"`);
		// if (typeof index !== "number") throw new TypeError(`Expected a Number but got "${typeof number}"`);

		return array.splice(array.indexOf(index), 1);
	},

	randomNumber(number) {
		if (typeof number !== "number") throw new TypeError(`[randomNumber]: Expected a Number but got "${typeof number}"`);

		return Math.floor(Math.random() * number);
	},

	async wait(time) {
		if (typeof time !== "number") throw new TypeError(`[wait]: Expected a Number but got "${typeof time}"`);

		return new Promise(resolve => setTimeout(resolve, time));
	},

	fetchURLs(string) {
		if (typeof string !== "string") throw new TypeError(`[fetchURLs]: Expected a String but got "${typeof string}"`);
		const urlStrings = string.match(/((https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9]\.[^\s]{2,}))/gi);

		const urls = urlStrings.map(url => {
			const cleanUrl = url.replace(/[^a-zA-Z0-9:/?=&.]/g, "");

			return {
				url: cleanUrl,
				host: this.fetchHostUrl(cleanUrl)
			};
		});

		return urls;
	},

	fetchHostUrl(url) {
		if (typeof url !== "string") throw new TypeError(`[fetchHostUrl]: Expected a String but got "${typeof url}"`);

		let uRegex = url != null ? url.match(/:\/\/([0-9]?\.)?(.[^/:]+)/i) : null;
		return uRegex != null && uRegex.length > 2 && typeof uRegex[2] === "string" && uRegex[2].length > 0 ? uRegex[2] : null;
	},

	fetchRootUrl(url) {
		if (typeof url !== "string") throw new TypeError(`[fetchRootUrl]: Expected a String but got "${typeof url}"`);

		let host = this.fetchHostUrl(url);
		let uParts = host.split(".").reverse();
		return host != null && uParts.length > 1 ? host = uParts[1] + "." + uParts[0] : host;
	},

	owoify(text, probability = 0.75) {
		if (typeof text !== "string") throw new TypeError(`[owoify]: Expected a String but got "${typeof text}"`);
		const faces = ["OwO", "UwU", ">w<", "^w^", ">w<", "^w^", "YwY", "AwA"]

		let newString = "";
		for (let i = 0; i < text.length; i++) {
			if (Math.random() < probability) {
				newString += text[i] === "l" || text[i] === "r" ? "w" : text[i];
			} else {
				newString += text[i];
			}
		}
		return newString.replaceAll(/!k+/g, faces[Math.floor(Math.random() * faces.length)]);
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
	},

	convertToMs(time) {
		var ms = 0;
		var duration = time.split(" ");
		for (var time of duration) {
			var number = parseInt(time);
			var unit = time.replace(number, "");
			switch (unit) {
			case "s":
				ms += number * 1000;
				break;
			case "m":
				ms += number * 60000;
				break;
			case "h":
				ms += number * 3600000;
				break;
			case "d":
				ms += number * 86400000;
				break;
			case "w":
				ms += number * 604800000;
				break;
			case "y":
				ms += number * 31536000000;
				break;
			}
		}
		return Math.fround((Date.now() + ms) / 1000);
	}
};