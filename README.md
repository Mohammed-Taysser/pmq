# `tube-info`

A simple NPM package to get popular movie quotes.

## Features

- Zero dependencies
- JavaScript code linting is done using [`eslint`](https://www.npmjs.com/package/eslint)
- Delightful JavaScript Testing using [`jest`](https://www.npmjs.com/package/jest)
- Has [`.editorconfig`](https://editorconfig.org/) which helps developers define and maintain consistent coding styles between different editors and IDEs.

## Installation

```shell
npm i pmq
# Or
Yarn add pmq
```

## Usage 🚀

### `getAll()`

returns an array of objects, each containing **quote** and **movie**.

```json
...
{
  "quote": "Frankly, my dear, I don't give a damn.",
  "movie": "Gone with the Wind",
  "type": "movie",
  "year": 1939
}
...
```

### `getQuoteByYear(startYear, endYear)`

returns a sorted object within the range of year **startYear** - **endYear**

```json
[
  {
    "quote": "Frankly, my dear, I don't give a damn.",
    "movie": "Gone with the Wind",
    "type": "movie",
    "year": startYear
  }
  ....
  ....
  {
    "quote": "Frankly, my dear, I don't give a damn.",
    "movie": "Gone with the Wind",
    "type": "movie",
    "year": endYear
  }
]
```

### `getSomeRandom(count)`

returns an array (of length 'count') of non-duplicate random objects containing **quote** and **movie**.

```json
[
  {
    "quote": "Frankly, my dear, I don't give a damn.",
    "movie": "Gone with the Wind",
    "type": "movie",
    "year": 1939
  }
  // with 'count' number of quote objects.
]
```

### `getRandomQuote()`

returns a random movie quote

```txt
I used to think that my life was a tragedy. But now I realize, it's a comedy.
```

### `getQuotesByMovie("MovieName")`

returns an array with all quotes of MovieName movie, else returns empty.

```json
[
  {
    "quote": "Frankly, my dear, I don't give a damn.",
    "movie": "Gone with the Wind",
    "type": "movie",
    "year": 1939
  }
]
```

### `getQuotesByType(type)`

returns an array with all quotes of type `movie` | `anime` | `tv`, else returns empty.

```json
[
  {
    "quote": "Frankly, my dear, I don't give a damn.",
    "movie": "Gone with the Wind",
    "type": "movie",
    "year": 1939
  }
  ....
  ....
  {
    "quote": "You all love twisting the knife into one another.",
    "movie": "Knives Out",
    "type": "movie",
    "year": 2019
  }
]
```

### Playground

```js
const pmq = require("pmq");

console.log(pmq.getAll()); //returns an object with all available quotes.

console.log(pmq.getSomeRandom(10)); // returns an object of 10 random quotes.

console.log(pmq.getRandomQuote()); // returns a random quote

console.log(pmq.getQuoteByYear(2000, 2019)); // returns a sorted object within the range of year 2000-2019

console.log(pmq.getQuotesByMovie("Joker")); //If present returns and array with all quotes of joker movie, else returns empty.

console.log(pmq.getQuotesByType("anime")); //If present returns and array with all quotes of type anime, else returns empty.
```

## Development 🚀

### Testing

Check if quote is duplicate/already present.

All tests are written in [`Jest`](https://jestjs.io/) and they are located in the `__tests__` folder. To run all tests:

```bash
npm test
```

### Available scripts

- `start` : start the app in development mode
- `lint` : lint app codebase using [`typescript-eslint`](https://typescript-eslint.io/)
- `build` : create minified JS file
- `test` : start testing using [`Jest`](https://jestjs.io/)

## Related Work 🌠

- [`tube-cli`](https://github.com/mohammed-Taysser/tube-cli) - A package for downloading youtube videos & playlists
- [`tube-info`](https://github.com/mohammed-Taysser/tube-info) - A package for getting youtube videos & playlists info

## Contribution 🤝

1. Fork it!
2. Create your feature branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -am 'Some commit message'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request 😉😉

## License 📜

MIT © [`Mohammed Taysser`](https://github.com/mohammed-Taysser/)
