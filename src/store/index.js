// import { createStore, applyMiddleware } from 'redux';
// import promiseMiddleware from 'redux-promise'

// import rootReducer from './reducers';

// export default createStore(rootReducer, applyMiddleware(promiseMiddleware));

import Vuex from '@wepy/x'
import users from './modules/user'

export default new Vuex.Store({
    modules: {
        users,
    }
})