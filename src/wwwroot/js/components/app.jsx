import React from 'react';
import { connect } from 'react-redux';
import LogSourceFilter from './LogSourceFilter';
import LogPanel from './LogPanel';
import site from '../../css/site.css';

const App = () => (
    <div>
        <LogSourceFilter />
        <LogPanel />
    </div>
);

const mapStateToProps = (props) => ({ props });

export default connect(mapStateToProps)(App);