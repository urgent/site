/**
 * @generated SignedSource<<a5f37149454ed85db896cab23ffe0fa3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateCategoryInput = {
  clientMutationId?: string | null;
  id: number;
  name: string;
  color: string;
};
export type CategoryTagUpdateMessageMutation$variables = {
  input: UpdateCategoryInput;
};
export type CategoryTagUpdateMessageMutationVariables = CategoryTagUpdateMessageMutation$variables;
export type CategoryTagUpdateMessageMutation$data = {
  readonly updateCategory: {
    readonly category: {
      readonly rowId: number;
      readonly name: string | null;
      readonly color: string | null;
      readonly sort: number | null;
    } | null;
  } | null;
};
export type CategoryTagUpdateMessageMutationResponse = CategoryTagUpdateMessageMutation$data;
export type CategoryTagUpdateMessageMutation = {
  variables: CategoryTagUpdateMessageMutationVariables;
  response: CategoryTagUpdateMessageMutation$data;
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "sort",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "CategoryTagUpdateMessageMutation",
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
              (v5/*: any*/)
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
    "name": "CategoryTagUpdateMessageMutation",
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
              (v5/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
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
    "cacheID": "ed9e01c24af3efecdc1c0461cb6557b5",
    "id": null,
    "metadata": {},
    "name": "CategoryTagUpdateMessageMutation",
    "operationKind": "mutation",
    "text": "mutation CategoryTagUpdateMessageMutation(\n  $input: UpdateCategoryInput!\n) {\n  updateCategory(input: $input) {\n    category {\n      rowId\n      name\n      color\n      sort\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "d05fbd6491c4cab505bfa47112a5d9e6";

export default node;
