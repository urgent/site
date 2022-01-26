/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type useSidebarFragment_messages = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly messageTagsByMessageId: {
                readonly edges: ReadonlyArray<{
                    readonly node: {
                        readonly messageId: number;
                    } | null;
                }>;
                readonly __id: string;
            };
        } | null;
    }>;
    readonly " $refType": "useSidebarFragment_messages";
};
export type useSidebarFragment_messages$data = useSidebarFragment_messages;
export type useSidebarFragment_messages$key = {
    readonly " $data"?: useSidebarFragment_messages$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"useSidebarFragment_messages">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "useSidebarFragment_messages",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "MessagesEdge",
      "kind": "LinkedField",
      "name": "edges",
      "plural": true,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "Message",
          "kind": "LinkedField",
          "name": "node",
          "plural": false,
          "selections": [
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
                          "name": "messageId",
                          "storageKey": null
                        }
                      ],
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                },
                {
                  "kind": "ClientExtension",
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "kind": "ScalarField",
                      "name": "__id",
                      "storageKey": null
                    }
                  ]
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
  "type": "MessagesConnection",
  "abstractKey": null
};
(node as any).hash = 'db21ae268e78a14b881098df4fdef1e7';
export default node;
