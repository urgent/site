/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

export type CreateTagInput = {
    clientMutationId?: string | null | undefined;
    name: string;
    categoryId: number;
};
export type TagInsertTagMutationVariables = {
    input: CreateTagInput;
    connections: Array<string>;
};
export type TagInsertTagMutationResponse = {
    readonly createTag: {
        readonly tag: {
            readonly id: string;
            readonly rowId: number;
            readonly name: string | null;
        } | null;
    } | null;
};
export type TagInsertTagMutation = {
    readonly response: TagInsertTagMutationResponse;
    readonly variables: TagInsertTagMutationVariables;
};



/*
mutation TagInsertTagMutation(
  $input: CreateTagInput!
) {
  createTag(input: $input) {
    tag {
      id
      rowId
      name
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
  "concreteType": "Tag",
  "kind": "LinkedField",
  "name": "tag",
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
      "name": "rowId",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "name",
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
    "name": "TagInsertTagMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateTagPayload",
        "kind": "LinkedField",
        "name": "createTag",
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
    "name": "TagInsertTagMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateTagPayload",
        "kind": "LinkedField",
        "name": "createTag",
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
            "name": "tag",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              },
              {
                "kind": "Literal",
                "name": "edgeTypeName",
                "value": "TagsEdge"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "4fa480e889a01b0d281742d95419df4e",
    "id": null,
    "metadata": {},
    "name": "TagInsertTagMutation",
    "operationKind": "mutation",
    "text": "mutation TagInsertTagMutation(\n  $input: CreateTagInput!\n) {\n  createTag(input: $input) {\n    tag {\n      id\n      rowId\n      name\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = '3a9020573700971cb4a2f9c7d3809c58';
export default node;
