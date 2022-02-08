/**
 * @generated SignedSource<<531eff710b7cf745653ebf2ce25c1f3f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Tag_HomeQuery$variables = {
  organization?: number | null;
  tag?: ReadonlyArray<number | null> | null;
};
export type Tag_HomeQueryVariables = Tag_HomeQuery$variables;
export type Tag_HomeQuery$data = {
  readonly query: {
    readonly " $fragmentSpreads": FragmentRefs<"NavFragment_organization" | "NavFragment_organizationUsers" | "NavFragment_userConfig" | "NavFragment_invite" | "TilesFragment_messages" | "SidebarFragment_messages" | "SidebarFragment_categories">;
  };
};
export type Tag_HomeQueryResponse = Tag_HomeQuery$data;
export type Tag_HomeQuery = {
  variables: Tag_HomeQueryVariables;
  response: Tag_HomeQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "organization"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "tag"
  }
],
v1 = {
  "kind": "Variable",
  "name": "organization",
  "variableName": "organization"
},
v2 = [
  (v1/*: any*/)
],
v3 = [
  (v1/*: any*/),
  {
    "kind": "Variable",
    "name": "tag",
    "variableName": "tag"
  }
],
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
  "name": "id",
  "storageKey": null
},
v7 = {
  "kind": "Variable",
  "name": "organizationId",
  "variableName": "organization"
},
v8 = [
  {
    "fields": [
      (v7/*: any*/)
    ],
    "kind": "ObjectValue",
    "name": "condition"
  }
],
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "organizationId",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "userByUserId",
  "plural": false,
  "selections": [
    (v10/*: any*/),
    (v6/*: any*/)
  ],
  "storageKey": null
},
v12 = {
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
},
v13 = {
  "kind": "Variable",
  "name": "tagId",
  "variableName": "tag"
},
v14 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v15 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "color",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "Tag_HomeQuery",
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
            "name": "NavFragment_organization"
          },
          {
            "args": (v2/*: any*/),
            "kind": "FragmentSpread",
            "name": "NavFragment_organizationUsers"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "NavFragment_userConfig"
          },
          {
            "args": (v2/*: any*/),
            "kind": "FragmentSpread",
            "name": "NavFragment_invite"
          },
          {
            "args": (v3/*: any*/),
            "kind": "FragmentSpread",
            "name": "TilesFragment_messages"
          },
          {
            "args": (v3/*: any*/),
            "kind": "FragmentSpread",
            "name": "SidebarFragment_messages"
          },
          {
            "args": (v3/*: any*/),
            "kind": "FragmentSpread",
            "name": "SidebarFragment_categories"
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
    "name": "Tag_HomeQuery",
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
                      (v4/*: any*/),
                      (v5/*: any*/),
                      (v6/*: any*/)
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
            "args": (v8/*: any*/),
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
                      (v9/*: any*/),
                      (v11/*: any*/),
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
                          (v11/*: any*/),
                          (v6/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v6/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v12/*: any*/)
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
                      (v6/*: any*/)
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
            "args": (v8/*: any*/),
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
                      (v6/*: any*/),
                      (v9/*: any*/),
                      (v10/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v12/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": [
              (v7/*: any*/),
              (v13/*: any*/)
            ],
            "concreteType": "MessagesConnection",
            "kind": "LinkedField",
            "name": "tile",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "MessagesEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Message",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v4/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "content",
                        "storageKey": null
                      },
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "loomSharedUrl",
                        "storageKey": null
                      },
                      (v9/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "MessageTagsConnection",
                        "kind": "LinkedField",
                        "name": "messageTagsByMessageId",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "MessageTagsEdge",
                            "kind": "LinkedField",
                            "name": "edges",
                            "plural": true,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "MessageTag",
                                "kind": "LinkedField",
                                "name": "node",
                                "plural": false,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "tagId",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "messageId",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "Tag",
                                    "kind": "LinkedField",
                                    "name": "tagByTagId",
                                    "plural": false,
                                    "selections": [
                                      (v4/*: any*/),
                                      (v14/*: any*/),
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "Category",
                                        "kind": "LinkedField",
                                        "name": "categoryByCategoryId",
                                        "plural": false,
                                        "selections": [
                                          (v15/*: any*/),
                                          (v6/*: any*/)
                                        ],
                                        "storageKey": null
                                      },
                                      (v6/*: any*/),
                                      (v12/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  (v6/*: any*/),
                                  (v12/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          (v12/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v6/*: any*/)
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
            "args": (v8/*: any*/),
            "concreteType": "CategoriesConnection",
            "kind": "LinkedField",
            "name": "allCategories",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "CategoriesEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Category",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "TagsConnection",
                        "kind": "LinkedField",
                        "name": "tagsByCategoryId",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "TagsEdge",
                            "kind": "LinkedField",
                            "name": "edges",
                            "plural": true,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "Tag",
                                "kind": "LinkedField",
                                "name": "node",
                                "plural": false,
                                "selections": [
                                  (v4/*: any*/),
                                  (v14/*: any*/),
                                  (v6/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          (v12/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v4/*: any*/),
                      (v14/*: any*/),
                      (v15/*: any*/),
                      (v9/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "ConfigCategoriesConnection",
                        "kind": "LinkedField",
                        "name": "configCategoriesByCategoryId",
                        "plural": false,
                        "selections": [
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "ConfigCategoriesEdge",
                            "kind": "LinkedField",
                            "name": "edges",
                            "plural": true,
                            "selections": [
                              {
                                "alias": null,
                                "args": null,
                                "concreteType": "ConfigCategory",
                                "kind": "LinkedField",
                                "name": "node",
                                "plural": false,
                                "selections": [
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "collapse",
                                    "storageKey": null
                                  },
                                  {
                                    "alias": null,
                                    "args": null,
                                    "kind": "ScalarField",
                                    "name": "sort",
                                    "storageKey": null
                                  },
                                  (v6/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      (v6/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v12/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": [
              (v13/*: any*/)
            ],
            "concreteType": "TagsConnection",
            "kind": "LinkedField",
            "name": "sidebar",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "TagsEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Tag",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Category",
                        "kind": "LinkedField",
                        "name": "categoryByCategoryId",
                        "plural": false,
                        "selections": [
                          (v4/*: any*/),
                          (v6/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v6/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v6/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "7e80757bc66914e7e905a891492cb344",
    "id": null,
    "metadata": {},
    "name": "Tag_HomeQuery",
    "operationKind": "query",
    "text": "query Tag_HomeQuery(\n  $organization: Int\n  $tag: [Int]\n) {\n  query {\n    ...NavFragment_organization\n    ...NavFragment_organizationUsers_1rgJoH\n    ...NavFragment_userConfig\n    ...NavFragment_invite_1rgJoH\n    ...TilesFragment_messages_46bejI\n    ...SidebarFragment_messages_46bejI\n    ...SidebarFragment_categories_46bejI\n    id\n  }\n}\n\nfragment NavFragment_invite_1rgJoH on Query {\n  allInvites(condition: {organizationId: $organization}) {\n    edges {\n      node {\n        id\n        organizationId\n        email\n      }\n    }\n  }\n}\n\nfragment NavFragment_organization on Query {\n  allOrganizations {\n    edges {\n      node {\n        rowId\n        slug\n        id\n      }\n    }\n  }\n}\n\nfragment NavFragment_organizationUsers_1rgJoH on Query {\n  allOrganizationUsers(condition: {organizationId: $organization}) {\n    edges {\n      node {\n        userId\n        organizationId\n        userByUserId {\n          email\n          id\n        }\n        organizationByOrganizationId {\n          rowId\n          slug\n          userByUserId {\n            email\n            id\n          }\n          id\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment NavFragment_userConfig on Query {\n  allUserConfigs {\n    edges {\n      node {\n        defaultOrganization\n        id\n      }\n    }\n  }\n}\n\nfragment SidebarFragment_categories_46bejI on Query {\n  allCategories(condition: {organizationId: $organization}) {\n    edges {\n      node {\n        tagsByCategoryId {\n          edges {\n            node {\n              rowId\n              name\n              id\n            }\n          }\n        }\n        rowId\n        name\n        color\n        organizationId\n        configCategoriesByCategoryId {\n          edges {\n            node {\n              collapse\n              sort\n              id\n            }\n          }\n        }\n        id\n      }\n    }\n  }\n  sidebar(tagId: $tag) {\n    edges {\n      node {\n        categoryByCategoryId {\n          rowId\n          id\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment SidebarFragment_messages_46bejI on Query {\n  tile(organizationId: $organization, tagId: $tag) {\n    edges {\n      node {\n        messageTagsByMessageId {\n          edges {\n            node {\n              messageId\n              id\n            }\n          }\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment TilesFragment_messages_46bejI on Query {\n  tile(organizationId: $organization, tagId: $tag) {\n    edges {\n      node {\n        rowId\n        content\n        loomSharedUrl\n        organizationId\n        messageTagsByMessageId {\n          edges {\n            node {\n              tagId\n              messageId\n              tagByTagId {\n                rowId\n                name\n                categoryByCategoryId {\n                  color\n                  id\n                }\n                id\n              }\n              id\n            }\n          }\n        }\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "d52a1653cae4a72881d35062e86d7fab";

export default node;
