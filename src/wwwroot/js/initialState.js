const initialState = {
    filter: '',
    config: {
        apiUrl: ''
    },
    logSources: [
        {
            sourceName: 'Provisioning Service',
            environment: 'Staging',
            instance: 'Instance 1',
            version: '1.0.0',
            logs: [
                "Something Happened",
                "Another thing happened"
            ]
        },
        {
            sourceName: 'Telemarketing System',
            environment: 'Production',
            instance: 'Instance 1',
            version: '4.0.1',
            logs: [
                "Telemarketer did a funny.",
                "Hosting started.",
                "Executing cool stuff"
            ]
        },
                {
            sourceName: 'Distance API',
            environment: 'Development',
            instance: 'ADAMSON-XPS',
            version: '2.2.1',
            logs: [
                "Searching for: L9 1JN"
            ]
        }
    ],

};

export default initialState;