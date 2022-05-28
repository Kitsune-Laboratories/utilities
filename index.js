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

module.exports = { randomArrayItem, randomNumber, wait, spliceArray };