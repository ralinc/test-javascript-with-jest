# Instructions

* [Install yarn](https://yarnpkg.com/lang/en/docs/install)

* Install jest: `yarn add jest --dev`

* Create `sum.js`:

```
module.exports = sum

function sum(a, b) {
  return a + b
}
```

* Create `sum.test.js`:

```
const sum = require('./sum')

test('sums two numbers', () => {
  expect(sum(1, 2)).toBe(3)
})
```

* Use jest for running tests. Add to `package.json`:

```
"scripts": {"test": "jest"}
```

* Run the tests: `yarn test`

* Run the tests in watch mode: `yarn test --watch -o .`
    * break the test
    * fix the test
    * show usage
    * quit

* Run the tests with code coverage: `yarn test --coverage`

* Copy the repo files

* Create a test for `substract.js`

* Complete all `todo`s
