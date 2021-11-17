/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type NavFragment_invite$ref: FragmentReference;
declare export opaque type NavFragment_invite$fragmentType: NavFragment_invite$ref;
export type NavFragment_invite = {|
  +allInvites: ?{|
    +__id: string,
    +edges: $ReadOnlyArray<{|
      +node: ?{|
        +id: string,
        +organizationId: number,
        +email: ?string,
      |}
    |}>,
  |},
  +$refType: NavFragment_invite$ref,
|};
export type NavFragment_invite$data = NavFragment_invite;
export type NavFragment_invite$key = {
  +$data?: NavFragment_invite$data,
  +$fragmentRefs: NavFragment_invite$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
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
// prettier-ignore
(node/*: any*/).hash = '9e7eeb0d4ff538526afeb424b73b69a5';

module.exports = node;
