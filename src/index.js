import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/containers/App';
import * as serviceWorker from './serviceWorker';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
//Redux
import { Provider } from 'react-redux';
//Store
import rootReducer from './state/store';

let store = rootReducer();
ReactDOM.render( <React.StrictMode><Provider store={store}><App /></Provider></React.StrictMode>, document.getElementById('root'));
serviceWorker.unregister();
