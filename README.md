# Stampy
Your silly dateTime companion

<p align="center"> <img src="./logo.png" width="auto" height="200px" alt="WSD logo" /> </p>

> [!WARNING]  
> Stampy is in early development stage. Its code base is messy and it's likely full of bugs. I will still use it in production nonetheless.

## Usage
```js
const { Stampy } = require('./Stampy')
const stampy = new Stampy()
```

## Examples

### Convert time
```js
stampy.use('Thu, 10 Aug 2023 19:35:55 GMT').timestamp
// Returns: 1691696155000

stampy.use(1691696155340).UTC
// Returns: 'Thu, 10 Aug 2023 19:35:55 GMT'
```

### Operations on time
*Don't forget to specify the output format. E.g. `.timestamp`*
```js
stampy.use('now').plus('year', 2) // Add 2 years
stampy.use(1691696155340).minus('day', 8) // Subtract 8 days
```

### Relative time
```js
stampy.use('now').plus('year', 2).relativeTo('now')
// Returns: 'In 2 years'

// The above can also be written like this.
// Stampy's default time and `relativeTo` default time is always `now`.
stampy.plus('year', 2).relativeTo()
// Returns: 'In 2 years'

stampy.use(1692992984679).relativeTo(1692128949174)
// Returns: 'In 10 days'
```

### Date order
```js
stampy.use('2000-5-2').isBefore('2001-1-6')
// Returns: true

stampy.use('now').plus('year', 1).isBefore('now')
// Returns: false
```


### Milliseconds since time until now
```js
stampy.use('2000-5-2').toNow
// Returns: 734478844102
```