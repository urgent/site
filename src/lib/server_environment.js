import { withHydrateDatetime } from 'relay-nextjs/date';
import { Network, Environment, Store, RecordSource } from 'relay-runtime';
import { getSession } from 'next-auth/client'

export function createServerNetwork() {
    return Network.create(async (params, variables) => {
        const session = await getSession();
        let authHeaders;
        if (session) {
            authHeaders = {
                'Authorization': `Bearer ${session.token}`,
                'X-Hasura-Role': 'user'
            }
        } else {
            authHeaders = {}
        }
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

export function createServerEnvironment() {
    return new Environment({
        network: createServerNetwork(),
        store: new Store(new RecordSource()),
        isServer: true,
    });
}