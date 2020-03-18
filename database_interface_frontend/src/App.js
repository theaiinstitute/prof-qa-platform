import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import UploadForm from './UploadForm';
import EditForm from './EditForm';


class App extends Component {

  edit_form = React.createRef();
  file_upload = React.createRef();
  url_django = 'http://127.0.0.1:8000/qa/'

  handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      edit_form: this.edit_form.current.state,
      file_upload: this.file_upload.current.state
    }

    axios.post(this.url_django, data)
      .then(response => {
        console.log(response.data);
      }); 
  }

  handleReset = (e) => {
    this.edit_form.current.reset()
    this.file_upload.current.reset()
  }

  render() {
    return (
      <div className='app-container'>

        <div className='title'>
          The AI Institue : Q and A interface
        </div>

        <div className='inputs-container'>
          <EditForm ref={this.edit_form} />
          <UploadForm ref={this.file_upload} />
        </div>

        <div style={{ textAlign: 'right', margin: '15px' }}>
          <button className='send-button' onClick={this.handleReset}>Reset</button>
          <button type="submit" className='send-button' onClick={this.handleSubmit}>Send</button>
        </div>

      </div>
    );
  }
}


export default App;