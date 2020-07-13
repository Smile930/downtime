window.onload = function(){
	const span_hours = document.getElementById('hours')
	const span_minutes = document.getElementById('minutes')
	const span_seconds = document.getElementById('seconds')

	const date_end = new Date(2020,06,12,00,00,00)
	function interval(start , end){
		let dis = end - start 
		let seconds,minutes,hours
		if(dis == 0){
			hours = 0
			minutes = 0
			seconds = 0
		}else{
			// 将毫秒数转换为秒
			dis = dis / 1000
			seconds = parseInt(dis%60)
			minutes = parseInt(dis/60%60)
			hours = parseInt(dis/60/60)
		}

		return{
			hours:hours,
			minutes:minutes,
			seconds:seconds
		}
	}
	countdown()
	const timer1 = setInterval(countdown,1000)
	function countdown(){
		let date_start = new Date()
		let results = interval(date_start , date_end)
		if(results.hours == 0 && results.minutes == 0 && results.seconds == 0){
			clearInterval(timer1)
		}

		results.hours = results.hours < 10 ? '0' +　results.hours : results.hours
		results.minutes = results.minutes < 10 ? '0' + results.minutes : results.minutes
		results.seconds = results.seconds < 10 ? '0' + results.seconds : results.seconds



		span_hours.innerHTML = results.hours
		span_minutes.innerHTML = results.minutes
		span_seconds.innerHTML = results.seconds
	}
}