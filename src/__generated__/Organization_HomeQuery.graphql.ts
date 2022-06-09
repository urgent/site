/**
 * @generated SignedSource<<92fccbda39ecc09cc0531d0625a6d3ce>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Organization_HomeQuery$variables = {
  organization?: number | null;
  tag?: ReadonlyArray<number | null> | null;
};
export type Organization_HomeQuery$data = {
  readonly query: {
    readonly " $fragmentSpreads": FragmentRefs<"TilesFragment_messages" | "SidebarFragment_messages" | "SidebarFragment_categories" | "NavFragment_organization" | "MessageFragment_tags" | "MessageFragment_organization" | "CategoryFragment_organization">;
  };
};
export type Organization_HomeQuery = {
  variables: Organization_HomeQuery$variables;
  response: Organization_HomeQuery$data;
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
v2 = {
  "kind": "Variable",
  "name": "tag",
  "variableName": "tag"
},
v3 = [
  (v1/*: any*/),
  (v2/*: any*/)
],
v4 = [
  (v1/*: any*/)
],
v5 = {
  "kind": "Variable",
  "name": "organizationId",
  "variableName": "organization"
},
v6 = {
  "kind": "Variable",
  "name": "tagId",
  "variableName": "tag"
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rowId",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "organizationId",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "color",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
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
v13 = [
  (v5/*: any*/)
],
v14 = [
  (v6/*: any*/)
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "Organization_HomeQuery",
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
          },
          {
            "args": (v4/*: any*/),
            "kind": "FragmentSpread",
            "name": "NavFragment_organization"
          },
          {
            "args": [
              (v2/*: any*/)
            ],
            "kind": "FragmentSpread",
            "name": "MessageFragment_tags"
          },
          {
            "args": (v4/*: any*/),
            "kind": "FragmentSpread",
            "name": "MessageFragment_organization"
          },
          {
            "args": (v4/*: any*/),
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
    "name": "Organization_HomeQuery",
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
            "args": [
              (v5/*: any*/),
              (v6/*: any*/)
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
                      (v7/*: any*/),
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
                      (v8/*: any*/),
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
                                      (v7/*: any*/),
                                      (v9/*: any*/),
                                      {
                                        "alias": null,
                                        "args": null,
                                        "concreteType": "Category",
                                        "kind": "LinkedField",
                                        "name": "categoryByCategoryId",
                                        "plural": false,
                                        "selections": [
                                          (v10/*: any*/),
                                          (v11/*: any*/)
                                        ],
                                        "storageKey": null
                                      },
                                      (v11/*: any*/),
                                      (v12/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
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
                      (v11/*: any*/)
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
            "args": (v13/*: any*/),
            "concreteType": "CategoriesConnection",
            "kind": "LinkedField",
            "name": "sidebarCategories",
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
                                  (v11/*: any*/),
                                  (v7/*: any*/),
                                  (v9/*: any*/)
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
                      (v7/*: any*/),
                      (v9/*: any*/),
                      (v10/*: any*/),
                      (v8/*: any*/),
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
                                  (v11/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      (v11/*: any*/)
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
            "args": (v14/*: any*/),
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
                          (v7/*: any*/),
                          (v11/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v11/*: any*/)
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
            "args": (v13/*: any*/),
            "kind": "ScalarField",
            "name": "organizationDefault",
            "storageKey": null
          },
          {
            "alias": null,
            "args": (v14/*: any*/),
            "concreteType": "TagsConnection",
            "kind": "LinkedField",
            "name": "routerTags",
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
                      (v7/*: any*/),
                      (v9/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "Category",
                        "kind": "LinkedField",
                        "name": "categoryByCategoryId",
                        "plural": false,
                        "selections": [
                          (v10/*: any*/),
                          (v8/*: any*/),
                          (v11/*: any*/)
                        ],
                        "storageKey": null
                      },
                      (v11/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v11/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "dfca36113e6fb294a314f8d074ae0b67",
    "id": null,
    "metadata": {},
    "name": "Organization_HomeQuery",
    "operationKind": "query",
    "text": "query Organization_HomeQuery(\n  $organization: Int\n  $tag: [Int]\n) {\n  query {\n    ...TilesFragment_messages_46bejI\n    ...SidebarFragment_messages_46bejI\n    ...SidebarFragment_categories_46bejI\n    ...NavFragment_organization_1rgJoH\n    ...MessageFragment_tags_1G22zq\n    ...MessageFragment_organization_1rgJoH\n    ...CategoryFragment_organization_1rgJoH\n    id\n  }\n}\n\nfragment CategoryFragment_organization_1rgJoH on Query {\n  organizationDefault(organizationId: $organization)\n}\n\nfragment MessageFragment_organization_1rgJoH on Query {\n  organizationDefault(organizationId: $organization)\n}\n\nfragment MessageFragment_tags_1G22zq on Query {\n  routerTags(tagId: $tag) {\n    edges {\n      node {\n        rowId\n        name\n        categoryByCategoryId {\n          color\n          organizationId\n          id\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment NavFragment_organization_1rgJoH on Query {\n  organizationDefault(organizationId: $organization)\n}\n\nfragment SidebarFragment_categories_46bejI on Query {\n  sidebarCategories(organizationId: $organization) {\n    edges {\n      node {\n        tagsByCategoryId {\n          edges {\n            node {\n              id\n              rowId\n              name\n            }\n          }\n        }\n        rowId\n        name\n        color\n        organizationId\n        configCategoriesByCategoryId {\n          edges {\n            node {\n              collapse\n              sort\n              id\n            }\n          }\n        }\n        id\n      }\n    }\n  }\n  sidebar(tagId: $tag) {\n    edges {\n      node {\n        categoryByCategoryId {\n          rowId\n          id\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment SidebarFragment_messages_46bejI on Query {\n  tile(organizationId: $organization, tagId: $tag) {\n    edges {\n      node {\n        rowId\n        messageTagsByMessageId {\n          edges {\n            node {\n              messageId\n            }\n          }\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment TilesFragment_messages_46bejI on Query {\n  tile(organizationId: $organization, tagId: $tag) {\n    edges {\n      node {\n        rowId\n        content\n        loomSharedUrl\n        organizationId\n        messageTagsByMessageId {\n          edges {\n            node {\n              tagId\n              messageId\n              tagByTagId {\n                rowId\n                name\n                categoryByCategoryId {\n                  color\n                  id\n                }\n                id\n              }\n            }\n          }\n        }\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "b39f3e0c6cfd9153dfb0737441df077c";

export default node;
