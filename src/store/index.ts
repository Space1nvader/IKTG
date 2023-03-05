import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore } from 'redux';
import { rootReducer } from './reducer';

export const store = createStore(rootReducer, composeWithDevTools());

export type Store = ReturnType<typeof store.getState>;
