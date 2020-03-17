import React, { Component } from 'react';
import './UploadForm.css';


class UploadForm extends Component {
    state = {
        file : null
    }
    
    handleChange = (e) => {
        let file = document.getElementById('upload-input').value ? document.getElementById('upload-input').files[0] : null;
        this.setState({ file : file });
    }

    render() {
        return (
            <form>
                <p style={{ textAlign: "center" }}>Upload a file</p>
                <br></br>
                <label htmlFor="upload-input" >Upload a csv file containing all the necessary fields</label>
                <input id="upload-input" type="file" className="upload-control" onChange={this.handleChange} />
            </form>
        );
    }
}

export default UploadForm;


