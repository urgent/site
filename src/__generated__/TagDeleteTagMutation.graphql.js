/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteTagInput = {|
  clientMutationId?: ?string,
  tagId: number,
|};
export type DeleteMessageTagInput = {|
  clientMutationId?: ?string,
  tagId: number,
|};
export type TagDeleteTagMutationVariables = {|
  tag: DeleteTagInput,
  messageTag: DeleteMessageTagInput,
  connections: $ReadOnlyArray<string>,
|};
export type TagDeleteTagMutationResponse = {|
  +deleteMessageTag: ?{|
    +query: ?{|
      +allMessages: ?{|
        +nodes: $ReadOnlyArray<?{|
          +messageTagsByMessageId: {|
            +__id: string,
            +edges: $ReadOnlyArray<{|
              +node: ?{|
                +messageId: number
              |}
            |}>,
          |},
          +content: ?string,
        |}>
      |}
    |}
  |},
  +deleteTag: ?{|
    +tag: ?{|
      +id: string
    |}
  |},
|};
export type TagDeleteTagMutation = {|
  variables: TagDeleteTagMutationVariables,
  response: TagDeleteTagMutationResponse,
|};
*/


/*
mutation TagDeleteTagMutation(
  $tag: DeleteTagInput!
  $messageTag: DeleteMessageTagInput!
) {
  deleteMessageTag(input: $messageTag) {
    query {
      allMessages {
        nodes {
          messageTagsByMessageId {
            edges {
              node {
                messageId
              }
            }
          }
          content
          id
        }
      }
      id
    }
  }
  deleteTag(input: $tag) {
    tag {
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "messageTag"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "tag"
},
v3 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "messageTag"
  }
],
v4 = {
  "alias": null,
  "args": null,
  "concreteType": "MessageTagsEdge",
  "kind": "LinkedField",
  "name": "edges",
  "plural": true,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "MessageTag",
      "kind": "LinkedField",
      "name": "node",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "messageId",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__id",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v7 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "tag"
  }
],
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v9 = [
  {
    "kind": "Variable",
    "name": "connections",
    "variableName": "connections"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "TagDeleteTagMutation",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "DeleteMessageTagPayload",
        "kind": "LinkedField",
        "name": "deleteMessageTag",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Query",
            "kind": "LinkedField",
            "name": "query",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "MessagesConnection",
                "kind": "LinkedField",
                "name": "allMessages",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Message",
                    "kind": "LinkedField",
                    "name": "nodes",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "MessageTagsConnection",
                        "kind": "LinkedField",
                        "name": "messageTagsByMessageId",
                        "plural": false,
                        "selections": [
                          (v4/*: any*/),
                          {
                            "kind": "ClientExtension",
                            "selections": [
                              (v5/*: any*/)
                            ]
                          }
                        ],
                        "storageKey": null
                      },
                      (v6/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v7/*: any*/),
        "concreteType": "DeleteTagPayload",
        "kind": "LinkedField",
        "name": "deleteTag",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Tag",
            "kind": "LinkedField",
            "name": "tag",
            "plural": false,
            "selections": [
              (v8/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v2/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "TagDeleteTagMutation",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "DeleteMessageTagPayload",
        "kind": "LinkedField",
        "name": "deleteMessageTag",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Query",
            "kind": "LinkedField",
            "name": "query",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "MessagesConnection",
                "kind": "LinkedField",
                "name": "allMessages",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Message",
                    "kind": "LinkedField",
                    "name": "nodes",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "MessageTagsConnection",
                        "kind": "LinkedField",
                        "name": "messageTagsByMessageId",
                        "plural": false,
                        "selections": [
                          (v4/*: any*/),
                          {
                            "kind": "ClientExtension",
                            "selections": [
                              (v5/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "filters": null,
                                "handle": "deleteEdge",
                                "key": "",
                                "kind": "ScalarHandle",
                                "name": "__id",
                                "handleArgs": (v9/*: any*/)
                              }
                            ]
                          }
                        ],
                        "storageKey": null
                      },
                      (v6/*: any*/),
                      (v8/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v8/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v7/*: any*/),
        "concreteType": "DeleteTagPayload",
        "kind": "LinkedField",
        "name": "deleteTag",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Tag",
            "kind": "LinkedField",
            "name": "tag",
            "plural": false,
            "selections": [
              (v8/*: any*/),
              {
                "alias": null,
                "args": null,
                "filters": null,
                "handle": "deleteEdge",
                "key": "",
                "kind": "ScalarHandle",
                "name": "id",
                "handleArgs": (v9/*: any*/)
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "64bdd1c715d9d7c0e4a886fe8fe98094",
    "id": null,
    "metadata": {},
    "name": "TagDeleteTagMutation",
    "operationKind": "mutation",
    "text": "mutation TagDeleteTagMutation(\n  $tag: DeleteTagInput!\n  $messageTag: DeleteMessageTagInput!\n) {\n  deleteMessageTag(input: $messageTag) {\n    query {\n      allMessages {\n        nodes {\n          messageTagsByMessageId {\n            edges {\n              node {\n                messageId\n              }\n            }\n          }\n          content\n          id\n        }\n      }\n      id\n    }\n  }\n  deleteTag(input: $tag) {\n    tag {\n      id\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'dc7e9e5d2be2a91e53929dad47939b7f';

module.exports = node;
