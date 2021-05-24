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

const tagFilter = ['test', 'test2']

test('filters tags', () => {
    expect(filter(format([match, noMatch, misMatch]), tagFilter)).toEqual(format([match]));
});