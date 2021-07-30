/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type RemoveMessageTagInput = {|
  clientMutationId?: ?string,
  tagId: number,
  messageId: number,
|};
export type MessageDeleteTagMutationVariables = {|
  input: RemoveMessageTagInput,
  connections: $ReadOnlyArray<string>,
|};
export type MessageDeleteTagMutationResponse = {|
  +removeMessageTag: ?{|
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
  |}
|};
export type MessageDeleteTagMutation = {|
  variables: MessageDeleteTagMutationVariables,
  response: MessageDeleteTagMutationResponse,
|};
*/


/*
mutation MessageDeleteTagMutation(
  $input: RemoveMessageTagInput!
) {
  removeMessageTag(input: $input) {
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
  "name": "input"
},
v2 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v3 = {
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
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__id",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "MessageDeleteTagMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "RemoveMessageTagPayload",
        "kind": "LinkedField",
        "name": "removeMessageTag",
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
                          (v3/*: any*/),
                          {
                            "kind": "ClientExtension",
                            "selections": [
                              (v4/*: any*/)
                            ]
                          }
                        ],
                        "storageKey": null
                      },
                      (v5/*: any*/)
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
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "MessageDeleteTagMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "RemoveMessageTagPayload",
        "kind": "LinkedField",
        "name": "removeMessageTag",
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
                          (v3/*: any*/),
                          {
                            "kind": "ClientExtension",
                            "selections": [
                              (v4/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "filters": null,
                                "handle": "deleteEdge",
                                "key": "",
                                "kind": "ScalarHandle",
                                "name": "__id",
                                "handleArgs": [
                                  {
                                    "kind": "Variable",
                                    "name": "connections",
                                    "variableName": "connections"
                                  }
                                ]
                              }
                            ]
                          }
                        ],
                        "storageKey": null
                      },
                      (v5/*: any*/),
                      (v6/*: any*/)
                    ],
                    "storageKey": null
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
    ]
  },
  "params": {
    "cacheID": "5461945b80a70ac8154f08033ee69ef4",
    "id": null,
    "metadata": {},
    "name": "MessageDeleteTagMutation",
    "operationKind": "mutation",
    "text": "mutation MessageDeleteTagMutation(\n  $input: RemoveMessageTagInput!\n) {\n  removeMessageTag(input: $input) {\n    query {\n      allMessages {\n        nodes {\n          messageTagsByMessageId {\n            edges {\n              node {\n                messageId\n              }\n            }\n          }\n          content\n          id\n        }\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8f7effb1bda867a91263e39714a26870';

module.exports = node;
