/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type MainWrapperFragment_messages$ref: FragmentReference;
declare export opaque type MainWrapperFragment_messages$fragmentType: MainWrapperFragment_messages$ref;
export type MainWrapperFragment_messages = {|
  +messages_connection: {|
    +edges: $ReadOnlyArray<{|
      +node: {|
        +message: string
      |}
    |}>
  |},
  +$refType: MainWrapperFragment_messages$ref,
|};
export type MainWrapperFragment_messages$data = MainWrapperFragment_messages;
export type MainWrapperFragment_messages$key = {
  +$data?: MainWrapperFragment_messages$data,
  +$fragmentRefs: MainWrapperFragment_messages$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MainWrapperFragment_messages",
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
  "type": "query_root",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = 'c0e1b468e0e05c31a368211c03eb843e';

module.exports = node;
