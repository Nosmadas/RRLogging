import React from 'react';
import { connect } from 'react-redux';
import LogSourceFilter from './LogSourceFilter';
import FilteredLogPanel from './logPanel';
import site from '../../css/site.css';

const App = () => (
    <div>
        <LogSourceFilter />
        <FilteredLogPanel />
    </div>
);

const mapStateToProps = (props) => ({ props });

export default connect(mapStateToProps)(App);