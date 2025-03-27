import "../styles/globals.css";
import Head from "next/head";

// Redux
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import user from '../reducers/user';

// Redux-persist
/*
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';
const reducers = combineReducers({ user });
const persistConfig = { key: 'hackatweet', storage };
*/

const store = configureStore({
  reducer: { user },
});

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Hackatweet</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;