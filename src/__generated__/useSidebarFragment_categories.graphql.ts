/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type useSidebarFragment_categories = {
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
    readonly " $refType": "useSidebarFragment_categories";
};
export type useSidebarFragment_categories$data = useSidebarFragment_categories;
export type useSidebarFragment_categories$key = {
    readonly " $data"?: useSidebarFragment_categories$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"useSidebarFragment_categories">;
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
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "useSidebarFragment_categories",
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
  "type": "CategoriesConnection",
  "abstractKey": null
};
})();
(node as any).hash = '826a75b39c79443a9f5fa464f62d49ac';
export default node;
