import { JSDOM } from "jsdom";
import { test, expect } from "@jest/globals";
import { normalizeUrl } from "./crawl";
import { getUrlsFromHTML } from "./crawl";

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

test("handle URL fragments", () => {
	expect(normalizeUrl("https://example.com/#section")).toBe(
		"https://example.com/#section"
	);
});

test("throw error for invalid URLs", () => {
	expect(() => normalizeUrl("not a url")).toThrow("Invalid URL");
});

test("handle subdomain", () => {
	expect(normalizeUrl("https://sub.example.com")).toBe(
		"https://sub.example.com"
	);
});
	test('extracts and normalizes URLs correctly from HTML', () => {
		const htmlBody = `<html><body><a href="/relative/url">Relative</a><a href="http://example.com/absolute/url">Absolute</a></body></html>`;
		const baseUrl = 'http://example.com';
		const expectedUrls = ['https://example.com/relative/url', 'https://example.com/absolute/url']; // Assuming how your normalizeUrl works
		const result = getUrlsFromHTML(htmlBody, baseUrl);
		expect(result).toEqual(expectedUrls);
	}); 
