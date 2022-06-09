/**
 * @generated SignedSource<<cc16b5b8a2bc6493c08a427e8fbd2a43>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CategoryFragment_organization$data = {
  readonly organizationDefault: number | null;
  readonly " $fragmentType": "CategoryFragment_organization";
};
export type CategoryFragment_organization$key = {
  readonly " $data"?: CategoryFragment_organization$data;
  readonly " $fragmentSpreads": FragmentRefs<"CategoryFragment_organization">;
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
  "name": "CategoryFragment_organization",
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

(node as any).hash = "fd5d6de4981f9ec4826c132a3c7e38a5";

export default node;
