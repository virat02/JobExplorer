import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from 'react-router'
import App from './components/App'
import Store from './stores/store'
import history from './History'
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
// import * as serviceWorker from './serviceWorker';

render(
    <Provider store={Store}>
        <Router history={history}>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
)

// serviceWorker.unregister();