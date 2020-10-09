const GraphQL = async query => {
    try {
        const res = await fetch('http://localhost:8080/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(query)
        });

        const resData = await res.json();
        console.log('ayo resData', resData);

        if (resData.errors) {
            throw new Error('There seems to be a problem with some of the services. Reload the page or check back in a while.');
        }

        console.log(resData.data.projects.projects);

        return resData.data;

    } catch(err) {
        return err;
    }
};

export default GraphQL;