import React, { Component } from 'react';
import './App.css';
import UploadForm from './UploadForm';
import EditForm from './EditForm';


class App extends Component {

  render() {
    return (
      <div className='app-container'>

        <div className='title'>
          The AI Institue : Q and A interface
        </div>

        <div className='inputs-container'>
          <UploadForm />
          <EditForm />
        </div>

        <div style={{ textAlign: 'right', margin:'15px' }}>
          <button type="submit" className='send-button'>Send</button>
        </div>
        
      </div>

    );
  }
}


export default App;