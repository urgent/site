import { filter, format } from "./Tiles"

const match = {
    node: {
        content: 'tag',
        message_tags: [
            {
                tag: {
                    name: 'test',
                }
            },
            {
                tag: {
                    name: 'test2'
                }
            }
        ]
    }
}

const noMatch = {
    node: {
        content: 'no-tag',
        message_tags: []
    }
}

const misMatch = {
    node: {
        content: 'mismatch-tag',
        message_tags: [
            {
                tag: {
                    name: 'test3',
                }
            }
        ]
    }
}

const partialMatch = {
    node: {
        content: 'partial-tag',
        message_tags: [
            {
                tag: {
                    name: 'test',
                }
            }
        ]
    }
}

const tagFilter = ['test', 'test2']

test('filters tags', () => {
    expect(filter(format([match, noMatch, misMatch, partialMatch]), tagFilter)).toEqual(format([match]));
    expect(filter(format([match, misMatch]), tagFilter)).toEqual(format([match]));
    expect(filter(format([match, noMatch]), tagFilter)).toEqual(format([match]));
    expect(filter(format([noMatch, misMatch]), tagFilter)).toEqual(format([]));
    expect(filter(format([noMatch]), tagFilter)).toEqual(format([]));
    expect(filter(format([misMatch]), tagFilter)).toEqual(format([]));
    expect(filter(format([]), tagFilter)).toEqual(format([]));
    expect(filter(format([]), [])).toEqual(format([]));
    expect(filter(format([match, noMatch, misMatch]), [])).toEqual(format([match, noMatch, misMatch]));
});