/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateOrganizationUserInput = {|
  clientMutationId?: ?string,
  organizationId: number,
  userId: number,
|};
export type NavInsertOrganizationUserMutationVariables = {|
  input: CreateOrganizationUserInput
|};
export type NavInsertOrganizationUserMutationResponse = {|
  +createOrganizationUser: ?{|
    +organizationUser: ?{|
      +organizationId: number
    |}
  |}
|};
export type NavInsertOrganizationUserMutation = {|
  variables: NavInsertOrganizationUserMutationVariables,
  response: NavInsertOrganizationUserMutationResponse,
|};
*/


/*
mutation NavInsertOrganizationUserMutation(
  $input: CreateOrganizationUserInput!
) {
  createOrganizationUser(input: $input) {
    organizationUser {
      organizationId
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "CreateOrganizationUserPayload",
    "kind": "LinkedField",
    "name": "createOrganizationUser",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "OrganizationUser",
        "kind": "LinkedField",
        "name": "organizationUser",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "organizationId",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "NavInsertOrganizationUserMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NavInsertOrganizationUserMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "f1ead86011df1d887cf14f81390afd67",
    "id": null,
    "metadata": {},
    "name": "NavInsertOrganizationUserMutation",
    "operationKind": "mutation",
    "text": "mutation NavInsertOrganizationUserMutation(\n  $input: CreateOrganizationUserInput!\n) {\n  createOrganizationUser(input: $input) {\n    organizationUser {\n      organizationId\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '45d703a42eb22563fabfb39a2b1596e0';

module.exports = node;
