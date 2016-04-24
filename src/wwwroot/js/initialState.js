const initialState = {
    filter: '',
    config: {
        apiUrl: ''
    },
    logSources: [
        {
            sourceName: 'Unity Provisioning Service',
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
        }
    ],

};

export default initialState;