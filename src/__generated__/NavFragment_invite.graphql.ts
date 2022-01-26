/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";

import { FragmentRefs } from "relay-runtime";
export type NavFragment_invite = {
    readonly allInvites: {
        readonly __id: string;
        readonly edges: ReadonlyArray<{
            readonly node: {
                readonly id: string;
                readonly organizationId: number;
                readonly email: string | null;
            } | null;
        }>;
    } | null;
    readonly " $refType": "NavFragment_invite";
};
export type NavFragment_invite$data = NavFragment_invite;
export type NavFragment_invite$key = {
    readonly " $data"?: NavFragment_invite$data | undefined;
    readonly " $fragmentRefs": FragmentRefs<"NavFragment_invite">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NavFragment_invite",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "InvitesConnection",
      "kind": "LinkedField",
      "name": "allInvites",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "InvitesEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Invite",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "id",
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
                  "name": "email",
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
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '9e7eeb0d4ff538526afeb424b73b69a5';
export default node;