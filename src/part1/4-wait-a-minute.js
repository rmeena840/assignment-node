
export default function waitAMinute() {
	var startTime = new Date("2020-04-04T12:50:00Z");
	var endTime = new Date("2020-04-04T13:50:00Z");
	computePomodoro(startTime,endTime)
}

const computePomodoro = ( startTime, endTime ) => {
	var count = 1;
	while ( startTime <= endTime ) {
		setTimeout(() => {
			console.log("Start: Pomodoro " + count);
			console.log("==== 25 minutes passed ====")
			if(count%4 != 0) {
				if(startTime.getTime() + 5 * 60 * 1000 <= endTime) {
					setTimeout(() => {
						console.log("break " + count + " (Short break)")
						console.log("==== 5 minutes passed ====")
					}, startTime.getTime() + 5 * 60 * 1000);
				}
				
			} else {
				if(startTime.getTime() + 15 * 60 * 1000 <= endTime) {
					setTimeout(() => {
						console.log("break " + count + " (long break)")
						console.log("==== 15 minutes passed ====")
					}, startTime.getTime() + 15 * 60 * 1000);
				}
			}
			count++;
		}, startTime.getTime() + 25 * 60 * 1000)
	}
}