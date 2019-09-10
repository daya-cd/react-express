import { createStore,applyMiddleware} from 'redux';
import {createLogger} from 'redux-logger';


import createSagaMiddleware from 'redux-saga';
import * as sagas from './saga.mock'
import { reducer } from './reducer'

const sagaMiddleware = createSagaMiddleware();

// create store with reducer function
export const store = createStore(
    reducer,
    applyMiddleware(createLogger(),sagaMiddleware)
)

for (let saga in sagas) {
    sagaMiddleware.run(sagas[saga]);
}