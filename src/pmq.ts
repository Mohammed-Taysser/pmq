import QUOTES from './quotes.json'

export type Quote = {
	"quote": string,
	"title": string,
	"type": string,
	"year": number
}

//  helpers

/**
 * return number from 0 to QUOTES number
 */
function getRandomNumber(): number {
	return Math.floor(Math.random() * QUOTES.length);
}

/**
 * sort quotes by year
 * @param {Quote} a first quote
 * @param {Quote} b second quote
 * @returns {Number} compare result
 */
function sortByYear(a: Quote, b: Quote): number {
	if (a.year > b.year) {
		return 1
	} else if (b.year > a.year) {
		return -1
	} else {
		return 0
	}
}

// main functions

/**
 * returns a sorted object within the range of year startYear - endYear
 * @example
 * console.log(movieQuote.getQuoteByYear(2000, 2019));
 * @param {Number} startYear 
 * @param {Number} endYear 
 * @returns {Array<Quote>}
 */
function getQuoteByYear(startYear: number, endYear: number): Quote[] {
	return QUOTES
		.filter(quote => quote.year >= startYear && quote.year <= endYear)
		.sort(sortByYear);
}

/**
 * returns a random movie quote
 * @example
 * console.log(movieQuote.getRandomQuote());
 * @returns {string}
 */
function getRandomQuote(): string {
	const randomNumber = getRandomNumber();
	return QUOTES[randomNumber].quote;
}


/**
 * returns an array (of length 'count') of non-duplicate random objects containing quote and movie.
 * @example
 * console.log(movieQuote.getSomeRandom(10));
 * @param count 
 * @returns {Array<Quote>}
 */
function getSomeRandom(count = 1): Quote[] {
	const randomQuotesArray = [];
	const randomQuotesSet = new Set(); // to prevent duplicate quotes
	while (randomQuotesArray.length < count) {
		const quote = QUOTES[getRandomNumber()];
		if (randomQuotesSet && !randomQuotesSet.has(quote)) {
			randomQuotesArray.push(quote);
		}
	}
	return randomQuotesArray;
}

function getQuotesByObject(quote: string, quoteProperty: 'title' | 'type'): Quote[] {
	const resultArray: Quote[] = [];
	QUOTES.forEach((singleQuote: Quote): void => {
		if (singleQuote[quoteProperty]) {
			if (singleQuote[quoteProperty].toLowerCase().includes(quote.toLowerCase())) {
				resultArray.push(singleQuote);
			}
		}
	});

	return resultArray;

}

/**
 * returns an array with all quotes of MovieName movie, else returns empty.
 * @param quote 
 * @example
 * console.log(movieQuote.getQuotesByMovie("Joker")); 
 * @returns 
 */
function getQuotesByMovie(movieName: string): Quote[] {
	return getQuotesByObject(movieName, "title");
}

/**
 *  returns an array with all quotes of type movie/anime/tv, else returns empty.
 * @example 
 * console.log(movieQuote.getQuotesByType("anime"));
 * @param quote 
 * @returns 
 */
function getQuotesByType(movieType: string): Quote[] {
	return getQuotesByObject(movieType, "type");
}

/**
 * returns an array of objects, each containing quote and movie.
 * @example 
 * console.log(movieQuote.getAll());
 * @returns 
 */
function getAll(): Quote[] {
	return QUOTES;
}

module.exports = {
	getAll,
	getRandomQuote,
	getSomeRandom,
	getQuoteByYear,
	getQuotesByMovie,
	getQuotesByType
};
