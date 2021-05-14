import { Environment, Network, RecordSource, Store } from 'relay-runtime';
import fetchGraphQL from './fetchGraphQL';

// Relay passes a "params" object with the query name and text. So we define a helper function
// to call our fetchGraphQL utility with params.text.
async function fetchRelay(auth) {
    return (params, variables) => {
        console.log(`fetching query ${params.name} with ${JSON.stringify(variables)} and auth of ${auth}`);
        return fetchGraphQL(auth)(params.text, variables);
    }
}

// Export a singleton instance of Relay Environment configured with our network function:
export default function curry(auth) {
    return new Environment({
        network: Network.create(fetchRelay(auth)),
        store: new Store(new RecordSource()),
    });
}