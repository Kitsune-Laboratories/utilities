function randomArrayItem(array) {
	return array[Math.floor(Math.random() * array.length)];
}

function spliceArray(Array, index) {
	return Array.splice(Array.indexOf(index), 1);
}

function randomNumber(number) {
	return Math.floor(Math.random() * number);
}

async function wait(time) {
	return new Promise(resolve => setTimeout(resolve, time));
}

function fetchHostUrl(url) {
	let uRegex = url != null ? url.match(/:\/\/([0-9]?\.)?(.[^/:]+)/i) : null;
	return uRegex != null && uRegex.length > 2 && typeof uRegex[2] === "string" && uRegex[2].length > 0 ? uRegex[2] : null;
}

function fetchRootUrl(url) {
	let host = fetchHostUrl(url);
	let uParts = host.split(".").reverse();
	return host != null && uParts.length > 1 ? host = uParts[1] + "." + uParts[0] : host;
}

module.exports = {
	randomArrayItem,
	randomNumber,
	wait,
	spliceArray,
	fetchRootUrl,
	fetchHostUrl
};