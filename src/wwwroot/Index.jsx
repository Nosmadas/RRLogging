import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import DevTools from './js/devtools/devTools';
import App from './js/components/app';
import Store from './js/createStore';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import AppBar from 'material-ui/AppBar';


const renderApp = () => {

    ReactDom.render(<Provider store={Store}><div>
        <MuiThemeProvider>
            <div>

                <App />
            </div>
        </MuiThemeProvider>
        <DevTools />
    </div></Provider>, document.getElementById('app'));
};

injectTapEventPlugin();
Store.subscribe(renderApp);
renderApp()