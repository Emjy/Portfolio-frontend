import '../styles/globals.css';
import Head from 'next/head';

import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import navigation from "../reducers/navigation";

const store = configureStore({ reducer: { navigation } });

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Emilien G.</title>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default App;
