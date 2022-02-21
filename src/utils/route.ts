/**
 * Decode a route query parameter from a string
 * @param {string | string[]} parameter The parameter to decode 
 * @returns {Array <string>} The decoded parameter
 */
export function decode(parameter:(string | string[])):Array<string> {
    if(!parameter) return [];
    if(Array.isArray(parameter)) return parameter;
    return parameter.split('&');
}

export function encode(parameter:Array<string>):string {
    if(!parameter) return '';
    return parameter.filter(value => !!value).join('&');
}

export function isActive({ tag, id }) {
    // handle routes with no tag
    return decode(tag)
    .map((el) => parseInt(el))
    .includes(id);
}

export function link({ organization, tag, id, path }) {
    const tags = decode(tag);
    const tag_id = id.toString();
    if (tags.includes(tag_id)) {
        return `/${organization}/${encode(tags.filter((tag) => tag !== tag_id))}/${path}`;
    } else {
        return `/${organization}/${encode([tag, id])}/${path}`;
    }
}

export function arrayCast(cast) {
    return function (value) {
        if(Array.isArray(value)) {
            return value.map(cast);
        } else {
            return cast(value);
        }
    }
}