import React, { Component } from 'react';
import axios from 'axios';
import './Interface.css';
import UploadForm from './UploadForm';
import EditForm from './EditForm';
import { url_django } from './urlBackend';


class Interface extends Component {

  edit_form = React.createRef();
  file_upload = React.createRef();
  state = {
    students: [],
    teachers: [],
    course_parts: [],
    recordings: []
  }

  getOrRefreshAndGet = async (url, callback) => {
    try {
      let config = {
        headers: { Authorization: 'Bearer ' + this.props.credentials.access_token }
      };
      let response = await axios.get(url, config);
      callback(response);
    } catch (error) {
      try {
        await this.props.refreshToken();
        let config = {
          headers: { Authorization: 'Bearer ' + this.props.credentials.access_token }
        };
        let response = await axios.get(url, config);
        callback(response);
      } catch {
        console.error("ERROR : cannot import from database");
      }
    }
  }

  getData = async () => {
    await this.getOrRefreshAndGet(url_django + 'students/', response => {
      this.setState({
        students: response.data
      });
    })

    await this.getOrRefreshAndGet(url_django + 'teachers/', response => {
      this.setState({
        teachers: response.data
      });
    })

    await this.getOrRefreshAndGet(url_django + 'recordings/', response => {
      this.setState({
        recordings: response.data
      });
    })

    await this.getOrRefreshAndGet(url_django + 'course-parts/', response => {
      this.setState({
        course_parts: response.data
      });
    })

  }

  componentDidMount = () => {
    this.getData();
  }

  alertResponse = (response) => {
    alert(
      "Form response : " + response.data["response_form"] + "\n"
      + "File respose: " + response.data["response_file"]);
  }

  handleError = (error) => {
    if (error.response) {
      alert("Error : The request was made and the server responded with an error");
    } else if (error.request) {
      alert("Error : The request was made but no response was received");
    } else {
      alert("Error : Something happened in setting up the request and triggered an Error");
    }
  }


  handleSubmit = async (e) => {
    e.preventDefault();

    let data = {
      edit_form: this.edit_form.current.state,
      file_upload: this.file_upload.current.state
    };

    try {
      let config = {
        headers: { Authorization: 'Bearer ' + this.props.credentials.access_token }
      };
      let response = await axios.post(url_django + 'qa/', data, config);
      this.alertResponse(response);

    } catch (error) {
      try {

        await this.props.refreshToken();
        let config = {
          headers: { Authorization: 'Bearer ' + this.props.credentials.access_token }
        };
        let response = await axios.post(url_django + 'qa/', data, config);
        this.alertResponse(response);

      } catch (error) {
        this.handleError(error);
      }
    }
  }

  handleReset = (e) => {
    this.edit_form.current.reset()
    this.file_upload.current.reset()
  }

  handleLogout = (e) => {
    this.props.logout();
    this.props.history.push("/login");
  }

  render() {
    return (
      <div className='app-container'>

        <div className='title-qa'>
          <img src="logo.png" alt="logo"></img>
          Q and A interface
        </div>

        <div className='inputs-container'>
          <EditForm ref={this.edit_form} students={this.state.students} teachers={this.state.teachers} recordings={this.state.recordings} courseParts={this.state.course_parts} />
          <UploadForm ref={this.file_upload} />
        </div>

        <div style={{
          textAlign: 'right', padding: '20px', display: "flex",
          justifyContent: "space-between"
        }}>
          <button className='send-button' onClick={this.handleLogout}>Logout</button>

          <div>
            <button className='send-button' onClick={this.handleReset}>Reset</button>
            <button type="submit" className='send-button' onClick={this.handleSubmit}>Send</button>
          </div>
        </div>

      </div>
    );
  }
}


export default Interface;