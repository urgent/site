/**
 * @generated SignedSource<<4f0d3723aa524e102d3df6fcae8715f3>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type NavFragment_organizationUsers$data = {
  readonly allOrganizationUsers: {
    readonly __id: string;
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly userId: number;
        readonly organizationId: number;
        readonly userByUserId: {
          readonly email: string | null;
        } | null;
        readonly organizationByOrganizationId: {
          readonly rowId: number;
          readonly slug: string | null;
          readonly userByUserId: {
            readonly email: string | null;
          } | null;
        } | null;
      } | null;
    }>;
  } | null;
  readonly " $fragmentType": "NavFragment_organizationUsers";
};
export type NavFragment_organizationUsers = NavFragment_organizationUsers$data;
export type NavFragment_organizationUsers$key = {
  readonly " $data"?: NavFragment_organizationUsers$data;
  readonly " $fragmentSpreads": FragmentRefs<"NavFragment_organizationUsers">;
};

const node: ReaderFragment = (function(){
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
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "organization"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "NavFragment_organizationUsers",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "fields": [
            {
              "kind": "Variable",
              "name": "organizationId",
              "variableName": "organization"
            }
          ],
          "kind": "ObjectValue",
          "name": "condition"
        }
      ],
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

(node as any).hash = "dc957a6ce88d02c3df7023fbc68028a7";

export default node;
