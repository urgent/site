/**
 * @generated SignedSource<<62466b23e8a48cd3c30f515ebb5fb852>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateMessageInput = {
  clientMutationId?: string | null;
  id: number;
  content: string;
  loomSharedUrl?: string | null;
};
export type MessageTagUpdateMessageMutation$variables = {
  input: UpdateMessageInput;
};
export type MessageTagUpdateMessageMutationVariables = MessageTagUpdateMessageMutation$variables;
export type MessageTagUpdateMessageMutation$data = {
  readonly updateMessage: {
    readonly messages: ReadonlyArray<{
      readonly rowId: number;
      readonly content: string | null;
      readonly loomSharedUrl: string | null;
      readonly organizationId: number;
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
export type MessageTagUpdateMessageMutationResponse = MessageTagUpdateMessageMutation$data;
export type MessageTagUpdateMessageMutation = {
  variables: MessageTagUpdateMessageMutationVariables;
  response: MessageTagUpdateMessageMutation$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rowId",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "content",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "loomSharedUrl",
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
  "name": "tagId",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "color",
  "storageKey": null
},
v9 = {
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
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MessageTagUpdateMessageMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateMessagePayload",
        "kind": "LinkedField",
        "name": "updateMessage",
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
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
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
                          (v6/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Tag",
                            "kind": "LinkedField",
                            "name": "tagByTagId",
                            "plural": false,
                            "selections": [
                              (v2/*: any*/),
                              (v7/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Category",
                                "kind": "LinkedField",
                                "name": "categoryByCategoryId",
                                "plural": false,
                                "selections": [
                                  (v8/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v9/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v9/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v9/*: any*/)
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MessageTagUpdateMessageMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateMessagePayload",
        "kind": "LinkedField",
        "name": "updateMessage",
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
              (v2/*: any*/),
              (v3/*: any*/),
              (v4/*: any*/),
              (v5/*: any*/),
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
                          (v6/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "Tag",
                            "kind": "LinkedField",
                            "name": "tagByTagId",
                            "plural": false,
                            "selections": [
                              (v2/*: any*/),
                              (v7/*: any*/),
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Category",
                                "kind": "LinkedField",
                                "name": "categoryByCategoryId",
                                "plural": false,
                                "selections": [
                                  (v8/*: any*/),
                                  (v10/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v10/*: any*/),
                              (v9/*: any*/)
                            ],
                            "storageKey": null
                          },
                          (v9/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v9/*: any*/)
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
    ]
  },
  "params": {
    "cacheID": "832d6f7d0666ca0a32a48db0bf8e136d",
    "id": null,
    "metadata": {},
    "name": "MessageTagUpdateMessageMutation",
    "operationKind": "mutation",
    "text": "mutation MessageTagUpdateMessageMutation(\n  $input: UpdateMessageInput!\n) {\n  updateMessage(input: $input) {\n    messages {\n      rowId\n      content\n      loomSharedUrl\n      organizationId\n      messageTagsByMessageId {\n        edges {\n          node {\n            tagId\n            tagByTagId {\n              rowId\n              name\n              categoryByCategoryId {\n                color\n                id\n              }\n              id\n            }\n          }\n        }\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "51f09de98c3843f13b8fb831b696be47";

export default node;
