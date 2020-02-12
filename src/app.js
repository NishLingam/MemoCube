import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MemoryApp from './components/MemoryApp';
import configureStore from './store/configureStore';


import '../node_modules/normalize.css/normalize.css';
import './styles/styles.scss';


const store = configureStore();


const state = store.getState();
console.log(state);


const jsx = (
  <Provider store={store}>
    <MemoryApp />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
