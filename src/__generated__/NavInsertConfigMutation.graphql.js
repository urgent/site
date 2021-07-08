/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type CreateUserConfigInput = {|
  clientMutationId?: ?string,
  defaultOrganization: number,
|};
export type NavInsertConfigMutationVariables = {|
  input: CreateUserConfigInput
|};
export type NavInsertConfigMutationResponse = {|
  +createUserConfig: ?{|
    +userConfig: ?{|
      +defaultOrganization: number
    |}
  |}
|};
export type NavInsertConfigMutation = {|
  variables: NavInsertConfigMutationVariables,
  response: NavInsertConfigMutationResponse,
|};
*/


/*
mutation NavInsertConfigMutation(
  $input: CreateUserConfigInput!
) {
  createUserConfig(input: $input) {
    userConfig {
      defaultOrganization
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
    "concreteType": "CreateUserConfigPayload",
    "kind": "LinkedField",
    "name": "createUserConfig",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "UserConfig",
        "kind": "LinkedField",
        "name": "userConfig",
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
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "NavInsertConfigMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NavInsertConfigMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "77d450dc9236cfe93dc002ff47834eb0",
    "id": null,
    "metadata": {},
    "name": "NavInsertConfigMutation",
    "operationKind": "mutation",
    "text": "mutation NavInsertConfigMutation(\n  $input: CreateUserConfigInput!\n) {\n  createUserConfig(input: $input) {\n    userConfig {\n      defaultOrganization\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '84e9b4074e58a383db3d5e4112bbf38e';

module.exports = node;
