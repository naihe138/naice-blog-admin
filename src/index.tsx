import React from 'react'
import ReactDOM from 'react-dom'
import './common/scss/reset.scss'
import 'antd/dist/antd.css';
import App from './App'
import * as serviceWorker from './serviceWorker'
import reportWebVitals from './reportWebVitals';
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()

reportWebVitals();
