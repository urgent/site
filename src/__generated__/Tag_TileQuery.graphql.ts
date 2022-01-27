/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type Tag_TileQueryVariables = {};
export type Tag_TileQueryResponse = {
    readonly query: {
        readonly tile: {
            readonly " $fragmentRefs": FragmentRefs<"TilesFragment_messages" | "useSidebarFragment_messages">;
        } | null;
        readonly " $fragmentRefs": FragmentRefs<"NavFragment_organization" | "NavFragment_organizationUsers" | "NavFragment_userConfig" | "useSidebarFragment_categories" | "NavFragment_invite">;
    };
};
export type Tag_TileQuery = {
    readonly response: Tag_TileQueryResponse;
    readonly variables: Tag_TileQueryVariables;
};



/*
query Tag_TileQuery {
  query {
    ...NavFragment_organization
    ...NavFragment_organizationUsers
    ...NavFragment_userConfig
    ...useSidebarFragment_categories
    ...NavFragment_invite
    tile(organizationId: 1, tagId: [169, 108]) {
      ...TilesFragment_messages
      ...useSidebarFragment_messages
    }
    id
  }
}

fragment NavFragment_invite on Query {
  allInvites {
    edges {
      node {
        id
        organizationId
        email
      }
    }
  }
}

fragment NavFragment_organization on Query {
  allOrganizations {
    edges {
      node {
        rowId
        slug
        id
      }
    }
  }
}

fragment NavFragment_organizationUsers on Query {
  allOrganizationUsers {
    edges {
      node {
        userId
        organizationId
        userByUserId {
          email
          id
        }
        organizationByOrganizationId {
          rowId
          slug
          userByUserId {
            email
            id
          }
          id
        }
        id
      }
    }
  }
}

fragment NavFragment_userConfig on Query {
  allUserConfigs {
    edges {
      node {
        defaultOrganization
        id
      }
    }
  }
}

fragment TilesFragment_messages on MessagesConnection {
  edges {
    node {
      rowId
      content
      loomSharedUrl
      organizationId
      messageTagsByMessageId {
        edges {
          node {
            tagId
            messageId
            tagByTagId {
              rowId
              name
              categoryByCategoryId {
                color
                id
              }
              id
            }
            id
          }
        }
      }
      id
    }
  }
}

fragment useSidebarFragment_categories on Query {
  allCategories {
    edges {
      node {
        tagsByCategoryId {
          edges {
            node {
              rowId
              name
              id
            }
          }
        }
        rowId
        name
        color
        organizationId
        configCategoriesByCategoryId {
          edges {
            node {
              collapse
              sort
              id
            }
          }
        }
        id
      }
    }
  }
}

fragment useSidebarFragment_messages on MessagesConnection {
  edges {
    node {
      messageTagsByMessageId {
        edges {
          node {
            messageId
            id
          }
        }
      }
      id
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "organizationId",
    "value": 1
  },
  {
    "kind": "Literal",
    "name": "tagId",
    "value": [
      169,
      108
    ]
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rowId",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "slug",
  "storageKey": null
},
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
},
v6 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "userByUserId",
  "plural": false,
  "selections": [
    (v5/*: any*/),
    (v3/*: any*/)
  ],
  "storageKey": null
},
v7 = {
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
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "color",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "Tag_TileQuery",
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
            "args": (v0/*: any*/),
            "concreteType": "MessagesConnection",
            "kind": "LinkedField",
            "name": "tile",
            "plural": false,
            "selections": [
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "TilesFragment_messages"
              },
              {
                "args": null,
                "kind": "FragmentSpread",
                "name": "useSidebarFragment_messages"
              }
            ],
            "storageKey": "tile(organizationId:1,tagId:[169,108])"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "NavFragment_organization"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "NavFragment_organizationUsers"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "NavFragment_userConfig"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "useSidebarFragment_categories"
          },
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "NavFragment_invite"
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "Tag_TileQuery",
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
                      (v1/*: any*/),
                      (v2/*: any*/),
                      (v3/*: any*/)
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
            "args": null,
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
                      (v4/*: any*/),
                      (v6/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Organization",
                        "kind": "LinkedField",
                        "name": "organizationByOrganizationId",
                        "plural": false,
                        "selections": [
                          (v1/*: any*/),
                          (v2/*: any*/),
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
              },
              (v7/*: any*/)
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
                      (v3/*: any*/)
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
            "args": null,
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
                                  (v1/*: any*/),
                                  (v8/*: any*/),
                                  (v3/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          (v7/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v1/*: any*/),
                      (v8/*: any*/),
                      (v9/*: any*/),
                      (v4/*: any*/),
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
                                  (v3/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      (v3/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v7/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
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
                      (v3/*: any*/),
                      (v4/*: any*/),
                      (v5/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              (v7/*: any*/)
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v0/*: any*/),
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
                      (v1/*: any*/),
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
                      (v4/*: any*/),
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
                                      (v1/*: any*/),
                                      (v8/*: any*/),
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "Category",
                                        "kind": "LinkedField",
                                        "name": "categoryByCategoryId",
                                        "plural": false,
                                        "selections": [
                                          (v9/*: any*/),
                                          (v3/*: any*/)
                                        ],
                                        "storageKey": null
                                      },
                                      (v3/*: any*/),
                                      (v7/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  (v3/*: any*/),
                                  (v7/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          },
                          (v7/*: any*/)
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
            "storageKey": "tile(organizationId:1,tagId:[169,108])"
          },
          (v3/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "f0ac7774888af5c25910e7ff33070bb3",
    "id": null,
    "metadata": {},
    "name": "Tag_TileQuery",
    "operationKind": "query",
    "text": "query Tag_TileQuery {\n  query {\n    ...NavFragment_organization\n    ...NavFragment_organizationUsers\n    ...NavFragment_userConfig\n    ...useSidebarFragment_categories\n    ...NavFragment_invite\n    tile(organizationId: 1, tagId: [169, 108]) {\n      ...TilesFragment_messages\n      ...useSidebarFragment_messages\n    }\n    id\n  }\n}\n\nfragment NavFragment_invite on Query {\n  allInvites {\n    edges {\n      node {\n        id\n        organizationId\n        email\n      }\n    }\n  }\n}\n\nfragment NavFragment_organization on Query {\n  allOrganizations {\n    edges {\n      node {\n        rowId\n        slug\n        id\n      }\n    }\n  }\n}\n\nfragment NavFragment_organizationUsers on Query {\n  allOrganizationUsers {\n    edges {\n      node {\n        userId\n        organizationId\n        userByUserId {\n          email\n          id\n        }\n        organizationByOrganizationId {\n          rowId\n          slug\n          userByUserId {\n            email\n            id\n          }\n          id\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment NavFragment_userConfig on Query {\n  allUserConfigs {\n    edges {\n      node {\n        defaultOrganization\n        id\n      }\n    }\n  }\n}\n\nfragment TilesFragment_messages on MessagesConnection {\n  edges {\n    node {\n      rowId\n      content\n      loomSharedUrl\n      organizationId\n      messageTagsByMessageId {\n        edges {\n          node {\n            tagId\n            messageId\n            tagByTagId {\n              rowId\n              name\n              categoryByCategoryId {\n                color\n                id\n              }\n              id\n            }\n            id\n          }\n        }\n      }\n      id\n    }\n  }\n}\n\nfragment useSidebarFragment_categories on Query {\n  allCategories {\n    edges {\n      node {\n        tagsByCategoryId {\n          edges {\n            node {\n              rowId\n              name\n              id\n            }\n          }\n        }\n        rowId\n        name\n        color\n        organizationId\n        configCategoriesByCategoryId {\n          edges {\n            node {\n              collapse\n              sort\n              id\n            }\n          }\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment useSidebarFragment_messages on MessagesConnection {\n  edges {\n    node {\n      messageTagsByMessageId {\n        edges {\n          node {\n            messageId\n            id\n          }\n        }\n      }\n      id\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'b4cf18d59f7d429c76bfa9866238b9cc';
export default node;
