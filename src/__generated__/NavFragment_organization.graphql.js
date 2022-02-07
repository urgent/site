/**
 * @generated SignedSource<<df4c7cd0859f8c2ace5abb31ec9c2769>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type NavFragment_organization$fragmentType: FragmentType;
export type NavFragment_organization$ref = NavFragment_organization$fragmentType;
export type NavFragment_organization$data = {|
  +allOrganizations: ?{|
    +edges: $ReadOnlyArray<{|
      +node: ?{|
        +rowId: number,
        +slug: ?string,
      |},
    |}>,
  |},
  +$fragmentType: NavFragment_organization$fragmentType,
|};
export type NavFragment_organization = NavFragment_organization$data;
export type NavFragment_organization$key = {
  +$data?: NavFragment_organization$data,
  +$fragmentSpreads: NavFragment_organization$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NavFragment_organization",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "OrganizationsConnection",
      "kind": "LinkedField",
      "name": "allOrganizations",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "OrganizationsEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Organization",
              "kind": "LinkedField",
              "name": "node",
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
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node/*: any*/).hash = "d3072876c7e88137c81479dd074cabba";

module.exports = ((node/*: any*/)/*: Fragment<
  NavFragment_organization$fragmentType,
  NavFragment_organization$data,
>*/);
