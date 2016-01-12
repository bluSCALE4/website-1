import React from 'react'
import ReactDOM from 'react-dom'
import { createHistory, useBasename } from 'history'
import { syncReduxAndRouter } from 'redux-simple-router'
import routes from './routes'
import Root from './containers/Root'
import configureStore from './redux/configureStore'
import { addLocaleData } from 'react-intl'
import en from 'react-intl/lib/locale-data/en'
import de from 'react-intl/lib/locale-data/de'
import it from 'react-intl/lib/locale-data/it'
import es from 'react-intl/lib/locale-data/es'
import fr from 'react-intl/lib/locale-data/fr'

import injectTapEventPlugin from 'react-tap-event-plugin'

// Needed for onTouchTap
// Can go away when react 1.0 release
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin()

const history = useBasename(createHistory)({
  basename: __BASENAME__
})
const store = configureStore(window.__INITIAL_STATE__)

syncReduxAndRouter(history, store, (state) => state.router)

addLocaleData(en)
addLocaleData(de)
addLocaleData(it)
addLocaleData(es)
addLocaleData(fr)

// All modern browsers, expect `Safari`, have implemented
// the `ECMAScript Internationalization API`.
// For that we need to patch in on runtime.
if (!global.Intl) {
  require.ensure(['intl'], require => {
    require('intl')
    start()
  }, 'IntlBundle')
}
else start()

function start () {
  // Render the React application to the DOM
  ReactDOM.render(
    <Root history={history} routes={routes} store={store} />,
    document.getElementById('root')
  )
}
