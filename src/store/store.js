import {createStore,compose} from 'redux'
import reducers from './reducers/reducers'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;/* 配置 redux devTools */
export default createStore(reducers,composeEnhancers())
