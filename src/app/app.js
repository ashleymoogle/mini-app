import React from 'react' // eslint-disable-line
import ReactDOM from 'react-dom'
import ready from 'document-ready-promise'

import ReactContainer from './components/ReactContainer'
import Store from './store/store.js'
import './styles.css'
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

// Create Store and populate with data
const store = new Store();
store.history = history;

store.init()
    .then(ready)
    .then(() => {
        ReactDOM.render((
            <ReactContainer store={store}/>
    ), document.getElementById('mount'))
    }).catch((e) => {
    setTimeout(()=> { throw e})
});

window.store = store;
