/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type NavFragment_organization = {
    readonly allOrganizations: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly rowId: number;
                readonly slug: string | null;
            } | null;
        }>;
    } | null;
    readonly " $refType": "NavFragment_organization";
};
export type NavFragment_organization$data = NavFragment_organization;
export type NavFragment_organization$key = {
    readonly " $data"?: NavFragment_organization$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"NavFragment_organization">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NavFragment_organization",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "OrganizationsConnection",
      "kind": "LinkedField",
      "name": "allOrganizations",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "OrganizationsEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Organization",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "rowId",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "slug",
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
(node as any).hash = 'd3072876c7e88137c81479dd074cabba';
export default node;
