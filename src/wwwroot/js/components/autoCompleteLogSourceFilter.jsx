/*import React from 'react';
import { connect } from 'react-redux';
import AutoComplete from 'material-ui/AutoComplete';
import MenuItem from 'material-ui/MenuItem';
import sourceFilterChanged from '../actions/sourceFilterChanged';

const autoCompleteLogSourceFilter = ({ filter, logSources, dispatch }) => (
    <AutoComplete
        floatingLabelText="Select a source"
        filter={AutoComplete.noFilter}
        openOnFocus={true}
        dataSource={logSources.map(i => i.sourceName)}
        onNewRequest={(text) => onFilterChanged(dispatch, text)}
        onUpdateInput={(text) => onFilterChanged(dispatch, text)}
    />
)

const onFilterChanged = (dispatch, filterText) => dispatch(sourceFilterChanged(filterText));

const mapStateToProps = (props) => ({ filter: props.filter, logSources: props.logSources });

export default connect(mapStateToProps)(autoCompleteLogSourceFilter);*/
