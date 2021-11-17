/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateInviteInput = {|
  clientMutationId?: ?string,
  organizationId: number,
  email: string,
|};
export type NavInsertInviteMutationVariables = {|
  input: CreateInviteInput,
  connections: $ReadOnlyArray<string>,
|};
export type NavInsertInviteMutationResponse = {|
  +createInvite: ?{|
    +invite: ?{|
      +organizationId: number,
      +email: ?string,
    |}
  |}
|};
export type NavInsertInviteMutation = {|
  variables: NavInsertInviteMutationVariables,
  response: NavInsertInviteMutationResponse,
|};
*/


/*
mutation NavInsertInviteMutation(
  $input: CreateInviteInput!
) {
  createInvite(input: $input) {
    invite {
      organizationId
      email
      id
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
  "name": "organizationId",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
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
    "name": "NavInsertInviteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateInvitePayload",
        "kind": "LinkedField",
        "name": "createInvite",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Invite",
            "kind": "LinkedField",
            "name": "invite",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/)
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
    "name": "NavInsertInviteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateInvitePayload",
        "kind": "LinkedField",
        "name": "createInvite",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Invite",
            "kind": "LinkedField",
            "name": "invite",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "appendNode",
            "key": "",
            "kind": "LinkedHandle",
            "name": "invite",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              },
              {
                "kind": "Literal",
                "name": "edgeTypeName",
                "value": "InvitesEdge"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "20577d72588d17d2346ef976537f8138",
    "id": null,
    "metadata": {},
    "name": "NavInsertInviteMutation",
    "operationKind": "mutation",
    "text": "mutation NavInsertInviteMutation(\n  $input: CreateInviteInput!\n) {\n  createInvite(input: $input) {\n    invite {\n      organizationId\n      email\n      id\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f0d5d55840dbdcf9211011f8ec35b161';

module.exports = node;