/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateMessageInput = {|
  clientMutationId?: ?string,
  message: MessageInput,
|};
export type MessageInput = {|
  id?: ?number,
  userId?: ?string,
  content?: ?string,
|};
export type TilesInsertMessageMutationVariables = {|
  input: CreateMessageInput
|};
export type TilesInsertMessageMutationResponse = {|
  +createMessage: ?{|
    +message: ?{|
      +content: ?string
    |}
  |}
|};
export type TilesInsertMessageMutation = {|
  variables: TilesInsertMessageMutationVariables,
  response: TilesInsertMessageMutationResponse,
|};
*/


/*
mutation TilesInsertMessageMutation(
  $input: CreateMessageInput!
) {
  createMessage(input: $input) {
    message {
      content
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
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateMessagePayload",
    "kind": "LinkedField",
    "name": "createMessage",
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
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "content",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TilesInsertMessageMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TilesInsertMessageMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "678296d77e6703307f001d877a2a9564",
    "id": null,
    "metadata": {},
    "name": "TilesInsertMessageMutation",
    "operationKind": "mutation",
    "text": "mutation TilesInsertMessageMutation(\n  $input: CreateMessageInput!\n) {\n  createMessage(input: $input) {\n    message {\n      content\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '16d6b8fe3c5b195b0648dc0d8a810f7e';

module.exports = node;
