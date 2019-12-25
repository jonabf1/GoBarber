import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor = process.env.NODE_ENV === 'development' 
? console.tron.createSagaMonitor() : null;

const sagaMIddleware = createSagaMiddleware({sagaMonitor});

const middlewares = [sagaMiddleware];

const store = createStore(rootReducer, middlewares)

sagaMIddleware.run(rootSaga);

export default store;
