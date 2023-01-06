"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const quotes_json_1 = __importDefault(require("./quotes.json"));
function getRandomNumber() {
    return Math.floor(Math.random() * quotes_json_1.default.length);
}
function sortByYear(a, b) {
    if (a.year > b.year) {
        return 1;
    }
    else if (b.year > a.year) {
        return -1;
    }
    else {
        return 0;
    }
}
function getQuoteByYear(startYear, endYear) {
    return quotes_json_1.default
        .filter(quote => quote.year >= startYear && quote.year <= endYear)
        .sort(sortByYear);
}
function getRandomQuote() {
    const randomNumber = getRandomNumber();
    return quotes_json_1.default[randomNumber].quote;
}
function getSomeRandom(count = 1) {
    const randomQuotesArray = [];
    const randomQuotesSet = new Set();
    while (randomQuotesArray.length < count) {
        const quote = quotes_json_1.default[getRandomNumber()];
        if (randomQuotesSet && !randomQuotesSet.has(quote)) {
            randomQuotesArray.push(quote);
        }
    }
    return randomQuotesArray;
}
function getQuotesByObject(quote, quoteProperty) {
    const resultArray = [];
    quotes_json_1.default.forEach((singleQuote) => {
        if (singleQuote[quoteProperty]) {
            if (singleQuote[quoteProperty].toLowerCase().includes(quote.toLowerCase())) {
                resultArray.push(singleQuote);
            }
        }
    });
    return resultArray;
}
function getQuotesByMovie(movieName) {
    return getQuotesByObject(movieName, "title");
}
function getQuotesByType(movieType) {
    return getQuotesByObject(movieType, "type");
}
function getAll() {
    return quotes_json_1.default;
}
module.exports = {
    getAll,
    getRandomQuote,
    getSomeRandom,
    getQuoteByYear,
    getQuotesByMovie,
    getQuotesByType
};
