import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './views/containers/App';
import { configureStore } from './redux/store';

import 'bootstrap/dist/css/bootstrap.min.css';

const store = configureStore();

const app = (
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
ReactDOM.render(app, document.getElementById("root"));

