import React, { Component } from 'react';
import Main from './Component/MainComponent.js';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './Redux/configureStore';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
const store = ConfigureStore();


class App extends Component {


  render() {
      return (
          <Provider store={store}>
            <BrowserRouter>
              <div className="App">
                <Main />
              </div>
            </BrowserRouter>
        </Provider >
      );
    }
  }



export default App;
