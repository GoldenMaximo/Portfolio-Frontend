const GraphQL = async query => {
    try {
        const res = await fetch('https://gmaximo-portfolio-backend.herokuapp.com/graphql', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(query),
        });

        const resData = await res.json();

        if (resData.errors) {
            throw new Error(
                'There seems to be a problem with some of the services. Reload the page or check back in a while.'
            );
        }

        return resData.data;
    } catch (err) {
        return err;
    }
};

export default GraphQL;
