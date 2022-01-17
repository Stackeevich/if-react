import createSagaMiddleware from 'redux-saga'; 
import { createLogger } from 'redux-logger';
import invariant from 'redux-immutable-state-invariant';

export const sagaMiddleware = createSagaMiddleware(); 

const middleware = [sagaMiddleware]; 

if (process.env.NODE_ENV === 'development') { 
    middleware.push(invariant()); 
    middleware.push(createLogger({ collapsed: true })); 
}

export default middleware;