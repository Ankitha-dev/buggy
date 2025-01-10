import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux'
import store from './redux/createStore';

const box=ReactDOM.createRoot(document.getElementById('root'))
box.render(<Provider store={store}><App/></Provider>)