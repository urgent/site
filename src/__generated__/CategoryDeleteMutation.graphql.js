/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteCategoryInput = {|
  clientMutationId?: ?string,
  categoryId: number,
|};
export type CategoryDeleteMutationVariables = {|
  input: DeleteCategoryInput,
  connections: $ReadOnlyArray<string>,
|};
export type CategoryDeleteMutationResponse = {|
  +deleteCategory: ?{|
    +category: ?{|
      +id: string
    |},
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
    |},
  |}
|};
export type CategoryDeleteMutation = {|
  variables: CategoryDeleteMutationVariables,
  response: CategoryDeleteMutationResponse,
|};
*/


/*
mutation CategoryDeleteMutation(
  $input: DeleteCategoryInput!
) {
  deleteCategory(input: $input) {
    category {
      id
    }
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
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
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
    "name": "connections",
    "variableName": "connections"
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "CategoryDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteCategoryPayload",
        "kind": "LinkedField",
        "name": "deleteCategory",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Category",
            "kind": "LinkedField",
            "name": "category",
            "plural": false,
            "selections": [
              (v3/*: any*/)
            ],
            "storageKey": null
          },
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
    "name": "CategoryDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteCategoryPayload",
        "kind": "LinkedField",
        "name": "deleteCategory",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Category",
            "kind": "LinkedField",
            "name": "category",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "filters": null,
                "handle": "deleteEdge",
                "key": "",
                "kind": "ScalarHandle",
                "name": "id",
                "handleArgs": (v7/*: any*/)
              }
            ],
            "storageKey": null
          },
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
                                "handleArgs": (v7/*: any*/)
                              }
                            ]
                          }
                        ],
                        "storageKey": null
                      },
                      (v6/*: any*/),
                      (v3/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v3/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "d2ca0dca06dcb4e0e5504173d05d745e",
    "id": null,
    "metadata": {},
    "name": "CategoryDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation CategoryDeleteMutation(\n  $input: DeleteCategoryInput!\n) {\n  deleteCategory(input: $input) {\n    category {\n      id\n    }\n    query {\n      allMessages {\n        nodes {\n          messageTagsByMessageId {\n            edges {\n              node {\n                messageId\n              }\n            }\n          }\n          content\n          id\n        }\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '68fd28c189d6bb9dd6965b84ef697a15';

module.exports = node;
