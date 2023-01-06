"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let QUOTES = require("../src/quotes.json");
describe("quotes.json", () => {
    test('check if quotes have desired formats', () => {
        QUOTES.forEach(function (item) {
            expect(typeof item.quote).toBe('string');
            expect(typeof item.title).toBe('string');
            expect(typeof item.type).toBe('string');
            expect(typeof item.year).toBe('number');
        });
    });
});
