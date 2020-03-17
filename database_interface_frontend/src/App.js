import React, { Component } from 'react';
import './App.css';
import UploadForm from './UploadForm';
import EditForm from './EditForm';


class App extends Component {

  edit_form = React.createRef();
  file_upload = React.createRef();

  handleSubmit = (e) => {
    console.log(this.edit_form.current.state)
    console.log(this.file_upload.current.state)
  }

  render() {
    return (
      <div className='app-container'>

        <div className='title'>
          The AI Institue : Q and A interface
        </div>

        <div className='inputs-container'>
          <UploadForm ref={this.file_upload}/>
          <EditForm ref={this.edit_form} />
        </div>

        <div style={{ textAlign: 'right', margin:'15px' }}>
          <button type="submit" className='send-button' onClick={this.handleSubmit}>Send</button>
        </div>
        
      </div>

    );
  }
}


export default App;