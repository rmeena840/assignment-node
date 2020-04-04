
export default function asynchronousDelay(delay, callback) {
	setTimeout( function() {callback(); }, delay);
}

