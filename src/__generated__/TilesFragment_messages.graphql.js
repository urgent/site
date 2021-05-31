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
        +content: ?string,
        +messageTagsByMessageId: {|
          +edges: $ReadOnlyArray<{|
            +node: ?{|
              +tagByTagId: ?{|
                +name: ?string
              |}
            |}
          |}>
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


const node/*: ReaderFragment*/ = {
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
                                {
                                  "alias": null,
                                  "args": null,
                                  "kind": "ScalarField",
                                  "name": "name",
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
                }
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
  ],
  "type": "Query",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '258095c3e0dc1b818721e0f2ddaab802';

module.exports = node;
