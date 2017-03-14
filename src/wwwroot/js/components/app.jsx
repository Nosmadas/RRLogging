import React from 'react';
import { connect } from 'react-redux';
import LogSources from './logSources';
import LogSourceFilter from './LogSourceFilter';
import LogPanel from './LogPanel';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Text from 'material-ui/Text';
import site from '../../css/site.css';
import Icon from 'material-ui/Icon'
import Layout from 'material-ui/Layout';
import Paper from 'material-ui/Paper';

const App = () => (
    <div>
        <AppBar>
            <Toolbar>
                <Text type="title" colorInherit>Ingress</Text>
            </Toolbar>
        </AppBar>

        <div className="appContainer">

            <Layout container>
                <Layout item>
                    <Paper elevation={3}
                    className="paper">
                        CreditSafe
                    </Paper>
                      <Paper className="paper">
                        TPS
                    </Paper>
                       <Paper className="paper">
                        Philippines
                    </Paper>
                </Layout>
            </Layout>

            <Layout container>
                <Layout item>

                </Layout>
            </Layout>


            <LogPanel />

        </div>
    </div>
);

const mapStateToProps = (props) => ({ props });

export default connect(mapStateToProps)(App);