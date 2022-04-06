import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import SignIn from "./pages/signin";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import User from "./pages/user";
import {Provider} from 'react-redux'
import store from './app/store.jsx'

ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={ <App/> }/>
                  <Route path='/sign-in' element={ <SignIn/> }/>
                  <Route path='/user' element={ <User/> }/>
              </Routes>
          </BrowserRouter>
      </Provider>

  </React.StrictMode>,
  document.getElementById('root')
);

