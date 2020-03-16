import React, { Component } from 'react';
import './UploadForm.css';


class UploadForm extends Component {

    render() {
        return (
            <form>
                <p style={{ textAlign: "center" }}>Upload a CSV</p>
                <br></br>

                <label for="upload-input" >Click to upload</label>

                <input id= "upload-input" type="file" className="upload-control"/>

            </form>


        );
    }
}

export default UploadForm;


