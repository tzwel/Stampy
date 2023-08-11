class Stampy {

	constructor() {
		this.value = Date.now()
	}
	
	use(v) {
		v = convertToTimestamp(v)
		this.value = v;


		return this;
	}

	minus(v, times = 1) {
		if (units[v]) {
			this.value-= units[v] * times
		} else {
			this.value-= Number(v)
		}
		return this;
	}

	plus(v, times = 1) {
		if (units[v]) {
			this.value+= units[v] * times
		} else {
			this.value+= Number(v)
		}
		return this;
	}

	since(v) {
		this.value = Math.abs(Date.now() - new Date(v).valueOf())
	  	return this;
	}

	isPast(v, times = 1) {
		v = convertToTimestamp(v)

		let isPast = false

		if (units[v]) {
			isPast = this.value > units[v]*times
		} else if (this.value > v){
			isPast = true
		}

		return isPast
	}

	isBefore(v) {
		v = convertToTimestamp(v)
		let isBefore = false
		if (units[v]) {
			isBefore = this.value < units[v]*times
		} else if (this.value < v){
			isBefore = true
		}
		return isBefore
	}

	relativeTo(v = Date.now()) {
		v = convertToTimestamp(v)
		let elapsed = v - this.value;

		const sign = Math.sign(elapsed)

		if (elapsed === 0) {
			return 'Now'
		}

		if (sign > 0) {
			   if (elapsed < units.minute) {
					return Math.round(elapsed/1000) + ' seconds ago';   
			   }
	   
			   else if (elapsed < units.hour) {
				return `${Math.round(elapsed/units.minute)} ${elapsed/units.minute === 1 ? 'minute ago' : 'minutes ago'}`
			   }
	   
			   else if (elapsed < units.day ) {
				return `${Math.round(elapsed/units.hour)} ${elapsed/units.hour === 1 ? 'hour ago' : 'hours ago'}`
			   }
	   
			   else if (elapsed < units.month) {
				return `${Math.round(elapsed/units.day)} ${elapsed/units.day === 1 ? 'day ago' : 'days ago'}`
			   }
	   
			   else if (elapsed < units.year) {
			   	return `${Math.round(elapsed/units.month)} ${elapsed/units.month === 1 ? 'month ago' : 'months ago'}`
			   }
	   
			   else {
			   	return `${Math.round(elapsed/units.year)} ${elapsed/units.year === 1 ? 'year ago' : 'years ago'}`;   
			   }
		} else {
			elapsed = this.value - v



			 if (elapsed < units.minute) {
				return `In ${Math.round(elapsed/1000)} ${elapsed/1000 === 1 ? 'second' : 'seconds'}`;   
		   }
   
		   else if (elapsed < units.hour) {
			return `In ${Math.round(elapsed/units.minute)} ${elapsed/units.minute === 1 ? 'minute' : 'minutes'}`
		   }
   
		   else if (elapsed < units.day ) {
			return `In ${Math.round(elapsed/units.hour)} ${elapsed/units.hour === 1 ? 'hour' : 'hours'}`
		   }
   
		   else if (elapsed < units.month) {
			return `In ${Math.round(elapsed/units.day)} ${elapsed/units.day === 1 ? 'day' : 'days'}`
		   }
   
		   else if (elapsed < units.year) {
			   return `In ${Math.round(elapsed/units.month)} ${elapsed/units.month === 1 ? 'month' : 'months'}`
		   }
   
		   else {
			   return `In ${Math.round(elapsed/units.year)} ${elapsed/units.year === 1 ? 'year' : 'years'}`;   
		   }
		}


	}


	get timestamp() {
		return new Date(this.value).valueOf()
	}

	get ISO() {
		return new Date(this.value).toISOString()
	}

	get UTC() {
		return new Date(this.value).toUTCString()
	}

	get string() {
		return new Date(this.value).toString()
	}

	get hour() {
		return new Date(this.value).getHours()
	}
	
	get now() {
		return Date.now()
	}

	get toNow() {
		this.value = Math.abs(Date.now() - new Date(this.value).valueOf())
		return this.value;
	}

	

}

const units = {
	'second': 1000,
	'minute': 60 * 1000 ,
	'hour': 60 * 60 * 1000,
	'day': 24 * 60 * 60 * 1000,
	'week': 7 * 24 * 60 * 60 * 1000,
	'month': 365 / 12 * 24 * 60 * 60 * 1000,
	'year': 365 * 24 * 60 * 60 * 1000,
}



function convertToTimestamp(input) {
	const isDate = input instanceof Date

	if (units[input]) {
		return input
	}

	if (!isDate) {
		switch (input) {
			case 'now':
				return Date.now()
	
			default:
				return new Date(input).valueOf();
		}
	
	} else {
		return input.valueOf()
	}
}

module.exports = {Stampy}