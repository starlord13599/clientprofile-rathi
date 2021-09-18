class LocalStorage {
	parse(value) {
		return JSON.parse(value);
	}

	stringyfy(value) {
		return JSON.stringify(value);
	}

	setItem(key, value) {
		localStorage.setItem(key, this.stringyfy(value));
		return this;
	}

	getItem(key) {
		let data = localStorage.getItem(key);
		return this.parse(data);
	}

	removeItem(key) {
		localStorage.removeItem(key);
		return this;
	}

	removeAllItems() {
		localStorage.clear();
		return this;
	}
}

export default new LocalStorage();
