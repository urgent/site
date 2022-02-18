/**
 * @generated SignedSource<<5e2290883dcf37091d071c67eb357e58>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Tag_messageFragment$data = {
  readonly query: {
    readonly messageByRowId: {
      readonly content: string | null;
    } | null;
  };
  readonly " $fragmentType": "Tag_messageFragment";
};
export type Tag_messageFragment = Tag_messageFragment$data;
export type Tag_messageFragment$key = {
  readonly " $data"?: Tag_messageFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"Tag_messageFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "message"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "Tag_messageFragment",
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
              "variableName": "message"
            }
          ],
          "concreteType": "Message",
          "kind": "LinkedField",
          "name": "messageByRowId",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "content",
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

(node as any).hash = "c5fe06fab868e837737ab2312eb83a93";

export default node;
