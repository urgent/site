/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type pagesFragment_userConfig$ref: FragmentReference;
declare export opaque type pagesFragment_userConfig$fragmentType: pagesFragment_userConfig$ref;
export type pagesFragment_userConfig = {|
  +allUserConfigs: ?{|
    +edges: $ReadOnlyArray<{|
      +node: ?{|
        +defaultOrganization: number
      |}
    |}>
  |},
  +$refType: pagesFragment_userConfig$ref,
|};
export type pagesFragment_userConfig$data = pagesFragment_userConfig;
export type pagesFragment_userConfig$key = {
  +$data?: pagesFragment_userConfig$data,
  +$fragmentRefs: pagesFragment_userConfig$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "pagesFragment_userConfig",
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
(node/*: any*/).hash = '109f082448e99986292c929077d8d848';

module.exports = node;
