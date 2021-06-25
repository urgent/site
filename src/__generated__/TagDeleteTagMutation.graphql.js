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
export type TagDeleteTagMutationVariables = {|
  input: DeleteTagInput,
  connections: $ReadOnlyArray<string>,
|};
export type TagDeleteTagMutationResponse = {|
  +deleteTag: ?{|
    +tag: ?{|
      +id: string,
      +messageTagsByTagId: {|
        +nodes: $ReadOnlyArray<?{|
          +id: string
        |}>
      |},
    |}
  |}
|};
export type TagDeleteTagMutation = {|
  variables: TagDeleteTagMutationVariables,
  response: TagDeleteTagMutationResponse,
|};
*/


/*
mutation TagDeleteTagMutation(
  $input: DeleteTagInput!
) {
  deleteTag(input: $input) {
    tag {
      id
      messageTagsByTagId {
        nodes {
          id
        }
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
  "name": "id",
  "storageKey": null
},
v4 = {
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
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "TagDeleteTagMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
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
            "selections": [
              (v3/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "MessageTagsConnection",
                "kind": "LinkedField",
                "name": "messageTagsByTagId",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "MessageTag",
                    "kind": "LinkedField",
                    "name": "nodes",
                    "plural": true,
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
    "name": "TagDeleteTagMutation",
    "selections": [
      {
        "alias": null,
        "args": (v2/*: any*/),
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
            "selections": [
              (v3/*: any*/),
              (v4/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "MessageTagsConnection",
                "kind": "LinkedField",
                "name": "messageTagsByTagId",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "MessageTag",
                    "kind": "LinkedField",
                    "name": "nodes",
                    "plural": true,
                    "selections": [
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
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "4081b7c55b450a80220d9a37a7808c30",
    "id": null,
    "metadata": {},
    "name": "TagDeleteTagMutation",
    "operationKind": "mutation",
    "text": "mutation TagDeleteTagMutation(\n  $input: DeleteTagInput!\n) {\n  deleteTag(input: $input) {\n    tag {\n      id\n      messageTagsByTagId {\n        nodes {\n          id\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '46c346261a2f914f7acbd20e09e110e6';

module.exports = node;
