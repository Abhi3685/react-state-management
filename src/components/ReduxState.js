import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from '../reducers';
import ReduxScreen from './ReduxScreen';

// Store -> Globalized State
let store = createStore(rootReducer);

export default function ReduxState() {
    return (
        <Provider store={store}>
            <ReduxScreen />
        </Provider>
    )
}
