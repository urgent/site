/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type UpdateCategoryInput = {|
  clientMutationId?: ?string,
  id: number,
  name: string,
  color: string,
|};
export type CategoryUpdateCategoryMutationVariables = {|
  input: UpdateCategoryInput
|};
export type CategoryUpdateCategoryMutationResponse = {|
  +updateCategory: ?{|
    +category: ?{|
      +rowId: number,
      +name: ?string,
      +color: ?string,
      +tagsByCategoryId: {|
        +__id: string,
        +edges: $ReadOnlyArray<{|
          +node: ?{|
            +name: ?string
          |}
        |}>,
      |},
    |}
  |}
|};
export type CategoryUpdateCategoryMutation = {|
  variables: CategoryUpdateCategoryMutationVariables,
  response: CategoryUpdateCategoryMutationResponse,
|};
*/


/*
mutation CategoryUpdateCategoryMutation(
  $input: UpdateCategoryInput!
) {
  updateCategory(input: $input) {
    category {
      rowId
      name
      color
      tagsByCategoryId {
        edges {
          node {
            name
            id
          }
        }
      }
      id
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
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
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "color",
  "storageKey": null
},
v5 = {
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
v6 = {
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
    "name": "CategoryUpdateCategoryMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateCategoryPayload",
        "kind": "LinkedField",
        "name": "updateCategory",
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
              (v2/*: any*/),
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
                  {
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
                          (v3/*: any*/)
                        ],
                        "storageKey": null
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
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "CategoryUpdateCategoryMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "UpdateCategoryPayload",
        "kind": "LinkedField",
        "name": "updateCategory",
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
              (v2/*: any*/),
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
                  {
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
                          (v6/*: any*/)
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v5/*: any*/)
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
    "cacheID": "fbf702d917af95a359f618ce5651b710",
    "id": null,
    "metadata": {},
    "name": "CategoryUpdateCategoryMutation",
    "operationKind": "mutation",
    "text": "mutation CategoryUpdateCategoryMutation(\n  $input: UpdateCategoryInput!\n) {\n  updateCategory(input: $input) {\n    category {\n      rowId\n      name\n      color\n      tagsByCategoryId {\n        edges {\n          node {\n            name\n            id\n          }\n        }\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '25daafbd85ce21402bf8acbb1b1e2e9e';

module.exports = node;
