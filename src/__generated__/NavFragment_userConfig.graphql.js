/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type NavFragment_userConfig$ref: FragmentReference;
declare export opaque type NavFragment_userConfig$fragmentType: NavFragment_userConfig$ref;
export type NavFragment_userConfig = {|
  +allUserConfigs: ?{|
    +edges: $ReadOnlyArray<{|
      +node: ?{|
        +defaultOrganization: number
      |}
    |}>
  |},
  +$refType: NavFragment_userConfig$ref,
|};
export type NavFragment_userConfig$data = NavFragment_userConfig;
export type NavFragment_userConfig$key = {
  +$data?: NavFragment_userConfig$data,
  +$fragmentRefs: NavFragment_userConfig$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
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
// prettier-ignore
(node/*: any*/).hash = 'dfb994149c2d6f72883abefbe7c20bc6';

module.exports = node;
