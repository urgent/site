/**
 * @generated SignedSource<<46a8f10c8a5f35950763f8b10c13f81b>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Category_categoryTagFragment$data = {
  readonly query: {
    readonly categoryByRowId: {
      readonly rowId: number;
      readonly name: string | null;
      readonly color: string | null;
      readonly sort: number | null;
    } | null;
  };
  readonly " $fragmentType": "Category_categoryTagFragment";
};
export type Category_categoryTagFragment = Category_categoryTagFragment$data;
export type Category_categoryTagFragment$key = {
  readonly " $data"?: Category_categoryTagFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"Category_categoryTagFragment">;
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
  "name": "Category_categoryTagFragment",
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

(node as any).hash = "17c5599404136d95edefb59056d390ba";

export default node;
