/**
 * @generated SignedSource<<a2220ee3a3dc80706cfd541c6f4f636f>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type SidebarFragment_categories$fragmentType: FragmentType;
export type SidebarFragment_categories$ref = SidebarFragment_categories$fragmentType;
export type SidebarFragment_categories$data = {|
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
            |},
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
            |},
          |}>,
        |},
      |},
    |}>,
  |},
  +sidebar: ?{|
    +edges: $ReadOnlyArray<{|
      +node: ?{|
        +categoryByCategoryId: ?{|
          +rowId: number,
        |},
      |},
    |}>,
  |},
  +$fragmentType: SidebarFragment_categories$fragmentType,
|};
export type SidebarFragment_categories = SidebarFragment_categories$data;
export type SidebarFragment_categories$key = {
  +$data?: SidebarFragment_categories$data,
  +$fragmentSpreads: SidebarFragment_categories$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = (function(){
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
  "name": "SidebarFragment_categories",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "fields": [
            {
              "kind": "Variable",
              "name": "organizationId",
              "variableName": "organization"
            }
          ],
          "kind": "ObjectValue",
          "name": "condition"
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
    },
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "tagId",
          "variableName": "tag"
        }
      ],
      "concreteType": "TagsConnection",
      "kind": "LinkedField",
      "name": "sidebar",
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
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "Category",
                  "kind": "LinkedField",
                  "name": "categoryByCategoryId",
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
  "type": "Query",
  "abstractKey": null
};
})();

(node/*: any*/).hash = "45d2638dda882e043c70cacee68cfb21";

module.exports = ((node/*: any*/)/*: Fragment<
  SidebarFragment_categories$fragmentType,
  SidebarFragment_categories$data,
>*/);
