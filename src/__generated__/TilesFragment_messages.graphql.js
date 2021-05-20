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
  +message_connection: {|
    +edges: $ReadOnlyArray<{|
      +node: {|
        +content: string
      |}
    |}>
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
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "content",
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
(node/*: any*/).hash = '8ed8908bcf631b3700b1de33e3062488';

module.exports = node;
