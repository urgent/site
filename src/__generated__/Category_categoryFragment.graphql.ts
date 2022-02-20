/**
 * @generated SignedSource<<c94d7454b8af26e4d56f3199f627740d>>
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
      readonly rowId: number;
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
              "name": "rowId",
              "storageKey": null
            },
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

(node as any).hash = "7c1dd4b02f60cdfd1b1434fd279b8e0a";

export default node;
