class Flash {
	flashMesssages = {};

	getFlash() {
		if (this.flashMesssages.message) {
			let { message, severity = 'info' } = this.flashMesssages;
			delete this.flashMesssages.message;
			delete this.flashMesssages.severity;
			return { message, severity };
		}
		return { message: null, severity: null };
	}

	setFlash(message, severity) {
		if (!this.flashMesssages.message) {
			this.flashMesssages.message = message;
			this.flashMesssages.severity = severity;
		}

		return this;
	}
}
export default new Flash();
