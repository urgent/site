/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type category_constraint = "category_pkey" | "%future added value";
export type category_update_column = "color" | "id" | "name" | "user_id" | "%future added value";
export type message_constraint = "message_pkey" | "%future added value";
export type message_tag_constraint = "message_tag_pkey" | "%future added value";
export type message_tag_update_column = "message_id" | "tag_id" | "%future added value";
export type message_update_column = "content" | "id" | "user_id" | "%future added value";
export type tag_constraint = "tag_pkey" | "%future added value";
export type tag_update_column = "category_id" | "id" | "name" | "user_id" | "%future added value";
export type message_insert_input = {|
  content?: ?string,
  id?: ?any,
  message_tags?: ?message_tag_arr_rel_insert_input,
  user_id?: ?string,
|};
export type message_tag_arr_rel_insert_input = {|
  data: $ReadOnlyArray<message_tag_insert_input>,
  on_conflict?: ?message_tag_on_conflict,
|};
export type message_tag_insert_input = {|
  message?: ?message_obj_rel_insert_input,
  message_id?: ?any,
  message_tag_message?: ?message_arr_rel_insert_input,
  message_tag_tag?: ?tag_arr_rel_insert_input,
  tag?: ?tag_obj_rel_insert_input,
  tag_id?: ?any,
|};
export type message_obj_rel_insert_input = {|
  data: message_insert_input,
  on_conflict?: ?message_on_conflict,
|};
export type message_on_conflict = {|
  constraint: message_constraint,
  update_columns: $ReadOnlyArray<message_update_column>,
  where?: ?message_bool_exp,
|};
export type message_bool_exp = {|
  _and?: ?$ReadOnlyArray<message_bool_exp>,
  _not?: ?message_bool_exp,
  _or?: ?$ReadOnlyArray<message_bool_exp>,
  content?: ?String_comparison_exp,
  id?: ?uuid_comparison_exp,
  message_tags?: ?message_tag_bool_exp,
  user_id?: ?String_comparison_exp,
|};
export type String_comparison_exp = {|
  _eq?: ?string,
  _gt?: ?string,
  _gte?: ?string,
  _ilike?: ?string,
  _in?: ?$ReadOnlyArray<string>,
  _iregex?: ?string,
  _is_null?: ?boolean,
  _like?: ?string,
  _lt?: ?string,
  _lte?: ?string,
  _neq?: ?string,
  _nilike?: ?string,
  _nin?: ?$ReadOnlyArray<string>,
  _niregex?: ?string,
  _nlike?: ?string,
  _nregex?: ?string,
  _nsimilar?: ?string,
  _regex?: ?string,
  _similar?: ?string,
|};
export type uuid_comparison_exp = {|
  _eq?: ?any,
  _gt?: ?any,
  _gte?: ?any,
  _in?: ?$ReadOnlyArray<any>,
  _is_null?: ?boolean,
  _lt?: ?any,
  _lte?: ?any,
  _neq?: ?any,
  _nin?: ?$ReadOnlyArray<any>,
|};
export type message_tag_bool_exp = {|
  _and?: ?$ReadOnlyArray<message_tag_bool_exp>,
  _not?: ?message_tag_bool_exp,
  _or?: ?$ReadOnlyArray<message_tag_bool_exp>,
  message?: ?message_bool_exp,
  message_id?: ?uuid_comparison_exp,
  message_tag_message?: ?message_bool_exp,
  message_tag_tag?: ?tag_bool_exp,
  tag?: ?tag_bool_exp,
  tag_id?: ?uuid_comparison_exp,
|};
export type tag_bool_exp = {|
  _and?: ?$ReadOnlyArray<tag_bool_exp>,
  _not?: ?tag_bool_exp,
  _or?: ?$ReadOnlyArray<tag_bool_exp>,
  category?: ?category_bool_exp,
  category_id?: ?uuid_comparison_exp,
  id?: ?uuid_comparison_exp,
  message_tags?: ?message_tag_bool_exp,
  name?: ?String_comparison_exp,
  user_id?: ?String_comparison_exp,
|};
export type category_bool_exp = {|
  _and?: ?$ReadOnlyArray<category_bool_exp>,
  _not?: ?category_bool_exp,
  _or?: ?$ReadOnlyArray<category_bool_exp>,
  color?: ?String_comparison_exp,
  id?: ?uuid_comparison_exp,
  name?: ?String_comparison_exp,
  tags?: ?tag_bool_exp,
  user_id?: ?String_comparison_exp,
|};
export type message_arr_rel_insert_input = {|
  data: $ReadOnlyArray<message_insert_input>,
  on_conflict?: ?message_on_conflict,
|};
export type tag_arr_rel_insert_input = {|
  data: $ReadOnlyArray<tag_insert_input>,
  on_conflict?: ?tag_on_conflict,
|};
export type tag_insert_input = {|
  category?: ?category_obj_rel_insert_input,
  category_id?: ?any,
  id?: ?any,
  message_tags?: ?message_tag_arr_rel_insert_input,
  name?: ?string,
  user_id?: ?string,
|};
export type category_obj_rel_insert_input = {|
  data: category_insert_input,
  on_conflict?: ?category_on_conflict,
|};
export type category_insert_input = {|
  color?: ?string,
  id?: ?any,
  name?: ?string,
  tags?: ?tag_arr_rel_insert_input,
  user_id?: ?string,
|};
export type category_on_conflict = {|
  constraint: category_constraint,
  update_columns: $ReadOnlyArray<category_update_column>,
  where?: ?category_bool_exp,
|};
export type tag_on_conflict = {|
  constraint: tag_constraint,
  update_columns: $ReadOnlyArray<tag_update_column>,
  where?: ?tag_bool_exp,
|};
export type tag_obj_rel_insert_input = {|
  data: tag_insert_input,
  on_conflict?: ?tag_on_conflict,
|};
export type message_tag_on_conflict = {|
  constraint: message_tag_constraint,
  update_columns: $ReadOnlyArray<message_tag_update_column>,
  where?: ?message_tag_bool_exp,
|};
export type TilesInsertMessageMutationVariables = {|
  input: $ReadOnlyArray<message_insert_input>
|};
export type TilesInsertMessageMutationResponse = {|
  +insert_message: ?{|
    +affected_rows: number,
    +returning: $ReadOnlyArray<{|
      +id: string,
      +content: string,
    |}>,
  |}
|};
export type TilesInsertMessageMutation = {|
  variables: TilesInsertMessageMutationVariables,
  response: TilesInsertMessageMutationResponse,
|};
*/


/*
mutation TilesInsertMessageMutation(
  $input: [message_insert_input!]!
) {
  insert_message(objects: $input) {
    affected_rows
    returning {
      id
      content
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
        "name": "objects",
        "variableName": "input"
      }
    ],
    "concreteType": "message_mutation_response",
    "kind": "LinkedField",
    "name": "insert_message",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "affected_rows",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "message",
        "kind": "LinkedField",
        "name": "returning",
        "plural": true,
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
            "name": "content",
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
    "name": "TilesInsertMessageMutation",
    "selections": (v1/*: any*/),
    "type": "mutation_root",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TilesInsertMessageMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "0568a3543ad448c91ac1977f975ad6a6",
    "id": null,
    "metadata": {},
    "name": "TilesInsertMessageMutation",
    "operationKind": "mutation",
    "text": "mutation TilesInsertMessageMutation(\n  $input: [message_insert_input!]!\n) {\n  insert_message(objects: $input) {\n    affected_rows\n    returning {\n      id\n      content\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1fe5a2523f570c0c647b5eade3039dfb';

module.exports = node;
