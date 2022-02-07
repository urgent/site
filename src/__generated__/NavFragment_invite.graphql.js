/**
 * @generated SignedSource<<ebb48b1e310cfc59cc47c8a5d895df04>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type NavFragment_invite$fragmentType: FragmentType;
export type NavFragment_invite$ref = NavFragment_invite$fragmentType;
export type NavFragment_invite$data = {|
  +allInvites: ?{|
    +__id: string,
    +edges: $ReadOnlyArray<{|
      +node: ?{|
        +id: string,
        +organizationId: number,
        +email: ?string,
      |},
    |}>,
  |},
  +$fragmentType: NavFragment_invite$fragmentType,
|};
export type NavFragment_invite = NavFragment_invite$data;
export type NavFragment_invite$key = {
  +$data?: NavFragment_invite$data,
  +$fragmentSpreads: NavFragment_invite$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
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

(node/*: any*/).hash = "9e7eeb0d4ff538526afeb424b73b69a5";

module.exports = ((node/*: any*/)/*: Fragment<
  NavFragment_invite$fragmentType,
  NavFragment_invite$data,
>*/);
