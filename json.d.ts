/** @noSelf */
declare namespace json {
    function decode(input: string): object;
    function encode(
        input: object, 
        params?: {
            indent?: boolean,
            level?: number,
        }
    ): string;
}
