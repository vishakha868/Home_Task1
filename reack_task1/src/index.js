import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Footer from './Components/Footer';
import Main from './Components/Main';
import reportWebVitals from './reportWebVitals';
import {Provider} from 'react-redux';
import store from './redux/store';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const strictMode=process.env.NODE_ENV==='production';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  (strictMode &&(
  <React.StrictMode>
    <Provider store={store}>
    <Main/>   
    
    </Provider>
    <Footer/>
   
  </React.StrictMode>))||<>
  <Provider store={store}>
  <Main/>
  </Provider>
 <Footer/></>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
