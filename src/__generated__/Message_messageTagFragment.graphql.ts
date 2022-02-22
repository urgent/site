/**
 * @generated SignedSource<<3d019774b7e54ddb7bfbd0cb07067722>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Message_messageTagFragment$data = {
  readonly query: {
    readonly messageByRowId: {
      readonly content: string | null;
      readonly organizationId: number;
      readonly rowId: number;
      readonly loomSharedUrl: string | null;
      readonly messageTagsByMessageId: {
        readonly edges: ReadonlyArray<{
          readonly node: {
            readonly tagId: number;
          } | null;
        }>;
      };
    } | null;
  };
  readonly " $fragmentType": "Message_messageTagFragment";
};
export type Message_messageTagFragment = Message_messageTagFragment$data;
export type Message_messageTagFragment$key = {
  readonly " $data"?: Message_messageTagFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"Message_messageTagFragment">;
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
  "name": "Message_messageTagFragment",
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
            },
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "organizationId",
              "storageKey": null
            },
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
              "name": "loomSharedUrl",
              "storageKey": null
            },
            {
              "alias": null,
              "args": null,
              "concreteType": "MessageTagsConnection",
              "kind": "LinkedField",
              "name": "messageTagsByMessageId",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "MessageTagsEdge",
                  "kind": "LinkedField",
                  "name": "edges",
                  "plural": true,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "MessageTag",
                      "kind": "LinkedField",
                      "name": "node",
                      "plural": false,
                      "selections": [
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "tagId",
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
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "f975b8f09af37c5ee65eaa58fa78f92f";

export default node;
