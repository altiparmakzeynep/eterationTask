import React, { Component } from 'react';
import ReduxThunk from 'redux-thunk';
import { PersistGate } from 'redux-persist/es/integration/react';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import {legacy_createStore as createStore, applyMiddleware} from 'redux';
import rootReducer from './src/reducers/rootReducer';
import RouterComp from './Router';

export default function App() {

  const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk))
  const persisStore = persistStore(store)
  return (
    <Provider store={store}>
      <PersistGate loading = {null} persistor={persisStore}>
         <RouterComp/>  
      </PersistGate>
    </Provider>
  )
}