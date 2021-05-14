function fetchGraphQL(auth) {
    return async (text, variables) => {
        // Fetch data from GitHub's GraphQL API:
        const response = await fetch('https://smooms.hasura.app/v1beta1/relay', {
            method: 'POST',
            headers: {
                Authorization: `bearer ${auth}`,
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                query: text,
                variables,
            }),
        });

        // Get the response as JSON
        return await response.json();
    }
}

export default fetchGraphQL;