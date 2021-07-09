/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateMessageInput = {|
  clientMutationId?: ?string,
  organizationId: number,
  content: string,
  tags: $ReadOnlyArray<?number>,
|};
export type TilesInsertMessageMutationVariables = {|
  input: CreateMessageInput,
  connections: $ReadOnlyArray<string>,
|};
export type TilesInsertMessageMutationResponse = {|
  +createMessage: ?{|
    +messages: ?$ReadOnlyArray<?{|
      +rowId: number,
      +content: ?string,
      +organizationId: number,
      +messageTagsByMessageId: {|
        +__id: string,
        +edges: $ReadOnlyArray<{|
          +node: ?{|
            +__id: string,
            +tagId: number,
            +tagByTagId: ?{|
              +__id: string,
              +rowId: number,
              +name: ?string,
              +categoryByCategoryId: ?{|
                +color: ?string
              |},
            |},
          |}
        |}>,
      |},
    |}>
  |}
|};
export type TilesInsertMessageMutation = {|
  variables: TilesInsertMessageMutationVariables,
  response: TilesInsertMessageMutationResponse,
|};
*/


/*
mutation TilesInsertMessageMutation(
  $input: CreateMessageInput!
) {
  createMessage(input: $input) {
    messages {
      rowId
      content
      organizationId
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
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "TilesInsertMessageMutation",
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
                              (v3/*: any*/),
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
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "TilesInsertMessageMutation",
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
                              (v3/*: any*/),
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
    "cacheID": "f28c621fa19408ecb0540a9fa16f11e9",
    "id": null,
    "metadata": {},
    "name": "TilesInsertMessageMutation",
    "operationKind": "mutation",
    "text": "mutation TilesInsertMessageMutation(\n  $input: CreateMessageInput!\n) {\n  createMessage(input: $input) {\n    messages {\n      rowId\n      content\n      organizationId\n      messageTagsByMessageId {\n        edges {\n          node {\n            tagId\n            tagByTagId {\n              rowId\n              name\n              categoryByCategoryId {\n                color\n                id\n              }\n              id\n            }\n          }\n        }\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'cc5ea4cc540c748d931522f2b4eb9ae9';

module.exports = node;
