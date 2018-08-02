import React, { Component } from 'react';
import { ToastContainer }  from 'react-toastify';
import { DebugToast } from 'ToastLib';
import './App.css';

class App extends Component {

  render() {
    return (
      <div>
        <DebugToast />
        <ToastContainer/>
      </div>
    );
  }
}

export default App;
