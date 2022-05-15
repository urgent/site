/**
 * @generated SignedSource<<6ea11af621c9e1bacadcfe7e1dbfa09f>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NavFragment_organization$data = {
  readonly organizationDefault: number | null;
  readonly " $fragmentType": "NavFragment_organization";
};
export type NavFragment_organization$key = {
  readonly " $data"?: NavFragment_organization$data;
  readonly " $fragmentSpreads": FragmentRefs<"NavFragment_organization">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "organization"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "NavFragment_organization",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "organizationId",
          "variableName": "organization"
        }
      ],
      "kind": "ScalarField",
      "name": "organizationDefault",
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "e2677b77c54f4bf6190f89e483ae628b";

export default node;
