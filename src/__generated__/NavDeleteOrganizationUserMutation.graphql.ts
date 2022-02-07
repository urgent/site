/**
 * @generated SignedSource<<8c61789b8b4afa973ed03882944f3c4e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeleteOrganizationUserInput = {
  clientMutationId?: string | null;
  organizationId: number;
  userId: number;
};
export type NavDeleteOrganizationUserMutation$variables = {
  input: DeleteOrganizationUserInput;
  connections: ReadonlyArray<string>;
};
export type NavDeleteOrganizationUserMutationVariables = NavDeleteOrganizationUserMutation$variables;
export type NavDeleteOrganizationUserMutation$data = {
  readonly deleteOrganizationUser: {
    readonly organizationUser: {
      readonly id: string;
      readonly organizationByOrganizationId: {
        readonly rowId: number;
        readonly slug: string | null;
        readonly userByUserId: {
          readonly email: string | null;
        } | null;
      } | null;
    } | null;
  } | null;
};
export type NavDeleteOrganizationUserMutationResponse = NavDeleteOrganizationUserMutation$data;
export type NavDeleteOrganizationUserMutation = {
  variables: NavDeleteOrganizationUserMutationVariables;
  response: NavDeleteOrganizationUserMutation$data;
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
  "name": "rowId",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
v6 = {
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
    "name": "NavDeleteOrganizationUserMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteOrganizationUserPayload",
        "kind": "LinkedField",
        "name": "deleteOrganizationUser",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "OrganizationUser",
            "kind": "LinkedField",
            "name": "organizationUser",
            "plural": false,
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "Organization",
                "kind": "LinkedField",
                "name": "organizationByOrganizationId",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "userByUserId",
                    "plural": false,
                    "selections": [
                      (v6/*: any*/)
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
    "argumentDefinitions": [
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "NavDeleteOrganizationUserMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "DeleteOrganizationUserPayload",
        "kind": "LinkedField",
        "name": "deleteOrganizationUser",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "OrganizationUser",
            "kind": "LinkedField",
            "name": "organizationUser",
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
              {
                "alias": null,
                "args": null,
                "concreteType": "Organization",
                "kind": "LinkedField",
                "name": "organizationByOrganizationId",
                "plural": false,
                "selections": [
                  (v4/*: any*/),
                  (v5/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "User",
                    "kind": "LinkedField",
                    "name": "userByUserId",
                    "plural": false,
                    "selections": [
                      (v6/*: any*/),
                      (v3/*: any*/)
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
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "4dac4ad90bd5b32f3f01de8055ad6aa4",
    "id": null,
    "metadata": {},
    "name": "NavDeleteOrganizationUserMutation",
    "operationKind": "mutation",
    "text": "mutation NavDeleteOrganizationUserMutation(\n  $input: DeleteOrganizationUserInput!\n) {\n  deleteOrganizationUser(input: $input) {\n    organizationUser {\n      id\n      organizationByOrganizationId {\n        rowId\n        slug\n        userByUserId {\n          email\n          id\n        }\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "2d21ea84b711a3e7f4465d3fad331ad1";

export default node;
