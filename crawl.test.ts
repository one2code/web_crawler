import { test, expect } from "@jest/globals";
import { normalizeUrl } from "./crawl";

test("remove trailing slash from url", () => {
	expect(normalizeUrl("https://example.com/")).toBe("https://example.com");
});

test("convert http to https", () => {
	expect(normalizeUrl("http://example.com")).toBe("https://example.com");
});

test("handles mixed cases", () => {
	expect(normalizeUrl("http://eXaMPle.com")).toBe("http://example.com");
});
