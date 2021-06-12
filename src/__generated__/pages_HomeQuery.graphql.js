/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
import type { SidebarFragment_categories$ref } from "./SidebarFragment_categories.graphql";
import type { TilesFragment_messages$ref } from "./TilesFragment_messages.graphql";
export type pages_HomeQueryVariables = {||};
export type pages_HomeQueryResponse = {|
  +$fragmentRefs: SidebarFragment_categories$ref & TilesFragment_messages$ref
|};
export type pages_HomeQuery = {|
  variables: pages_HomeQueryVariables,
  response: pages_HomeQueryResponse,
|};
*/


/*
query pages_HomeQuery {
  ...SidebarFragment_categories
  ...TilesFragment_messages
}

fragment SidebarFragment_categories on Query {
  allCategories {
    edges {
      node {
        tagsByCategoryId {
          edges {
            node {
              name
              id
            }
          }
        }
        name
        color
        id
      }
    }
  }
}

fragment TilesFragment_messages on Query {
  allMessages {
    edges {
      node {
        content
        messageTagsByMessageId {
          edges {
            node {
              tagByTagId {
                name
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
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = [
  (v0/*: any*/),
  (v1/*: any*/)
];
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
        "name": "SidebarFragment_categories"
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "TilesFragment_messages"
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
                            "selections": (v2/*: any*/),
                            "storageKey": null
                          }
                        ],
                        "storageKey": null
                      }
                    ],
                    "storageKey": null
                  },
                  (v0/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "color",
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
                                "concreteType": "Tag",
                                "kind": "LinkedField",
                                "name": "tagByTagId",
                                "plural": false,
                                "selections": (v2/*: any*/),
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
                  },
                  (v1/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
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
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "68137de173649e2aa2c3d46cef655047",
    "id": null,
    "metadata": {},
    "name": "pages_HomeQuery",
    "operationKind": "query",
    "text": "query pages_HomeQuery {\n  ...SidebarFragment_categories\n  ...TilesFragment_messages\n}\n\nfragment SidebarFragment_categories on Query {\n  allCategories {\n    edges {\n      node {\n        tagsByCategoryId {\n          edges {\n            node {\n              name\n              id\n            }\n          }\n        }\n        name\n        color\n        id\n      }\n    }\n  }\n}\n\nfragment TilesFragment_messages on Query {\n  allMessages {\n    edges {\n      node {\n        content\n        messageTagsByMessageId {\n          edges {\n            node {\n              tagByTagId {\n                name\n                id\n              }\n            }\n          }\n        }\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '94c81be56044e4bde25ae1f6185be8ed';

module.exports = node;
