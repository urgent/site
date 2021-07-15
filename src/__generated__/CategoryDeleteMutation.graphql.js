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
      +id: string,
      +name: ?string,
      +tagsByCategoryId: {|
        +__id: string,
        +edges: $ReadOnlyArray<{|
          +node: ?{|
            +id: string,
            +name: ?string,
          |}
        |}>,
      |},
    |}
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
      name
      tagsByCategoryId {
        edges {
          node {
            id
            name
          }
        }
      }
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
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "concreteType": "TagsEdge",
  "kind": "LinkedField",
  "name": "edges",
  "plural": true,
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Tag",
      "kind": "LinkedField",
      "name": "node",
      "plural": false,
      "selections": [
        (v3/*: any*/),
        (v4/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__id",
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
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "TagsConnection",
                "kind": "LinkedField",
                "name": "tagsByCategoryId",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  {
                    "kind": "ClientExtension",
                    "selections": [
                      (v6/*: any*/)
                    ]
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
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "TagsConnection",
                "kind": "LinkedField",
                "name": "tagsByCategoryId",
                "plural": false,
                "selections": [
                  (v5/*: any*/),
                  {
                    "kind": "ClientExtension",
                    "selections": [
                      (v6/*: any*/),
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
    "cacheID": "110a08197fab2249a36d4d57cd31e817",
    "id": null,
    "metadata": {},
    "name": "CategoryDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation CategoryDeleteMutation(\n  $input: DeleteCategoryInput!\n) {\n  deleteCategory(input: $input) {\n    category {\n      id\n      name\n      tagsByCategoryId {\n        edges {\n          node {\n            id\n            name\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'df504c6ff6946ad9925bea42497c4a98';

module.exports = node;
