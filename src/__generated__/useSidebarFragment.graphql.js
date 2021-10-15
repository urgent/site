/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type useSidebarFragment$ref: FragmentReference;
declare export opaque type useSidebarFragment$fragmentType: useSidebarFragment$ref;
export type useSidebarFragment = {|
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
        +configCategoriesByCategoryId: {|
          +edges: $ReadOnlyArray<{|
            +node: ?{|
              +collapse: ?boolean,
              +sort: ?number,
            |}
          |}>
        |},
      |}
    |}>,
  |},
  +$refType: useSidebarFragment$ref,
|};
export type useSidebarFragment$data = useSidebarFragment;
export type useSidebarFragment$key = {
  +$data?: useSidebarFragment$data,
  +$fragmentRefs: useSidebarFragment$ref,
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
  "name": "useSidebarFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
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
                  "concreteType": "ConfigCategoriesConnection",
                  "kind": "LinkedField",
                  "name": "configCategoriesByCategoryId",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "ConfigCategoriesEdge",
                      "kind": "LinkedField",
                      "name": "edges",
                      "plural": true,
                      "selections": [
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": "ConfigCategory",
                          "kind": "LinkedField",
                          "name": "node",
                          "plural": false,
                          "selections": [
                            {
                              "alias": null,
                              "args": null,
                              "kind": "ScalarField",
                              "name": "collapse",
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
        (v2/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = 'f0518c627fa5772a4049351eb0eb31ff';

module.exports = node;
