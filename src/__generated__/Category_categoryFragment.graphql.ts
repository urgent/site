/**
 * @generated SignedSource<<d140cc0a21c42e7fc2f1753f2d4df716>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Category_categoryFragment$data = {
  readonly query: {
    readonly categoryByRowId: {
      readonly name: string | null;
      readonly color: string | null;
      readonly sort: number | null;
    } | null;
  };
  readonly " $fragmentType": "Category_categoryFragment";
};
export type Category_categoryFragment = Category_categoryFragment$data;
export type Category_categoryFragment$key = {
  readonly " $data"?: Category_categoryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"Category_categoryFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "category"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "Category_categoryFragment",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "Query",
      "kind": "LinkedField",
      "name": "query",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": [
            {
              "kind": "Variable",
              "name": "rowId",
              "variableName": "category"
            }
          ],
          "concreteType": "Category",
          "kind": "LinkedField",
          "name": "categoryByRowId",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "name",
              "storageKey": null
            },
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
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "b2f7b0d2ec63976fe9c4d141afe1d287";

export default node;
