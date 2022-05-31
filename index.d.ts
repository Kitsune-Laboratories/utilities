declare module "@kitsune-softworks/utilities" {
    export function randomArrayItem(array: any[]): Array<any>;

    export function spliceArray(array: any[], index: number): Array<any>;

    export function randomNumber(number: number): number;

    /**
     * @param time in milliseconds
     */
    export function wait(time: number): Promise<void>;

    /**
     * @param url invalid URLs will return null
     */
    export function fetchHostUrl(url: string): string | null;

    /**
     * @param url invalid URLs will return null
     */
    export function fetchRootUrl(url: string): string | null;
}