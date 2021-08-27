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
  +allCategories: ?{|
    +__id: string,
    +edges: $ReadOnlyArray<{|
      +node: ?{|
        +tagsByCategoryId: {|
          +__id: string,
          +edges: $ReadOnlyArray<{|
            +node: ?{|
              +rowId: number,
              +name: ?string,
            |}
          |}>,
        |},
        +rowId: number,
        +name: ?string,
        +color: ?string,
        +organizationId: number,
        +sort: ?number,
      |}
    |}>,
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
  "name": "rowId",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v2 = {
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
  "name": "SidebarFragment_categories",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "orderBy",
          "value": "SORT_ASC"
        }
      ],
      "concreteType": "CategoriesConnection",
      "kind": "LinkedField",
      "name": "allCategories",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "CategoriesEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Category",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "TagsConnection",
                  "kind": "LinkedField",
                  "name": "tagsByCategoryId",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "TagsEdge",
                      "kind": "LinkedField",
                      "name": "edges",
                      "plural": true,
                      "selections": [
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": "Tag",
                          "kind": "LinkedField",
                          "name": "node",
                          "plural": false,
                          "selections": [
                            (v0/*: any*/),
                            (v1/*: any*/)
                          ],
                          "storageKey": null
                        }
                      ],
                      "storageKey": null
                    },
                    (v2/*: any*/)
                  ],
                  "storageKey": null
                },
                (v0/*: any*/),
                (v1/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "color",
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
                  "kind": "ScalarField",
                  "name": "sort",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        (v2/*: any*/)
      ],
      "storageKey": "allCategories(orderBy:\"SORT_ASC\")"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = 'e707371212faa159b69c3b682a5ba9f2';

module.exports = node;
