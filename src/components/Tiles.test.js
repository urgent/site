import { filter } from "./Tiles"

const messages = {
    message_connection: {
        edges: [
            {
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
            },
            {
                node: {
                    content: 'no-tag',
                    message_tags: []
                }
            },
            {
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
            },
        ]
    }
}

const tagFilter = ['test', 'test2']

test('filters tags', () => {
    expect(filter(messages, tagFilter)).toEqual({
        message_connection: {
            edges: [
                {
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
                }]
        },
    });
});