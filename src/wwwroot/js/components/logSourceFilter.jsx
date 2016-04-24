import React from 'react';
import { connect } from 'react-redux';
import sourceFilterChanged from '../actions/sourceFilterChanged';

const LogSourceFilter = ({filter, dispatch}) => (
    <div className='component'>
        Filter: <input value={filter} onChange={(e) => onFilterChanged(dispatch, e.target.value)} type="text" />
    </div>
);

const onFilterChanged = (dispatch, filterText) => {
    dispatch(sourceFilterChanged(filterText));
}

const mapStateToProps = (state) => ({ filter: state.filter });

export default connect(mapStateToProps)(LogSourceFilter);
