/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateCategoryInput = {|
  clientMutationId?: ?string,
  name: string,
  color: string,
|};
export type CategoryInsertCategoryMutationVariables = {|
  input: CreateCategoryInput,
  connections: $ReadOnlyArray<string>,
|};
export type CategoryInsertCategoryMutationResponse = {|
  +createCategory: ?{|
    +category: ?{|
      +id: string,
      +name: ?string,
      +color: ?string,
    |}
  |}
|};
export type CategoryInsertCategoryMutation = {|
  variables: CategoryInsertCategoryMutationVariables,
  response: CategoryInsertCategoryMutationResponse,
|};
*/


/*
mutation CategoryInsertCategoryMutation(
  $input: CreateCategoryInput!
) {
  createCategory(input: $input) {
    category {
      id
      name
      color
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
  "concreteType": "Category",
  "kind": "LinkedField",
  "name": "category",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "color",
      "storageKey": null
    }
  ],
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
    "name": "CategoryInsertCategoryMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateCategoryPayload",
        "kind": "LinkedField",
        "name": "createCategory",
        "plural": false,
        "selections": [
          (v3/*: any*/)
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
    "name": "CategoryInsertCategoryMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateCategoryPayload",
        "kind": "LinkedField",
        "name": "createCategory",
        "plural": false,
        "selections": [
          (v3/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "appendNode",
            "key": "",
            "kind": "LinkedHandle",
            "name": "category",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              },
              {
                "kind": "Literal",
                "name": "edgeTypeName",
                "value": "CategoriesEdge"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "24e1995308236b98e7f5cd2aa29113dd",
    "id": null,
    "metadata": {},
    "name": "CategoryInsertCategoryMutation",
    "operationKind": "mutation",
    "text": "mutation CategoryInsertCategoryMutation(\n  $input: CreateCategoryInput!\n) {\n  createCategory(input: $input) {\n    category {\n      id\n      name\n      color\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0dea7edc93c4d89fcb01afc4dccfff44';

module.exports = node;
