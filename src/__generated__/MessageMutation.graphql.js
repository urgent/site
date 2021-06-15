/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateMessageTagInput = {|
  clientMutationId?: ?string,
  messageId: number,
  tagId: number,
|};
export type MessageMutationVariables = {|
  input: CreateMessageTagInput,
  connections: $ReadOnlyArray<string>,
|};
export type MessageMutationResponse = {|
  +createMessageTag: ?{|
    +messageTag: ?{|
      +tagByTagId: ?{|
        +name: ?string
      |}
    |}
  |}
|};
export type MessageMutation = {|
  variables: MessageMutationVariables,
  response: MessageMutationResponse,
|};
*/


/*
mutation MessageMutation(
  $input: CreateMessageTagInput!
) {
  createMessageTag(input: $input) {
    messageTag {
      tagByTagId {
        name
        id
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
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
  "name": "name",
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
    "name": "MessageMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateMessageTagPayload",
        "kind": "LinkedField",
        "name": "createMessageTag",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "MessageTag",
            "kind": "LinkedField",
            "name": "messageTag",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Tag",
                "kind": "LinkedField",
                "name": "tagByTagId",
                "plural": false,
                "selections": [
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
    "name": "MessageMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
        "concreteType": "CreateMessageTagPayload",
        "kind": "LinkedField",
        "name": "createMessageTag",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "MessageTag",
            "kind": "LinkedField",
            "name": "messageTag",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Tag",
                "kind": "LinkedField",
                "name": "tagByTagId",
                "plural": false,
                "selections": [
                  (v3/*: any*/),
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
          },
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "appendNode",
            "key": "",
            "kind": "LinkedHandle",
            "name": "messageTag",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              },
              {
                "kind": "Literal",
                "name": "edgeTypeName",
                "value": "MessageTagsEdge"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "498e8194df19bd72363c337f710ddb4c",
    "id": null,
    "metadata": {},
    "name": "MessageMutation",
    "operationKind": "mutation",
    "text": "mutation MessageMutation(\n  $input: CreateMessageTagInput!\n) {\n  createMessageTag(input: $input) {\n    messageTag {\n      tagByTagId {\n        name\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '56c68f4e1d728b184b6ab53de120cf16';

module.exports = node;
