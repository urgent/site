/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type pagesFragment_messages$ref: FragmentReference;
declare export opaque type pagesFragment_messages$fragmentType: pagesFragment_messages$ref;
export type pagesFragment_messages = {|
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
  +allUserConfigs: ?{|
    +edges: $ReadOnlyArray<{|
      +node: ?{|
        +defaultOrganization: number
      |}
    |}>
  |},
  +allMessages: ?{|
    +__id: string,
    +edges: $ReadOnlyArray<{|
      +node: ?{|
        +rowId: number,
        +content: ?string,
        +messageTagsByMessageId: {|
          +__id: string,
          +edges: $ReadOnlyArray<{|
            +node: ?{|
              +__id: string,
              +tagId: number,
              +tagByTagId: ?{|
                +__id: string,
                +rowId: number,
                +name: ?string,
                +categoryByCategoryId: ?{|
                  +color: ?string
                |},
              |},
            |}
          |}>,
        |},
      |}
    |}>,
  |},
  +$refType: pagesFragment_messages$ref,
|};
export type pagesFragment_messages$data = pagesFragment_messages;
export type pagesFragment_messages$key = {
  +$data?: pagesFragment_messages$data,
  +$fragmentRefs: pagesFragment_messages$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "rowId",
  "storageKey": null
},
v1 = {
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
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "pagesFragment_messages",
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
                    (v0/*: any*/),
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
        (v1/*: any*/)
      ],
      "storageKey": null
    },
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
    },
    {
      "alias": null,
      "args": null,
      "concreteType": "MessagesConnection",
      "kind": "LinkedField",
      "name": "allMessages",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "MessagesEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Message",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                (v0/*: any*/),
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "content",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "concreteType": "MessageTagsConnection",
                  "kind": "LinkedField",
                  "name": "messageTagsByMessageId",
                  "plural": false,
                  "selections": [
                    {
                      "alias": null,
                      "args": null,
                      "concreteType": "MessageTagsEdge",
                      "kind": "LinkedField",
                      "name": "edges",
                      "plural": true,
                      "selections": [
                        {
                          "alias": null,
                          "args": null,
                          "concreteType": "MessageTag",
                          "kind": "LinkedField",
                          "name": "node",
                          "plural": false,
                          "selections": [
                            {
                              "alias": null,
                              "args": null,
                              "kind": "ScalarField",
                              "name": "tagId",
                              "storageKey": null
                            },
                            {
                              "alias": null,
                              "args": null,
                              "concreteType": "Tag",
                              "kind": "LinkedField",
                              "name": "tagByTagId",
                              "plural": false,
                              "selections": [
                                (v0/*: any*/),
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
                                  "concreteType": "Category",
                                  "kind": "LinkedField",
                                  "name": "categoryByCategoryId",
                                  "plural": false,
                                  "selections": [
                                    {
                                      "alias": null,
                                      "args": null,
                                      "kind": "ScalarField",
                                      "name": "color",
                                      "storageKey": null
                                    }
                                  ],
                                  "storageKey": null
                                },
                                (v1/*: any*/)
                              ],
                              "storageKey": null
                            },
                            (v1/*: any*/)
                          ],
                          "storageKey": null
                        }
                      ],
                      "storageKey": null
                    },
                    (v1/*: any*/)
                  ],
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        (v1/*: any*/)
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();
// prettier-ignore
(node/*: any*/).hash = 'deb6706310e7e62cfcf22ab7ae517df8';

module.exports = node;
