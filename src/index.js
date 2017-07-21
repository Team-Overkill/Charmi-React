import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter} from 'react-router-dom';
import store from './store';
// import './normalize.css';
import './index.scss';
import App from './Components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(

  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>

  , document.getElementById('root'));
registerServiceWorker();
