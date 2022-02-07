/**
 * Decode a route query parameter from a string
 * @param {string} parameter The parameter to decode 
 * @returns {Array <string>} The decoded parameter
 */
export function decode(parameter:string):Array<string> {
    if(!parameter) return [];
    return parameter.split('&');
}

export function encode(parameter:Array<string>):string {
    if(!parameter) return '';
    return parameter.filter(value => !!value).join('&');
}