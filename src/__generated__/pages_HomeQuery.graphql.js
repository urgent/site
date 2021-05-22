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
  +message_connection: {|
    +edges: $ReadOnlyArray<{|
      +node: {|
        +content: string
      |}
    |}>
  |},
  +$fragmentRefs: SidebarFragment_categories$ref & TilesFragment_messages$ref,
|};
export type pages_HomeQuery = {|
  variables: pages_HomeQueryVariables,
  response: pages_HomeQueryResponse,
|};
*/


/*
query pages_HomeQuery {
  message_connection {
    edges {
      node {
        content
        id
      }
    }
  }
  ...SidebarFragment_categories
  ...TilesFragment_messages
}

fragment SidebarFragment_categories on query_root {
  category_connection {
    edges {
      node {
        tags {
          name
          id
        }
        name
        id
      }
    }
  }
}

fragment TilesFragment_messages on query_root {
  message_connection {
    edges {
      node {
        content
        message_tags {
          tag {
            name
            category {
              name
              id
            }
            id
          }
          id
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
  "name": "content",
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = [
  (v2/*: any*/),
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
        "alias": null,
        "args": null,
        "concreteType": "messageConnection",
        "kind": "LinkedField",
        "name": "message_connection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "messageEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "message",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v0/*: any*/)
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
    "type": "query_root",
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
        "concreteType": "messageConnection",
        "kind": "LinkedField",
        "name": "message_connection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "messageEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "message",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  (v0/*: any*/),
                  (v1/*: any*/),
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "message_tag",
                    "kind": "LinkedField",
                    "name": "message_tags",
                    "plural": true,
                    "selections": [
                      {
                        "alias": null,
                        "args": null,
                        "concreteType": "tag",
                        "kind": "LinkedField",
                        "name": "tag",
                        "plural": false,
                        "selections": [
                          (v2/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "concreteType": "category",
                            "kind": "LinkedField",
                            "name": "category",
                            "plural": false,
                            "selections": (v3/*: any*/),
                            "storageKey": null
                          },
                          (v1/*: any*/)
                        ],
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
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "categoryConnection",
        "kind": "LinkedField",
        "name": "category_connection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "categoryEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "category",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "tag",
                    "kind": "LinkedField",
                    "name": "tags",
                    "plural": true,
                    "selections": (v3/*: any*/),
                    "storageKey": null
                  },
                  (v2/*: any*/),
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
    "cacheID": "c6c8d8e3e53b9721eec0b1be75502937",
    "id": null,
    "metadata": {},
    "name": "pages_HomeQuery",
    "operationKind": "query",
    "text": "query pages_HomeQuery {\n  message_connection {\n    edges {\n      node {\n        content\n        id\n      }\n    }\n  }\n  ...SidebarFragment_categories\n  ...TilesFragment_messages\n}\n\nfragment SidebarFragment_categories on query_root {\n  category_connection {\n    edges {\n      node {\n        tags {\n          name\n          id\n        }\n        name\n        id\n      }\n    }\n  }\n}\n\nfragment TilesFragment_messages on query_root {\n  message_connection {\n    edges {\n      node {\n        content\n        message_tags {\n          tag {\n            name\n            category {\n              name\n              id\n            }\n            id\n          }\n          id\n        }\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fdac9f88820eaed61d2108f704c4254c';

module.exports = node;
