/**
 * @generated SignedSource<<f48c9571ec11a3a881fe47c3501fb03b>>
 * @flow
 * @lightSyntaxTransform
 * @nogrep
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest, Mutation } from 'relay-runtime';
export type CreateUserConfigInput = {|
  clientMutationId?: ?string,
  defaultOrganization: number,
|};
export type NavInsertConfigMutation$variables = {|
  input: CreateUserConfigInput,
|};
export type NavInsertConfigMutationVariables = NavInsertConfigMutation$variables;
export type NavInsertConfigMutation$data = {|
  +createUserConfig: ?{|
    +userConfig: ?{|
      +defaultOrganization: number,
    |},
  |},
|};
export type NavInsertConfigMutationResponse = NavInsertConfigMutation$data;
export type NavInsertConfigMutation = {|
  variables: NavInsertConfigMutationVariables,
  response: NavInsertConfigMutation$data,
|};
*/

var node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "defaultOrganization",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "NavInsertConfigMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
              (v2/*: any*/)
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NavInsertConfigMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
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
              (v2/*: any*/),
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "id",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "948433cd49dafc45998add5a558f7a26",
    "id": null,
    "metadata": {},
    "name": "NavInsertConfigMutation",
    "operationKind": "mutation",
    "text": "mutation NavInsertConfigMutation(\n  $input: CreateUserConfigInput!\n) {\n  createUserConfig(input: $input) {\n    userConfig {\n      defaultOrganization\n      id\n    }\n  }\n}\n"
  }
};
})();

(node/*: any*/).hash = "84e9b4074e58a383db3d5e4112bbf38e";

module.exports = ((node/*: any*/)/*: Mutation<
  NavInsertConfigMutation$variables,
  NavInsertConfigMutation$data,
>*/);
