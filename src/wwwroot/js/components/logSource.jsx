import React from 'react';
import Log from './log';

const logSource = ({logSource}) => (
    <div>
        <div>
            <strong>{logSource.sourceName} </strong> : {logSource.version}
        </div>
        <div>Environment : {logSource.environment}</div>
        <div>Instance : {logSource.instance}</div>

        <div><strong>Logs</strong>:
            <ul className="logs">
                {logSource.logs.map(log => <Log key={log} log={log} />) }
            </ul>
        </div>
    </div>
);

export default logSource;