/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type CreateMessageInput = {
    clientMutationId?: string | null | undefined;
    organizationId: number;
    content: string;
    tags: Array<number | null>;
    loomSharedUrl?: string | null | undefined;
};
export type EditorInsertMessageMutationVariables = {
    input: CreateMessageInput;
    connections: Array<string>;
};
export type EditorInsertMessageMutationResponse = {
    readonly createMessage: {
        readonly messages: ReadonlyArray<{
            readonly rowId: number;
            readonly content: string | null;
            readonly organizationId: number;
            readonly loomSharedUrl: string | null;
            readonly messageTagsByMessageId: {
                readonly __id: string;
                readonly edges: ReadonlyArray<{
                    readonly node: {
                        readonly __id: string;
                        readonly tagId: number;
                        readonly tagByTagId: {
                            readonly __id: string;
                            readonly rowId: number;
                            readonly name: string | null;
                            readonly categoryByCategoryId: {
                                readonly color: string | null;
                            } | null;
                        } | null;
                    } | null;
                }>;
            };
        } | null> | null;
    } | null;
};
export type EditorInsertMessageMutation = {
    readonly response: EditorInsertMessageMutationResponse;
    readonly variables: EditorInsertMessageMutationVariables;
};



/*
mutation EditorInsertMessageMutation(
  $input: CreateMessageInput!
) {
  createMessage(input: $input) {
    messages {
      rowId
      content
      organizationId
      loomSharedUrl
      messageTagsByMessageId {
        edges {
          node {
            tagId
            tagByTagId {
              rowId
              name
              categoryByCategoryId {
                color
                id
              }
              id
            }
          }
        }
      }
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
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
  "kind": "ScalarField",
  "name": "rowId",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "organizationId",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "loomSharedUrl",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "tagId",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "color",
  "storageKey": null
},
v10 = {
  "kind": "ClientExtension",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__id",
      "storageKey": null
    }
  ]
},
v11 = {
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
    "name": "EditorInsertMessageMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateMessagePayload",
        "kind": "LinkedField",
        "name": "createMessage",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Message",
            "kind": "LinkedField",
            "name": "messages",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "MessageTagsConnection",
                "kind": "LinkedField",
                "name": "messageTagsByMessageId",
                "plural": false,
                "selections": [
                  {
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
                          (v7/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Tag",
                            "kind": "LinkedField",
                            "name": "tagByTagId",
                            "plural": false,
                            "selections": [
                              (v3/*: any*/),
                              (v8/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Category",
                                "kind": "LinkedField",
                                "name": "categoryByCategoryId",
                                "plural": false,
                                "selections": [
                                  (v9/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v10/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v10/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v10/*: any*/)
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
    "name": "EditorInsertMessageMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateMessagePayload",
        "kind": "LinkedField",
        "name": "createMessage",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Message",
            "kind": "LinkedField",
            "name": "messages",
            "plural": true,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
              (v6/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "MessageTagsConnection",
                "kind": "LinkedField",
                "name": "messageTagsByMessageId",
                "plural": false,
                "selections": [
                  {
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
                          (v7/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Tag",
                            "kind": "LinkedField",
                            "name": "tagByTagId",
                            "plural": false,
                            "selections": [
                              (v3/*: any*/),
                              (v8/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Category",
                                "kind": "LinkedField",
                                "name": "categoryByCategoryId",
                                "plural": false,
                                "selections": [
                                  (v9/*: any*/),
                                  (v11/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v11/*: any*/),
                              (v10/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v10/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v10/*: any*/)
                ],
                "storageKey": null
              },
              (v11/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "appendNode",
            "key": "",
            "kind": "LinkedHandle",
            "name": "messages",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              },
              {
                "kind": "Literal",
                "name": "edgeTypeName",
                "value": "MessagesEdge"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e9465af544b87fde10a1fae60d1e95ea",
    "id": null,
    "metadata": {},
    "name": "EditorInsertMessageMutation",
    "operationKind": "mutation",
    "text": "mutation EditorInsertMessageMutation(\n  $input: CreateMessageInput!\n) {\n  createMessage(input: $input) {\n    messages {\n      rowId\n      content\n      organizationId\n      loomSharedUrl\n      messageTagsByMessageId {\n        edges {\n          node {\n            tagId\n            tagByTagId {\n              rowId\n              name\n              categoryByCategoryId {\n                color\n                id\n              }\n              id\n            }\n          }\n        }\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '54ed4eb25a5b92415f01d83bc3bdfce2';
export default node;