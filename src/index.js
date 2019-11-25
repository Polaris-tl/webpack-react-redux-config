import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {Provider} from 'react-redux'
import store from './store/store'
import {BrowserRouter as Router,Route} from 'react-router-dom'

import './css/init.less'

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Route component={App}/>
    </Router>
  </Provider>
  ,
  document.getElementById("root")
)

if (module.hot) {
  module.hot.accept();
}

