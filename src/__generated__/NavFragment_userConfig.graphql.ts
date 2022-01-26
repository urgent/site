/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type NavFragment_userConfig = {
    readonly allUserConfigs: {
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly defaultOrganization: number;
            } | null;
        }>;
    } | null;
    readonly " $refType": "NavFragment_userConfig";
};
export type NavFragment_userConfig$data = NavFragment_userConfig;
export type NavFragment_userConfig$key = {
    readonly " $data"?: NavFragment_userConfig$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"NavFragment_userConfig">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NavFragment_userConfig",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "UserConfigsConnection",
      "kind": "LinkedField",
      "name": "allUserConfigs",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "UserConfigsEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "UserConfig",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "defaultOrganization",
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
(node as any).hash = 'dfb994149c2d6f72883abefbe7c20bc6';
export default node;
