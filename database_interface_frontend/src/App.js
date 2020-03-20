import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import UploadForm from './UploadForm';
import EditForm from './EditForm';


class App extends Component {

  edit_form = React.createRef();
  file_upload = React.createRef();
  state = {
    students: [],
    teachers: []
  }
  url_django = 'http://127.0.0.1:8000/'  //dev mode
  //url_django = 'http://35.180.191.115:8000/'  // prod mode


  componentDidMount = () => {
    axios.get(this.url_django + 'students/')
      .then(response => {
        console.log(response.data);
        this.setState({
          students: response.data
        });
      });

    axios.get(this.url_django + 'teachers/')
      .then(response => {
        console.log(response.data);
        this.setState({
          teachers: response.data
        });
      });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let data = {
      edit_form: this.edit_form.current.state,
      file_upload: this.file_upload.current.state
    };

    axios.post(this.url_django + 'qa/', data)
      .then(response => {
        alert(response.data);
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
          <EditForm ref={this.edit_form} students={this.state.students} teachers={this.state.teachers} recordings={["r1", "r2"]} courseParts={["p1", "p2"]} />
          <UploadForm ref={this.file_upload} />
        </div>

        <div style={{ textAlign: 'right', padding: '20px' }}>
          <button className='send-button' onClick={this.handleReset}>Reset</button>
          <button type="submit" className='send-button' onClick={this.handleSubmit}>Send</button>
        </div>

      </div>
    );
  }
}


export default App;