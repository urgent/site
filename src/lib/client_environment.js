import { getRelaySerializedState } from 'relay-nextjs';
import { withHydrateDatetime } from 'relay-nextjs/date';
import { Environment, Network, Store, RecordSource } from 'relay-runtime';

export function createClientNetwork(token) {
  let authHeaders = {}
  console.log('token is')
  console.log(token)
  //try reading from cookie
  if (token) {
    authHeaders = {
      'Authorization': `Bearer ${token}`,
      'X-Hasura-Role': 'user'
    }
  }

  return Network.create(async (params, variables) => {
    const response = await fetch('https://smooms.hasura.app/v1beta1/relay', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        ...authHeaders
      },
      body: JSON.stringify({
        query: params.text,
        variables,
      }),
    });

    const json = await response.text();
    return JSON.parse(json, withHydrateDatetime);
  });
}

let clientEnv;
export function getClientEnvironment(token) {
  if (typeof window === 'undefined') return null;

  if (clientEnv == null) {
    clientEnv = new Environment({
      network: createClientNetwork(token),
      store: new Store(new RecordSource(getRelaySerializedState()?.records)),
      isServer: false,
    });
  }

  return clientEnv;
}