import { test, expect } from '@jest/globals';
import {normalizeUrl} from './crawl'


test('normalizeUrl should remove trailing slash', () => {
    const url = 'https://www.example.com/';
    expect(normalizeUrl(url)).toBe('https://www.example.com');
});

test('normalizeUrl should return the same url for https and http', () => {
    const http = 'http://www.example.com';
    expect(normalizeUrl(http)).toBe('https://www.example.com');
})
