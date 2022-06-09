/**
 * @generated SignedSource<<2d5d9d983594e66531a54e350612b2a7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MessageFragment_organization$data = {
  readonly organizationDefault: number | null;
  readonly " $fragmentType": "MessageFragment_organization";
};
export type MessageFragment_organization$key = {
  readonly " $data"?: MessageFragment_organization$data;
  readonly " $fragmentSpreads": FragmentRefs<"MessageFragment_organization">;
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
  "name": "MessageFragment_organization",
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

(node as any).hash = "d7e42be7592a14855daa5f642b7f6bac";

export default node;
