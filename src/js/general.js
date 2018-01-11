function isIn(arr, item) {
	return arr.find(el => {
		return el == item
	})
}

function rmFrom(arr, item) {
	arr.splice(arr.findIndex(el => {
		return el == item
	}), 1)
}
