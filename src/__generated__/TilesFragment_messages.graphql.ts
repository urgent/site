/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type TilesFragment_messages = {
    readonly edges: ReadonlyArray<{
        readonly node: {
            readonly rowId: number;
            readonly content: string | null;
            readonly loomSharedUrl: string | null;
            readonly organizationId: number;
            readonly messageTagsByMessageId: {
                readonly __id: string;
                readonly edges: ReadonlyArray<{
                    readonly node: {
                        readonly __id: string;
                        readonly tagId: number;
                        readonly messageId: number;
                        readonly tagByTagId: {
                            readonly __id: string;
                            readonly rowId: number;
                            readonly name: string | null;
                            readonly categoryByCategoryId: {
                                readonly color: string | null;
                            } | null;
                        } | null;
                    } | null;
                }>;
            };
        } | null;
    }>;
    readonly " $refType": "TilesFragment_messages";
};
export type TilesFragment_messages$data = TilesFragment_messages;
export type TilesFragment_messages$key = {
    readonly " $data"?: TilesFragment_messages$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"TilesFragment_messages">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rowId",
  "storageKey": null
},
v1 = {
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
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TilesFragment_messages",
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
            (v0/*: any*/),
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
              "name": "loomSharedUrl",
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
                        },
                        {
                          "alias": null,
                          "args": null,
                          "kind": "ScalarField",
                          "name": "messageId",
                          "storageKey": null
                        },
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": "Tag",
                          "kind": "LinkedField",
                          "name": "tagByTagId",
                          "plural": false,
                          "selections": [
                            (v0/*: any*/),
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
                                }
                              ],
                              "storageKey": null
                            },
                            (v1/*: any*/)
                          ],
                          "storageKey": null
                        },
                        (v1/*: any*/)
                      ],
                      "storageKey": null
                    }
                  ],
                  "storageKey": null
                },
                (v1/*: any*/)
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
})();
(node as any).hash = '69f80e8070c4e14ef78b897558bf12fb';
export default node;
