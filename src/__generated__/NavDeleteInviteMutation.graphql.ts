/**
 * @generated SignedSource<<fa46b13c4a30a2547e130da9fe131b29>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeleteInviteInput = {
  clientMutationId?: string | null;
  organizationId: number;
  email: string;
};
export type NavDeleteInviteMutation$variables = {
  input: DeleteInviteInput;
  connections: ReadonlyArray<string>;
};
export type NavDeleteInviteMutationVariables = NavDeleteInviteMutation$variables;
export type NavDeleteInviteMutation$data = {
  readonly deleteInvite: {
    readonly invite: {
      readonly id: string;
      readonly organizationId: number;
      readonly email: string | null;
    } | null;
  } | null;
};
export type NavDeleteInviteMutationResponse = NavDeleteInviteMutation$data;
export type NavDeleteInviteMutation = {
  variables: NavDeleteInviteMutationVariables;
  response: NavDeleteInviteMutation$data;
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
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "organizationId",
  "storageKey": null
},
v5 = {
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
    "name": "NavDeleteInviteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteInvitePayload",
        "kind": "LinkedField",
        "name": "deleteInvite",
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
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "NavDeleteInviteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteInvitePayload",
        "kind": "LinkedField",
        "name": "deleteInvite",
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
              },
              (v4/*: any*/),
              (v5/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "3a1ff0f8241106c24fab66044346d178",
    "id": null,
    "metadata": {},
    "name": "NavDeleteInviteMutation",
    "operationKind": "mutation",
    "text": "mutation NavDeleteInviteMutation(\n  $input: DeleteInviteInput!\n) {\n  deleteInvite(input: $input) {\n    invite {\n      id\n      organizationId\n      email\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "fcab9aa7afda09c58cf1882e6b330924";

export default node;
