import React from 'react';
import { connect } from 'react-redux';

const logSources = ({sources}) => (
    <div className="logSourceContainer">
    {sources.map(source => 
        <div key={source.sourceName} className="logSource">
        {source.sourceName}
        </div>)}
    </div>
);

const mapStateToProps = (state) => ({sources: state.logSources})

export default connect(mapStateToProps)(logSources);