/**
 * @generated SignedSource<<15757c874e88fef4d9499a607104a5c0>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type SidebarFragment_messages$fragmentType: FragmentType;
export type SidebarFragment_messages$ref = SidebarFragment_messages$fragmentType;
export type SidebarFragment_messages$data = {|
  +tile: ?{|
    +edges: $ReadOnlyArray<{|
      +node: ?{|
        +messageTagsByMessageId: {|
          +__id: string,
          +edges: $ReadOnlyArray<{|
            +node: ?{|
              +messageId: number,
            |},
          |}>,
        |},
      |},
    |}>,
  |},
  +$fragmentType: SidebarFragment_messages$fragmentType,
|};
export type SidebarFragment_messages = SidebarFragment_messages$data;
export type SidebarFragment_messages$key = {
  +$data?: SidebarFragment_messages$data,
  +$fragmentSpreads: SidebarFragment_messages$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "organization"
    },
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "tag"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "SidebarFragment_messages",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "organizationId",
          "variableName": "organization"
        },
        {
          "kind": "Variable",
          "name": "tagId",
          "variableName": "tag"
        }
      ],
      "concreteType": "MessagesConnection",
      "kind": "LinkedField",
      "name": "tile",
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
                              "name": "messageId",
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
              "storageKey": null
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node/*: any*/).hash = "ae9df0156cc36bb914ac9b56f3744ba7";

module.exports = ((node/*: any*/)/*: Fragment<
  SidebarFragment_messages$fragmentType,
  SidebarFragment_messages$data,
>*/);
