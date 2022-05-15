/**
 * @generated SignedSource<<026881573af51cce1de71480e2841f88>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeleteMessageInput = {
  clientMutationId?: string | null;
  messageId: number;
};
export type MessageDeleteMessageMutation$variables = {
  input: DeleteMessageInput;
  connections: ReadonlyArray<string>;
};
export type MessageDeleteMessageMutation$data = {
  readonly deleteMessage: {
    readonly message: {
      readonly id: string;
    } | null;
  } | null;
};
export type MessageDeleteMessageMutation = {
  variables: MessageDeleteMessageMutation$variables;
  response: MessageDeleteMessageMutation$data;
};

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
    "name": "MessageDeleteMessageMutation",
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
    "name": "MessageDeleteMessageMutation",
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
    "cacheID": "c32ffefd36cbf087746acbe86c68d25b",
    "id": null,
    "metadata": {},
    "name": "MessageDeleteMessageMutation",
    "operationKind": "mutation",
    "text": "mutation MessageDeleteMessageMutation(\n  $input: DeleteMessageInput!\n) {\n  deleteMessage(input: $input) {\n    message {\n      id\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "f1ca0ce6190e038fa4f4657542e2b43a";

export default node;
