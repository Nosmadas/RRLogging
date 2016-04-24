import React from 'react';
import { connect } from 'react-redux';
import LogSource from './logSource';

const FilteredLogPanel = ({filter, logSources}) => (
    
    <div className='component'> {
        logSources.filter(source => source.sourceName.toLowerCase().indexOf(filter.toLowerCase()) > -1)
                   .map(source => { <LogSource key={source.sourceName} logSource={source} /> })
    }
    </div>
);

const mapStateToProps = (props) => ({ filter: props.filter, logSources: props.logSources });

export default connect(mapStateToProps)(FilteredLogPanel);
