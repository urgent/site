/**
 * Decode a route query parameter from a string
 * @param {string} parameter The parameter to decode 
 * @returns {Array <string>} The decoded parameter
 */
export function decode(parameter:string):Array<string> {
    return parameter.split('&');
}