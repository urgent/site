/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type pagesFragment_organization$ref: FragmentReference;
declare export opaque type pagesFragment_organization$fragmentType: pagesFragment_organization$ref;
export type pagesFragment_organization = {|
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
  +$refType: pagesFragment_organization$ref,
|};
export type pagesFragment_organization$data = pagesFragment_organization;
export type pagesFragment_organization$key = {
  +$data?: pagesFragment_organization$data,
  +$fragmentRefs: pagesFragment_organization$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "pagesFragment_organization",
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
(node/*: any*/).hash = '52d77dc68a8cbdaf4f7d74db05ef5cfa';

module.exports = node;
