/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type SidebarFragment_categories = {
    readonly allCategories: {
        readonly __id: string;
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly tagsByCategoryId: {
                    readonly __id: string;
                    readonly edges: ReadonlyArray<{
                        readonly node: {
                            readonly rowId: number;
                            readonly name: string | null;
                        } | null;
                    }>;
                };
                readonly rowId: number;
                readonly name: string | null;
                readonly color: string | null;
                readonly organizationId: number;
                readonly configCategoriesByCategoryId: {
                    readonly edges: ReadonlyArray<{
                        readonly node: {
                            readonly collapse: boolean | null;
                            readonly sort: number | null;
                        } | null;
                    }>;
                };
            } | null;
        }>;
    } | null;
    readonly " $refType": "SidebarFragment_categories";
};
export type SidebarFragment_categories$data = SidebarFragment_categories;
export type SidebarFragment_categories$key = {
    readonly " $data"?: SidebarFragment_categories$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"SidebarFragment_categories">;
};



const node: ReaderFragment = (function(){
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
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();
(node as any).hash = 'e2c116e773c811178e089817d399639c';
export default node;
