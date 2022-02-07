/**
 * @generated SignedSource<<cf4457d274dce4a20f851309c633b016>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NavFragment_userConfig$data = {
  readonly allUserConfigs: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly defaultOrganization: number;
      } | null;
    }>;
  } | null;
  readonly " $fragmentType": "NavFragment_userConfig";
};
export type NavFragment_userConfig = NavFragment_userConfig$data;
export type NavFragment_userConfig$key = {
  readonly " $data"?: NavFragment_userConfig$data;
  readonly " $fragmentSpreads": FragmentRefs<"NavFragment_userConfig">;
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

(node as any).hash = "dfb994149c2d6f72883abefbe7c20bc6";

export default node;
