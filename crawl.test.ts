import { test, expect } from "@jest/globals";
import { normalizeUrl } from "./crawl";

test("remove trailing slash from url", () => {
	expect(normalizeUrl("https://example.com/")).toBe("https://example.com");
});

test("convert http to https", () => {
	expect(normalizeUrl("http://example.com")).toBe("https://example.com");
});

test("handle mixed cases", () => {
	expect(normalizeUrl("https://eXaMPle.com")).toBe("https://example.com");
});

test("handle query parameters", () => {
	expect(normalizeUrl("https://example.com/?key=value")).toBe(
		"https://example.com/?key=value"
	);
});

test("handle no protocol", () => {
	expect(normalizeUrl("example.com")).toBe("https://example.com");
});

test('handle URL fragments', () => {
    expect(normalizeUrl("https://example.com/#section")).toBe("https://example.com/#section");
})

test('throw error for invalid URLs', () => {
    expect(normalizeUrl("not a url")).toThrow("Invalid URL");
})

