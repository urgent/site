/**
 * @generated SignedSource<<4904dbb4fa73fbb0d6ad8370700af483>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type NavFragment_organizationUsers$fragmentType: FragmentType;
export type NavFragment_organizationUsers$ref = NavFragment_organizationUsers$fragmentType;
export type NavFragment_organizationUsers$data = {|
  +allOrganizationUsers: ?{|
    +__id: string,
    +edges: $ReadOnlyArray<{|
      +node: ?{|
        +userId: number,
        +organizationId: number,
        +userByUserId: ?{|
          +email: ?string,
        |},
        +organizationByOrganizationId: ?{|
          +rowId: number,
          +slug: ?string,
          +userByUserId: ?{|
            +email: ?string,
          |},
        |},
      |},
    |}>,
  |},
  +$fragmentType: NavFragment_organizationUsers$fragmentType,
|};
export type NavFragment_organizationUsers = NavFragment_organizationUsers$data;
export type NavFragment_organizationUsers$key = {
  +$data?: NavFragment_organizationUsers$data,
  +$fragmentSpreads: NavFragment_organizationUsers$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "concreteType": "User",
  "kind": "LinkedField",
  "name": "userByUserId",
  "plural": false,
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "email",
      "storageKey": null
    }
  ],
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NavFragment_organizationUsers",
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
                  "kind": "ScalarField",
                  "name": "userId",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "organizationId",
                  "storageKey": null
                },
                (v0/*: any*/),
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
                    },
                    (v0/*: any*/)
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
})();

(node/*: any*/).hash = "c9398b702442d87af861a27a7c2c70e9";

module.exports = ((node/*: any*/)/*: Fragment<
  NavFragment_organizationUsers$fragmentType,
  NavFragment_organizationUsers$data,
>*/);
