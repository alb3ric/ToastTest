import React, { Component } from 'react';
import { ToastContainer, toast }  from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DebugToast, DebugToastRef } from 'ToastLib';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <DebugToast />
        {' '}
        <DebugToastRef toast={toast}/>
        <ToastContainer/>
      </div>
    );
  }
}

export default App;
