/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type NavFragment_organization$ref: FragmentReference;
declare export opaque type NavFragment_organization$fragmentType: NavFragment_organization$ref;
export type NavFragment_organization = {|
  +allOrganizationUsers: ?{|
    +__id: string,
    +edges: $ReadOnlyArray<{|
      +node: ?{|
        +organizationByOrganizationId: ?{|
          +rowId: number,
          +slug: ?string,
        |}
      |}
    |}>,
  |},
  +$refType: NavFragment_organization$ref,
|};
export type NavFragment_organization$data = NavFragment_organization;
export type NavFragment_organization$key = {
  +$data?: NavFragment_organization$data,
  +$fragmentRefs: NavFragment_organization$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NavFragment_organization",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "OrganizationUsersConnection",
      "kind": "LinkedField",
      "name": "allOrganizationUsers",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "OrganizationUsersEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "OrganizationUser",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "Organization",
                  "kind": "LinkedField",
                  "name": "organizationByOrganizationId",
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
                      "name": "slug",
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
(node/*: any*/).hash = 'c660d4d22db9c2b7a285dfedd4b2d089';

module.exports = node;
