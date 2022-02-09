/**
 * @generated SignedSource<<381d5de076940c7cce3ca1ffa2af24d5>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type organization_Query$variables = {
  organization?: number | null;
};
export type organization_QueryVariables = organization_Query$variables;
export type organization_Query$data = {
  readonly query: {
    readonly " $fragmentSpreads": FragmentRefs<"OrganizationMenuFragment_organization" | "OrganizationMenuFragment_organizationUsers" | "OrganizationMenuFragment_userConfig" | "OrganizationMenuFragment_invite">;
  };
};
export type organization_QueryResponse = organization_Query$data;
export type organization_Query = {
  variables: organization_QueryVariables;
  response: organization_Query$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "organization"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "organization",
    "variableName": "organization"
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
  "name": "slug",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "organizationId",
        "variableName": "organization"
      }
    ],
    "kind": "ObjectValue",
    "name": "condition"
  }
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "organizationId",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "userByUserId",
  "plural": false,
  "selections": [
    (v7/*: any*/),
    (v4/*: any*/)
  ],
  "storageKey": null
},
v9 = {
  "kind": "ClientExtension",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "__id",
      "storageKey": null
    }
  ]
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "organization_Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Query",
        "kind": "LinkedField",
        "name": "query",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "OrganizationMenuFragment_organization"
          },
          {
            "args": (v1/*: any*/),
            "kind": "FragmentSpread",
            "name": "OrganizationMenuFragment_organizationUsers"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "OrganizationMenuFragment_userConfig"
          },
          {
            "args": (v1/*: any*/),
            "kind": "FragmentSpread",
            "name": "OrganizationMenuFragment_invite"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "organization_Query",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Query",
        "kind": "LinkedField",
        "name": "query",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "OrganizationsConnection",
            "kind": "LinkedField",
            "name": "allOrganizations",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "OrganizationsEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Organization",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v2/*: any*/),
                      (v3/*: any*/),
                      (v4/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v5/*: any*/),
            "concreteType": "OrganizationUsersConnection",
            "kind": "LinkedField",
            "name": "allOrganizationUsers",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "OrganizationUsersEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "OrganizationUser",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "userId",
                        "storageKey": null
                      },
                      (v6/*: any*/),
                      (v8/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Organization",
                        "kind": "LinkedField",
                        "name": "organizationByOrganizationId",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          (v3/*: any*/),
                          (v8/*: any*/),
                          (v4/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v4/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v9/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "UserConfigsConnection",
            "kind": "LinkedField",
            "name": "allUserConfigs",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "UserConfigsEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "UserConfig",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "defaultOrganization",
                        "storageKey": null
                      },
                      (v4/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v5/*: any*/),
            "concreteType": "InvitesConnection",
            "kind": "LinkedField",
            "name": "allInvites",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "InvitesEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Invite",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
                      (v6/*: any*/),
                      (v7/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v9/*: any*/)
            ],
            "storageKey": null
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "794e88756b9e41e1ebf98455128e3483",
    "id": null,
    "metadata": {},
    "name": "organization_Query",
    "operationKind": "query",
    "text": "query organization_Query(\n  $organization: Int\n) {\n  query {\n    ...OrganizationMenuFragment_organization\n    ...OrganizationMenuFragment_organizationUsers_1rgJoH\n    ...OrganizationMenuFragment_userConfig\n    ...OrganizationMenuFragment_invite_1rgJoH\n    id\n  }\n}\n\nfragment OrganizationMenuFragment_invite_1rgJoH on Query {\n  allInvites(condition: {organizationId: $organization}) {\n    edges {\n      node {\n        id\n        organizationId\n        email\n      }\n    }\n  }\n}\n\nfragment OrganizationMenuFragment_organization on Query {\n  allOrganizations {\n    edges {\n      node {\n        rowId\n        slug\n        id\n      }\n    }\n  }\n}\n\nfragment OrganizationMenuFragment_organizationUsers_1rgJoH on Query {\n  allOrganizationUsers(condition: {organizationId: $organization}) {\n    edges {\n      node {\n        userId\n        organizationId\n        userByUserId {\n          email\n          id\n        }\n        organizationByOrganizationId {\n          rowId\n          slug\n          userByUserId {\n            email\n            id\n          }\n          id\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment OrganizationMenuFragment_userConfig on Query {\n  allUserConfigs {\n    edges {\n      node {\n        defaultOrganization\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "c8d62e9e5dfdf82c8f430d311af5deaf";

export default node;
