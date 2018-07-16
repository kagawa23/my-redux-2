import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { num } from './reducer.redux';
import './redux.learn';
const store = createStore(num);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
