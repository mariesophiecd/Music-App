import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import {legacy_createStore as createStore} from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import App from './App';
import favArtistReducer from './reducers';
import { Provider } from 'react-redux';


const store = createStore(favArtistReducer, devToolsEnhancer());


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>  
    </Provider>
  </React.StrictMode>
);

