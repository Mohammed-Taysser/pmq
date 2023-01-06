let QUOTES = require("../src/quotes.json");
import { Quote } from "../src/pmq";


describe("quotes.json", () => {
	test('check if quotes have desired formats', () => {
		QUOTES.forEach(function (item: Quote) {
			expect(typeof item.quote).toBe('string');
			expect(typeof item.title).toBe('string');
			expect(typeof item.type).toBe('string');
			expect(typeof item.year).toBe('number');
		});
	});
});
