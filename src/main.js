class Log {

	constructor(message) {
		this.message = message;
	}

	dump() {
		console.log(this.message);
		console.log('heps');
	}

}

let log = new Log('my log message');
log.dump();