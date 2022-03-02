/**
 * Parse a query string into an array of numbers
 * 
 * @param {string | string[]} param Parameter to parse 
 * @returns {number[]} Array of numbers
 */
export function parse(param: string | string[]): number[] {
  if (typeof param === 'string') {
    return [param].map(parseInt);
  } else if (Array.isArray(param)) {
    return param.map(parseInt);
  } else {
    return [];
  }
}