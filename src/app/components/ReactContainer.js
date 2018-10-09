import React from 'react'
import {observer} from 'mobx-react'

import {I18nextProvider} from 'react-i18next'
import i18n from '../i18n'

import { Router, Route, Switch } from 'react-router-dom'

import Home from './views/Home'
import Page from './views/Page'

@observer
class ReactContainer extends React.Component {

    render () {
        let {store} = this.props;

        return (
            <I18nextProvider i18n={i18n}>
                <Router history={store.history}>
                    <Switch>
                        <Route path="/page/:id" component={(props) => <Page location={props} store={store} />}/>,
                        <Route path="/test" component={(props) => <div>TEST</div>}/>,
                        <Route exact path="/" component={(props) => <Home store={store} />}/>,
                        <Route path="*" component={(e) => { console.log('unhandled route', e.routeParams.splat); return null }} />
                    </Switch>
                </Router>
            </I18nextProvider>
        )
    }
}

export default ReactContainer