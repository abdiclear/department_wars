import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import rootReducer from './reducers/rootReducer';
import rootReduce from './reducers/rootReducer';

const theBuilding = createStore(rootReduce);

ReactDOM.render(
  <Provider store={theBuilding}>
    <App />
  </Provider>,
  document.getElementById('root')
);

