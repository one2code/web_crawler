import { JSDOM } from "jsdom";
beforeAll(async () => {
	const dom = await JSDOM.fromURL('https://boot.dev');
	dom.window.document.querySelectorAll("a");
});


export function normalizeUrl(url: string): string {
	if (!url || typeof url !== "string" || url.length < 5) {
		throw new Error(`Invalid URL ${url}`);
	}

	if (!url.startsWith("http://") && !url.startsWith("https://")) {
		url = "https://" + url;
	}

	if (url.startsWith("http://")) {
		url = url.replace("http://", "https://");
	}

	url = url.toLowerCase();
	url = url.replace(/\/+$/, "");

	try {
		new URL(url);
	} catch (e) {
		throw new Error(`Invalid URL ${url}`);
	}

	return url;
}

export function getUrlsFromHTML(htmlBody: string, baseUrl: string): string[] {
	const dom = new JSDOM(htmlBody);
	const urls: string[] = [];
	dom.window.document.querySelectorAll("a").forEach((a) => {
		const href = a.getAttribute("href");
		if (href) {
			urls.push(normalizeUrl(new URL(href, baseUrl).toString()));
		}
	});
	return urls;
}