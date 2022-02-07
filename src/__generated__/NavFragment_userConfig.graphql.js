/**
 * @generated SignedSource<<02ae92cd16f47924e1311cb09ef58917>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { Fragment, ReaderFragment } from 'relay-runtime';
import type { FragmentType } from "relay-runtime";
declare export opaque type NavFragment_userConfig$fragmentType: FragmentType;
export type NavFragment_userConfig$ref = NavFragment_userConfig$fragmentType;
export type NavFragment_userConfig$data = {|
  +allUserConfigs: ?{|
    +edges: $ReadOnlyArray<{|
      +node: ?{|
        +defaultOrganization: number,
      |},
    |}>,
  |},
  +$fragmentType: NavFragment_userConfig$fragmentType,
|};
export type NavFragment_userConfig = NavFragment_userConfig$data;
export type NavFragment_userConfig$key = {
  +$data?: NavFragment_userConfig$data,
  +$fragmentSpreads: NavFragment_userConfig$fragmentType,
  ...
};
*/

var node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "NavFragment_userConfig",
  "selections": [
    {
      "alias": null,
      "args": null,
      "concreteType": "UserConfigsConnection",
      "kind": "LinkedField",
      "name": "allUserConfigs",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "UserConfigsEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "UserConfig",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "defaultOrganization",
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

(node/*: any*/).hash = "dfb994149c2d6f72883abefbe7c20bc6";

module.exports = ((node/*: any*/)/*: Fragment<
  NavFragment_userConfig$fragmentType,
  NavFragment_userConfig$data,
>*/);
