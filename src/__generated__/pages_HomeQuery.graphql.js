/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
import type { NavFragment_organization$ref } from "./NavFragment_organization.graphql";
import type { SidebarFragment_categories$ref } from "./SidebarFragment_categories.graphql";
import type { SidebarFragment_messages$ref } from "./SidebarFragment_messages.graphql";
import type { TilesFragment_messages$ref } from "./TilesFragment_messages.graphql";
import type { pagesFragment_userConfig$ref } from "./pagesFragment_userConfig.graphql";
export type pages_HomeQueryVariables = {||};
export type pages_HomeQueryResponse = {|
  +$fragmentRefs: NavFragment_organization$ref & SidebarFragment_categories$ref & SidebarFragment_messages$ref & TilesFragment_messages$ref & pagesFragment_userConfig$ref
|};
export type pages_HomeQuery = {|
  variables: pages_HomeQueryVariables,
  response: pages_HomeQueryResponse,
|};
*/


/*
query pages_HomeQuery {
  ...NavFragment_organization
  ...SidebarFragment_categories
  ...SidebarFragment_messages
  ...TilesFragment_messages
  ...pagesFragment_userConfig
}

fragment NavFragment_organization on Query {
  allOrganizationUsers {
    edges {
      node {
        organizationByOrganizationId {
          rowId
          slug
          id
        }
      }
    }
  }
}

fragment SidebarFragment_categories on Query {
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
        id
      }
    }
  }
}

fragment SidebarFragment_messages on Query {
  allMessages {
    edges {
      node {
        rowId
        content
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
            }
          }
        }
        id
      }
    }
  }
}

fragment TilesFragment_messages on Query {
  allMessages {
    edges {
      node {
        rowId
        content
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
            }
          }
        }
        id
      }
    }
  }
}

fragment pagesFragment_userConfig on Query {
  allUserConfigs {
    edges {
      node {
        defaultOrganization
        id
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rowId",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
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
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "color",
  "storageKey": null
},
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "organizationId",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "pages_HomeQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "NavFragment_organization"
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "SidebarFragment_categories"
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "SidebarFragment_messages"
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "TilesFragment_messages"
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "pagesFragment_userConfig"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "pages_HomeQuery",
    "selections": [
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
                    "concreteType": "Organization",
                    "kind": "LinkedField",
                    "name": "organizationByOrganizationId",
                    "plural": false,
                    "selections": [
                      (v0/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "slug",
                        "storageKey": null
                      },
                      (v1/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v2/*: any*/)
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
                              (v0/*: any*/),
                              (v3/*: any*/),
                              (v1/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v0/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/),
                  (v1/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v2/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "MessagesConnection",
        "kind": "LinkedField",
        "name": "allMessages",
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
                  (v0/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "content",
                    "storageKey": null
                  },
                  (v5/*: any*/),
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
                                  (v0/*: any*/),
                                  (v3/*: any*/),
                                  {
                                    "alias": null,
                                    "args": null,
                                    "concreteType": "Category",
                                    "kind": "LinkedField",
                                    "name": "categoryByCategoryId",
                                    "plural": false,
                                    "selections": [
                                      (v4/*: any*/),
                                      (v1/*: any*/)
                                    ],
                                    "storageKey": null
                                  },
                                  (v1/*: any*/),
                                  (v2/*: any*/)
                                ],
                                "storageKey": null
                              },
                              (v2/*: any*/)
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      },
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  },
                  (v1/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          (v2/*: any*/)
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
                  (v1/*: any*/)
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
    "cacheID": "89738b0d29a0bd3bb5843f00edb68a2d",
    "id": null,
    "metadata": {},
    "name": "pages_HomeQuery",
    "operationKind": "query",
    "text": "query pages_HomeQuery {\n  ...NavFragment_organization\n  ...SidebarFragment_categories\n  ...SidebarFragment_messages\n  ...TilesFragment_messages\n  ...pagesFragment_userConfig\n}\n\nfragment NavFragment_organization on Query {\n  allOrganizationUsers {\n    edges {\n      node {\n        organizationByOrganizationId {\n          rowId\n          slug\n          id\n        }\n      }\n    }\n  }\n}\n\nfragment SidebarFragment_categories on Query {\n  allCategories {\n    edges {\n      node {\n        tagsByCategoryId {\n          edges {\n            node {\n              rowId\n              name\n              id\n            }\n          }\n        }\n        rowId\n        name\n        color\n        organizationId\n        id\n      }\n    }\n  }\n}\n\nfragment SidebarFragment_messages on Query {\n  allMessages {\n    edges {\n      node {\n        rowId\n        content\n        organizationId\n        messageTagsByMessageId {\n          edges {\n            node {\n              tagId\n              messageId\n              tagByTagId {\n                rowId\n                name\n                categoryByCategoryId {\n                  color\n                  id\n                }\n                id\n              }\n            }\n          }\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment TilesFragment_messages on Query {\n  allMessages {\n    edges {\n      node {\n        rowId\n        content\n        organizationId\n        messageTagsByMessageId {\n          edges {\n            node {\n              tagId\n              messageId\n              tagByTagId {\n                rowId\n                name\n                categoryByCategoryId {\n                  color\n                  id\n                }\n                id\n              }\n            }\n          }\n        }\n        id\n      }\n    }\n  }\n}\n\nfragment pagesFragment_userConfig on Query {\n  allUserConfigs {\n    edges {\n      node {\n        defaultOrganization\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f3d649d2c05f2ccd3d45827e6a66cee7';

module.exports = node;
