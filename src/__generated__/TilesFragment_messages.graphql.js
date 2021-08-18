/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type TilesFragment_messages$ref: FragmentReference;
declare export opaque type TilesFragment_messages$fragmentType: TilesFragment_messages$ref;
export type TilesFragment_messages = {|
  +allMessages: ?{|
    +__id: string,
    +edges: $ReadOnlyArray<{|
      +node: ?{|
        +rowId: number,
        +content: ?string,
        +organizationId: number,
        +messageTagsByMessageId: {|
          +__id: string,
          +edges: $ReadOnlyArray<{|
            +node: ?{|
              +__id: string,
              +tagId: number,
              +messageId: number,
              +tagByTagId: ?{|
                +__id: string,
                +rowId: number,
                +name: ?string,
                +categoryByCategoryId: ?{|
                  +color: ?string
                |},
              |},
            |}
          |}>,
        |},
      |}
    |}>,
  |},
  +$refType: TilesFragment_messages$ref,
|};
export type TilesFragment_messages$data = TilesFragment_messages;
export type TilesFragment_messages$key = {
  +$data?: TilesFragment_messages$data,
  +$fragmentRefs: TilesFragment_messages$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rowId",
  "storageKey": null
},
v1 = {
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
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TilesFragment_messages",
  "selections": [
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
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "organizationId",
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
                                {
                                  "alias": null,
                                  "args": null,
                                  "kind": "ScalarField",
                                  "name": "name",
                                  "storageKey": null
                                },
                                {
                                  "alias": null,
                                  "args": null,
                                  "concreteType": "Category",
                                  "kind": "LinkedField",
                                  "name": "categoryByCategoryId",
                                  "plural": false,
                                  "selections": [
                                    {
                                      "alias": null,
                                      "args": null,
                                      "kind": "ScalarField",
                                      "name": "color",
                                      "storageKey": null
                                    }
                                  ],
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
        (v1/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = '9add9d2b3f513ff460ab4191ea39d1f4';

module.exports = node;
