/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
import type { MainWrapperFragment_messages$ref } from "./MainWrapperFragment_messages.graphql";
export type pages_HomeQueryVariables = {||};
export type pages_HomeQueryResponse = {|
  +$fragmentRefs: MainWrapperFragment_messages$ref
|};
export type pages_HomeQuery = {|
  variables: pages_HomeQueryVariables,
  response: pages_HomeQueryResponse,
|};
*/


/*
query pages_HomeQuery {
  ...MainWrapperFragment_messages
}

fragment MainWrapperFragment_messages on query_root {
  messages_connection {
    edges {
      node {
        message
        id
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "pages_HomeQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "MainWrapperFragment_messages"
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
        "concreteType": "messagesConnection",
        "kind": "LinkedField",
        "name": "messages_connection",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "messagesEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "messages",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "message",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
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
    ]
  },
  "params": {
    "cacheID": "7fbf7a9f8cbfc8b39e6b6bf64c097118",
    "id": null,
    "metadata": {},
    "name": "pages_HomeQuery",
    "operationKind": "query",
    "text": "query pages_HomeQuery {\n  ...MainWrapperFragment_messages\n}\n\nfragment MainWrapperFragment_messages on query_root {\n  messages_connection {\n    edges {\n      node {\n        message\n        id\n      }\n    }\n  }\n}\n"
  }
};
// prettier-ignore
(node/*: any*/).hash = 'b8ad24b4a70f3aef8b58ac1b04e2682d';

module.exports = node;
