import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './App';
import store from './lib/store';
import { Provider } from 'react-redux';
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));