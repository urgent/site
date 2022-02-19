/**
 * @generated SignedSource<<10afc510358a9b436cd56c78da19ae41>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type Message_messageFragment$data = {
  readonly query: {
    readonly messageByRowId: {
      readonly content: string | null;
      readonly organizationId: number;
      readonly messageTagsByMessageId: {
        readonly edges: ReadonlyArray<{
          readonly node: {
            readonly tagId: number;
          } | null;
        }>;
      };
    } | null;
  };
  readonly " $fragmentType": "Message_messageFragment";
};
export type Message_messageFragment = Message_messageFragment$data;
export type Message_messageFragment$key = {
  readonly " $data"?: Message_messageFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"Message_messageFragment">;
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
  "name": "Message_messageFragment",
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

(node as any).hash = "073b3f1b40adba84c8a6b3511be72704";

export default node;
