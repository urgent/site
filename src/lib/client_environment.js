import { getRelaySerializedState } from 'relay-nextjs';
import { withHydrateDatetime } from 'relay-nextjs/date';
import { Environment, Network, Store, RecordSource } from 'relay-runtime';
import { getSession } from 'next-auth/client'

export function createClientNetwork() {

  return Network.create(async (params, variables) => {
    const session = await getSession()
    let authHeaders = {}
    if (session?.token) {
      authHeaders = {
        'Authorization': `Bearer ${session.token}`,
        'X-Hasura-Role': 'user'
      }
    }
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL, {
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