import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.js';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
// import { store } from '../src/redux/reduxTool'
import { persistor, store } from './redux/reduxPersist';
import asyncstore from './redux/asynchronus/store'

const root = ReactDOM.createRoot(document.getElementById('root'));

//uncomment untuk menggunakan store biasa + persistor
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

//uncomment untuk menggunakan asynchronus store
// root.render(
//   <React.StrictMode>
//     <Provider store={asyncstore}>
//       <App />
//     </Provider>
//   </React.StrictMode>
// );


