/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SortCategoryInput = {|
  clientMutationId?: ?string,
  categoryIds: $ReadOnlyArray<?number>,
  sort: $ReadOnlyArray<?number>,
|};
export type SidebarSortCategoryMutationVariables = {|
  input: SortCategoryInput
|};
export type SidebarSortCategoryMutationResponse = {|
  +sortCategory: ?{|
    +query: ?{|
      +allCategories: ?{|
        +nodes: $ReadOnlyArray<?{|
          +name: ?string
        |}>
      |}
    |}
  |}
|};
export type SidebarSortCategoryMutation = {|
  variables: SidebarSortCategoryMutationVariables,
  response: SidebarSortCategoryMutationResponse,
|};
*/


/*
mutation SidebarSortCategoryMutation(
  $input: SortCategoryInput!
) {
  sortCategory(input: $input) {
    query {
      allCategories {
        nodes {
          name
          id
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
  "name": "name",
  "storageKey": null
},
v3 = {
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
    "name": "SidebarSortCategoryMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "SortCategoryPayload",
        "kind": "LinkedField",
        "name": "sortCategory",
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
                "concreteType": "CategoriesConnection",
                "kind": "LinkedField",
                "name": "allCategories",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Category",
                    "kind": "LinkedField",
                    "name": "nodes",
                    "plural": true,
                    "selections": [
                      (v2/*: any*/)
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
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "SidebarSortCategoryMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "SortCategoryPayload",
        "kind": "LinkedField",
        "name": "sortCategory",
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
                "concreteType": "CategoriesConnection",
                "kind": "LinkedField",
                "name": "allCategories",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Category",
                    "kind": "LinkedField",
                    "name": "nodes",
                    "plural": true,
                    "selections": [
                      (v2/*: any*/),
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
    "cacheID": "684f38145b6936a93a41d57402fa2a17",
    "id": null,
    "metadata": {},
    "name": "SidebarSortCategoryMutation",
    "operationKind": "mutation",
    "text": "mutation SidebarSortCategoryMutation(\n  $input: SortCategoryInput!\n) {\n  sortCategory(input: $input) {\n    query {\n      allCategories {\n        nodes {\n          name\n          id\n        }\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '572acd266ac9e4d538be340625985d24';

module.exports = node;
