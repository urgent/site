/**
 * @generated SignedSource<<f40fac40c3cfef24e31577191087eaf9>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeleteMessageInput = {|
  clientMutationId?: ?string,
  messageId: number,
|};
export type TilesDeleteMessageMutation$variables = {|
  input: DeleteMessageInput,
  connections: $ReadOnlyArray<string>,
|};
export type TilesDeleteMessageMutationVariables = TilesDeleteMessageMutation$variables;
export type TilesDeleteMessageMutation$data = {|
  +deleteMessage: ?{|
    +message: ?{|
      +id: string,
    |},
  |},
|};
export type TilesDeleteMessageMutationResponse = TilesDeleteMessageMutation$data;
export type TilesDeleteMessageMutation = {|
  variables: TilesDeleteMessageMutationVariables,
  response: TilesDeleteMessageMutation$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
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
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "TilesDeleteMessageMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteMessagePayload",
        "kind": "LinkedField",
        "name": "deleteMessage",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Message",
            "kind": "LinkedField",
            "name": "message",
            "plural": false,
            "selections": [
              (v3/*: any*/)
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
    "name": "TilesDeleteMessageMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteMessagePayload",
        "kind": "LinkedField",
        "name": "deleteMessage",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Message",
            "kind": "LinkedField",
            "name": "message",
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
                "handleArgs": [
                  {
                    "kind": "Variable",
                    "name": "connections",
                    "variableName": "connections"
                  }
                ]
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
    "cacheID": "b7408581553f5c253f60ec6671920e7d",
    "id": null,
    "metadata": {},
    "name": "TilesDeleteMessageMutation",
    "operationKind": "mutation",
    "text": "mutation TilesDeleteMessageMutation(\n  $input: DeleteMessageInput!\n) {\n  deleteMessage(input: $input) {\n    message {\n      id\n    }\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "80258f25ab58bd841bcf6df03eda0185";

module.exports = ((node/*: any*/)/*: Mutation<
  TilesDeleteMessageMutation$variables,
  TilesDeleteMessageMutation$data,
>*/);
