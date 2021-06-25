/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type DeleteTagInput = {|
  clientMutationId?: ?string,
  tagId: number,
|};
export type DeleteMessageTagInput = {|
  clientMutationId?: ?string,
  tagId: number,
|};
export type TagDeleteTagMutationVariables = {|
  tag: DeleteTagInput,
  messageTag: DeleteMessageTagInput,
  connections: $ReadOnlyArray<string>,
|};
export type TagDeleteTagMutationResponse = {|
  +deleteMessageTag: ?{|
    +messageTag: ?{|
      +id: string
    |}
  |},
  +deleteTag: ?{|
    +tag: ?{|
      +id: string
    |}
  |},
|};
export type TagDeleteTagMutation = {|
  variables: TagDeleteTagMutationVariables,
  response: TagDeleteTagMutationResponse,
|};
*/


/*
mutation TagDeleteTagMutation(
  $tag: DeleteTagInput!
  $messageTag: DeleteMessageTagInput!
) {
  deleteMessageTag(input: $messageTag) {
    messageTag {
      id
    }
  }
  deleteTag(input: $tag) {
    tag {
      id
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
  "name": "messageTag"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "tag"
},
v3 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "messageTag"
  }
],
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v5 = [
  (v4/*: any*/)
],
v6 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "tag"
  }
],
v7 = [
  (v4/*: any*/),
  {
    "alias": null,
    "args": null,
    "filters": null,
    "handle": "deleteEdge",
    "key": "",
    "kind": "ScalarHandle",
    "name": "id",
    "handleArgs": [
      {
        "kind": "Variable",
        "name": "connections",
        "variableName": "connections"
      }
    ]
  }
];
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "TagDeleteTagMutation",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "DeleteMessageTagPayload",
        "kind": "LinkedField",
        "name": "deleteMessageTag",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "MessageTag",
            "kind": "LinkedField",
            "name": "messageTag",
            "plural": false,
            "selections": (v5/*: any*/),
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v6/*: any*/),
        "concreteType": "DeleteTagPayload",
        "kind": "LinkedField",
        "name": "deleteTag",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Tag",
            "kind": "LinkedField",
            "name": "tag",
            "plural": false,
            "selections": (v5/*: any*/),
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
      (v2/*: any*/),
      (v1/*: any*/),
      (v0/*: any*/)
    ],
    "kind": "Operation",
    "name": "TagDeleteTagMutation",
    "selections": [
      {
        "alias": null,
        "args": (v3/*: any*/),
        "concreteType": "DeleteMessageTagPayload",
        "kind": "LinkedField",
        "name": "deleteMessageTag",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "MessageTag",
            "kind": "LinkedField",
            "name": "messageTag",
            "plural": false,
            "selections": (v7/*: any*/),
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v6/*: any*/),
        "concreteType": "DeleteTagPayload",
        "kind": "LinkedField",
        "name": "deleteTag",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Tag",
            "kind": "LinkedField",
            "name": "tag",
            "plural": false,
            "selections": (v7/*: any*/),
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "9c680b4a044cc94e296cefd7211e3030",
    "id": null,
    "metadata": {},
    "name": "TagDeleteTagMutation",
    "operationKind": "mutation",
    "text": "mutation TagDeleteTagMutation(\n  $tag: DeleteTagInput!\n  $messageTag: DeleteMessageTagInput!\n) {\n  deleteMessageTag(input: $messageTag) {\n    messageTag {\n      id\n    }\n  }\n  deleteTag(input: $tag) {\n    tag {\n      id\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '8257b40f6799e9eba215da9d645ecda6';

module.exports = node;
