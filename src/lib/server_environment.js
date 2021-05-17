import { withHydrateDatetime } from 'relay-nextjs/date';
import { Network, Environment, Store, RecordSource } from 'relay-runtime';
import { getSession } from 'next-auth/client'

export function createServerNetwork(token) {
    return Network.create(async (params, variables) => {
        let authHeaders = {}
        //try reading from cookie
        if (token) {
            authHeaders = {
                'Authorization': `Bearer ${token}`,
                'X-Hasura-Role': 'user'
            }
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

export function createServerEnvironment(token) {
    return new Environment({
        network: createServerNetwork(token),
        store: new Store(new RecordSource()),
        isServer: true,
    });
}