/**
 * @generated SignedSource<<524b15bf903940c484a8e206ada5b514>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type MessageFragment_tags$data = {
  readonly routerTags: {
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly rowId: number;
        readonly name: string | null;
        readonly categoryByCategoryId: {
          readonly color: string | null;
          readonly organizationId: number;
        } | null;
      } | null;
    }>;
  } | null;
  readonly " $fragmentType": "MessageFragment_tags";
};
export type MessageFragment_tags = MessageFragment_tags$data;
export type MessageFragment_tags$key = {
  readonly " $data"?: MessageFragment_tags$data;
  readonly " $fragmentSpreads": FragmentRefs<"MessageFragment_tags">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "tag"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "MessageFragment_tags",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Variable",
          "name": "tagId",
          "variableName": "tag"
        }
      ],
      "concreteType": "TagsConnection",
      "kind": "LinkedField",
      "name": "routerTags",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "TagsEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Tag",
              "kind": "LinkedField",
              "name": "node",
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
                  "concreteType": "Category",
                  "kind": "LinkedField",
                  "name": "categoryByCategoryId",
                  "plural": false,
                  "selections": [
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
                      "name": "organizationId",
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
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "aa929d348bf3f1eba3fc7a52a468f6a1";

export default node;
