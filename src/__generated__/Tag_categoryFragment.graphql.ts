/**
 * @generated SignedSource<<eb1acb05fc63a3c2bfebba40ac5aa02b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Tag_categoryFragment$data = {
  readonly query: {
    readonly categoryByRowId: {
      readonly name: string | null;
      readonly color: string | null;
      readonly sort: number | null;
    } | null;
  };
  readonly " $fragmentType": "Tag_categoryFragment";
};
export type Tag_categoryFragment = Tag_categoryFragment$data;
export type Tag_categoryFragment$key = {
  readonly " $data"?: Tag_categoryFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"Tag_categoryFragment">;
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
  "name": "Tag_categoryFragment",
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

(node as any).hash = "e8d6eeae5385588067f12bbd44f457c8";

export default node;
