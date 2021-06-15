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
        +messageTagsByMessageId: {|
          +__id: string,
          +edges: $ReadOnlyArray<{|
            +node: ?{|
              +tagByTagId: ?{|
                +rowId: number,
                +name: ?string,
                +categoryByCategoryId: ?{|
                  +color: ?string
                |},
              |}
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
(node/*: any*/).hash = '66c41a786d11324f4c4a4996ddb326c8';

module.exports = node;
