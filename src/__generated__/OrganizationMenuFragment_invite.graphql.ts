/**
 * @generated SignedSource<<047feade5345f5aad8ddd51db7862f64>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type OrganizationMenuFragment_invite$data = {
  readonly allInvites: {
    readonly __id: string;
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly rowId: number;
        readonly organizationId: number;
        readonly email: string | null;
      } | null;
    }>;
  } | null;
  readonly " $fragmentType": "OrganizationMenuFragment_invite";
};
export type OrganizationMenuFragment_invite$key = {
  readonly " $data"?: OrganizationMenuFragment_invite$data;
  readonly " $fragmentSpreads": FragmentRefs<"OrganizationMenuFragment_invite">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "organization"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "OrganizationMenuFragment_invite",
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
        },
        {
          "kind": "Literal",
          "name": "orderBy",
          "value": "PRIMARY_KEY_ASC"
        }
      ],
      "concreteType": "InvitesConnection",
      "kind": "LinkedField",
      "name": "allInvites",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "InvitesEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "Invite",
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
                  "name": "rowId",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "organizationId",
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

(node as any).hash = "5840598edefa233da83e3f48d8636411";

export default node;
