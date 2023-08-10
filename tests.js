const {Stampy} = require('./Stampy')
const stampy = new Stampy()

function test(fun, output) {
	if (fun === output) {
		console.log('Pass');
	} else {
		console.log('Fail');
	}
}

test(
	stampy.use('2000-5-2').isBefore('2001-1-6'), true
)

test(
	stampy.use('Thu, 10 Aug 2023 19:35:55 GMT').timestamp, 1691696155000
)

test(
	stampy.use(1691696155340).UTC, 'Thu, 10 Aug 2023 19:35:55 GMT'
)

test(
	stampy.use(1691696155340).minus('day', 8).timestamp, 1691004955340
)

test(
	stampy.use('now').plus('year', 1).isBefore('now'), false
)