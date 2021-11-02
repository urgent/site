/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type NavAllUsers$ref: FragmentReference;
declare export opaque type NavAllUsers$fragmentType: NavAllUsers$ref;
export type NavAllUsers = {|
  +allUsers: ?{|
    +edges: $ReadOnlyArray<{|
      +node: ?{|
        +id: string,
        +name: ?string,
        +email: ?string,
      |}
    |}>
  |},
  +$refType: NavAllUsers$ref,
|};
export type NavAllUsers$data = NavAllUsers;
export type NavAllUsers$key = {
  +$data?: NavAllUsers$data,
  +$fragmentRefs: NavAllUsers$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NavAllUsers",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "UsersConnection",
      "kind": "LinkedField",
      "name": "allUsers",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "UsersEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "User",
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
                  "name": "name",
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
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
// prettier-ignore
(node/*: any*/).hash = '31d6e4822c9ddbd6370349eccea9710f';

module.exports = node;
