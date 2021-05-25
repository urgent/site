/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type SidebarFragment_categories$ref: FragmentReference;
declare export opaque type SidebarFragment_categories$fragmentType: SidebarFragment_categories$ref;
export type SidebarFragment_categories = {|
  +category_connection: {|
    +edges: $ReadOnlyArray<{|
      +node: {|
        +tags: $ReadOnlyArray<{|
          +name: string
        |}>,
        +name: string,
        +color: ?string,
      |}
    |}>
  |},
  +$refType: SidebarFragment_categories$ref,
|};
export type SidebarFragment_categories$data = SidebarFragment_categories;
export type SidebarFragment_categories$key = {
  +$data?: SidebarFragment_categories$data,
  +$fragmentRefs: SidebarFragment_categories$ref,
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
  "name": "SidebarFragment_categories",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "categoryConnection",
      "kind": "LinkedField",
      "name": "category_connection",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "categoryEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "category",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "tag",
                  "kind": "LinkedField",
                  "name": "tags",
                  "plural": true,
                  "selections": [
                    (v0/*: any*/)
                  ],
                  "storageKey": null
                },
                (v0/*: any*/),
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
  "type": "query_root",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = '6a606963ccf7dbcdb41f7e05227bcd80';

module.exports = node;
