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
        +content: string,
        +message_tags: $ReadOnlyArray<{|
          +tag: {|
            +name: string,
            +category: {|
              +name: string
            |},
          |}
        |}>,
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


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
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
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "message_tag",
                  "kind": "LinkedField",
                  "name": "message_tags",
                  "plural": true,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "tag",
                      "kind": "LinkedField",
                      "name": "tag",
                      "plural": false,
                      "selections": [
                        (v0/*: any*/),
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": "category",
                          "kind": "LinkedField",
                          "name": "category",
                          "plural": false,
                          "selections": [
                            (v0/*: any*/)
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
    }
  ],
  "type": "query_root",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = 'd1f04bf5e84d9087d4a64c04cc850bb1';

module.exports = node;
