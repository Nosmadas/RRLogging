import React from 'react';
import { connect } from 'react-redux';
import LogSource from './logSource';
import Paper from 'material-ui/Paper';

const paperStyle = {
    height: 220,
    minwidth: 220,
    padding: 15
}

const FilteredLogPanel = ({ filter, logSources }) => (

    <div className='component'>

        {logSources.filter(source => textFilter(source, filter))
            .map(source =>
                <Paper style={paperStyle} key={source.sourceName} rounded={false}>
                    <LogSource key={source.sourceName} logSource={source} />
                </Paper>
            )}
    </div>
);

const textFilter = (source, filter) => source.sourceName.toLowerCase().indexOf(filter.toLowerCase()) > -1;

const mapStateToProps = (props) => ({ filter: props.filter, logSources: props.logSources });

export default connect(mapStateToProps)(FilteredLogPanel);
