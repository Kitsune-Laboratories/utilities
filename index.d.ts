import pino from "pino";
declare module "@kitsune-softworks/utilities";

/**
 * @param time in milliseconds
 */
export function wait(time: number): Promise < void > ;

/**
 * Extracts all valid URLs from a given string and returns them as an array of strings.
 *
 * @param {string} string - The input string to search for URLs.
 * @returns {Array<string>} An array of strings containing all valid URLs found in the input string.
 * @example
 * const urls = fetchURLs("Check out https://example.com! And also https://example.com/dashboard/home?test=4t42t4.");
 * console.log(urls);
 * // [
 * //  {
 * //    url: "https://example.com",
 * //    host: "example.com"
 * //  },
 * //  {
 * //    url: "https://example.com/dashboard/home?test=4t42t4",
 * //    host: "example.com"
 * //  }
 * // ]
 */
export function fetchURLs(string: string): Array < string > ;

/**
 * @param url invalid URLs will return null
 */
export function fetchHostUrl(url: string): string | null;

/**
 * @param url invalid URLs will return null
 */
export function fetchRootUrl(url: string): string;

/**
 * @param text to Owoify
 * @argument `!k` for a face
 */
export function owoify(text: string): string;
export function print(any): void;
export function warn(any): void;
export function error(any): void;
export function debug(any): void;
export function fatal(any): void;
export function getLogger(): pino.Logger;
export function convertToMs(time: string): number;
export function randomArrayItem(array: any[]): any;
export function spliceArray(array: any[], index: number): Array < any > ;
export function randomNumber(number: number): number;