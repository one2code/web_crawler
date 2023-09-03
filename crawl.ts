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
	url = url.replace(/\/$/, "");

	try {
		new URL(url);
	} catch (e) {
		throw new Error(`Invalid URL ${url}`);
	}

	return url;
}
