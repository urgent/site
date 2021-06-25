/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateTagInput = {|
  clientMutationId?: ?string,
  name: string,
  categoryId: number,
|};
export type TagInsertTagMutationVariables = {|
  input: CreateTagInput,
  connections: $ReadOnlyArray<string>,
|};
export type TagInsertTagMutationResponse = {|
  +createTag: ?{|
    +tag: ?{|
      +id: string,
      +name: ?string,
    |}
  |}
|};
export type TagInsertTagMutation = {|
  variables: TagInsertTagMutationVariables,
  response: TagInsertTagMutationResponse,
|};
*/


/*
mutation TagInsertTagMutation(
  $input: CreateTagInput!
) {
  createTag(input: $input) {
    tag {
      id
      name
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
    "cacheID": "94cf6442b8a7504b24ef94203e03affd",
    "id": null,
    "metadata": {},
    "name": "TagInsertTagMutation",
    "operationKind": "mutation",
    "text": "mutation TagInsertTagMutation(\n  $input: CreateTagInput!\n) {\n  createTag(input: $input) {\n    tag {\n      id\n      name\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '82e39ed00cafae27b5a34173b3faa174';

module.exports = node;
