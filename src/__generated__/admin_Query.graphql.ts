/**
 * @generated SignedSource<<5563d9ad4b62c5545bb74adbe9d446d1>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type admin_Query$variables = {
  organization?: number | null;
};
export type admin_Query$data = {
  readonly query: {
    readonly " $fragmentSpreads": FragmentRefs<"OrganizationMenuFragment_organization" | "OrganizationMenuFragment_organizationUsers" | "OrganizationMenuFragment_userConfig" | "OrganizationMenuFragment_invite" | "NavFragment_organization" | "MessageFragment_organization" | "CategoryFragment_organization">;
  };
};
export type admin_Query = {
  variables: admin_Query$variables;
  response: admin_Query$data;
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
    "kind": "Variable",
    "name": "organizationId",
    "variableName": "organization"
  }
],
v6 = {
  "fields": (v5/*: any*/),
  "kind": "ObjectValue",
  "name": "condition"
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "organizationId",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "userByUserId",
  "plural": false,
  "selections": [
    (v8/*: any*/),
    (v4/*: any*/)
  ],
  "storageKey": null
},
v10 = {
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
    "name": "admin_Query",
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
          },
          {
            "args": (v1/*: any*/),
            "kind": "FragmentSpread",
            "name": "NavFragment_organization"
          },
          {
            "args": (v1/*: any*/),
            "kind": "FragmentSpread",
            "name": "MessageFragment_organization"
          },
          {
            "args": (v1/*: any*/),
            "kind": "FragmentSpread",
            "name": "CategoryFragment_organization"
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
    "name": "admin_Query",
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
            "args": [
              (v6/*: any*/)
            ],
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
                      (v2/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "userId",
                        "storageKey": null
                      },
                      (v7/*: any*/),
                      (v9/*: any*/),
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
                          (v9/*: any*/),
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
              (v10/*: any*/)
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
            "args": [
              (v6/*: any*/),
              {
                "kind": "Literal",
                "name": "orderBy",
                "value": "PRIMARY_KEY_ASC"
              }
            ],
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
                      (v2/*: any*/),
                      (v7/*: any*/),
                      (v8/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v10/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v5/*: any*/),
            "kind": "ScalarField",
            "name": "organizationDefault",
            "storageKey": null
          },
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "e0321be6dfdfd0ff4a176df0e8f1f24b",
    "id": null,
    "metadata": {},
    "name": "admin_Query",
    "operationKind": "query",
    "text": "query admin_Query(\n  $organization: Int\n) {\n  query {\n    ...OrganizationMenuFragment_organization\n    ...OrganizationMenuFragment_organizationUsers_1rgJoH\n    ...OrganizationMenuFragment_userConfig\n    ...OrganizationMenuFragment_invite_1rgJoH\n    ...NavFragment_organization_1rgJoH\n    ...MessageFragment_organization_1rgJoH\n    ...CategoryFragment_organization_1rgJoH\n    id\n  }\n}\n\nfragment CategoryFragment_organization_1rgJoH on Query {\n  organizationDefault(organizationId: $organization)\n}\n\nfragment MessageFragment_organization_1rgJoH on Query {\n  organizationDefault(organizationId: $organization)\n}\n\nfragment NavFragment_organization_1rgJoH on Query {\n  organizationDefault(organizationId: $organization)\n}\n\nfragment OrganizationMenuFragment_invite_1rgJoH on Query {\n  allInvites(condition: {organizationId: $organization}, orderBy: PRIMARY_KEY_ASC) {\n    edges {\n      node {\n        id\n        rowId\n        organizationId\n        email\n      }\n    }\n  }\n}\n\nfragment OrganizationMenuFragment_organization on Query {\n  allOrganizations {\n    edges {\n      node {\n        rowId\n        slug\n        id\n      }\n    }\n  }\n}\n\nfragment OrganizationMenuFragment_organizationUsers_1rgJoH on Query {\n  allOrganizationUsers(condition: {organizationId: $organization}) {\n    edges {\n      node {\n        rowId\n        userId\n        organizationId\n        userByUserId {\n          email\n          id\n        }\n        organizationByOrganizationId {\n          rowId\n          slug\n          userByUserId {\n            email\n            id\n          }\n          id\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment OrganizationMenuFragment_userConfig on Query {\n  allUserConfigs {\n    edges {\n      node {\n        defaultOrganization\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "1940d21a1356f75a0e26bd806387a95d";

export default node;
