declare module "@kitsune-softworks/utilities" {
    export function randomArrayItem(array: any[]): Array<any>;

    export function spliceArray(array: any[], index: number): Array<any>;

    export function randomNumber(number: number): number;

    /**
     * @param {number} time in milliseconds
     */
    export function wait(time: number): Promise<void>;
}