import React, { Component } from 'react';
import './UploadForm.css';


class UploadForm extends Component {
    state = {
        file : null
    }

    reset = () => {
        document.getElementById("file-reset").click()
        this.setState(
            {
                file: null
            }
        )
    }

    processText = (csv) => {
        let lines = csv.split(/\r\n|\n/);
        let values = [];
        var columns = lines[0].split(/,|;/);

        for (var i = 1; i < lines.length; i++) {
            var obj = {};
            var row = lines[i].split(/,|;/);

            for (var j = 0; j < columns.length; j++) {
                obj[columns[j]] = row[j];
            }
            values.push(obj);
        }
        return values; 
    }

    handleLoad = (e) => {
        let file = this.processText(e.target.result)
        this.setState({ file: file });
    }

    handleError = (e) => {
        alert(e.target.error.name)
    }
    
    handleChange = (e) => {
        if (document.getElementById('upload-input').value){
            let reader = new FileReader();
            reader.readAsText(document.getElementById('upload-input').files[0]);
            reader.onload = this.handleLoad;
            reader.onerror = this.handleError;
        }
        else {
            this.setState({ file: null });
        }    
    }

    render() {
        return (
            <form className='border-left'>
                <p style={{ textAlign: "center" }}>Upload a file</p>
                <br></br>
                <label htmlFor="upload-input" >Upload a csv file containing all the necessary fields</label>
                <input id="upload-input" type="file" className="upload-control" onChange={this.handleChange} />
                <input type="reset" id="file-reset" style={{ display: "none"}}></input>
                <p style={{ marginTop:"50px", textAlign: "left", fontSize:"10px"}}>The uploaded table should look like this example, with the same column labels : </p>

                <table class="tg">
                    <tr>
                        <th class="tg-uy2u">question_input</th>
                        <th class="tg-uy2u">answer_input</th>
                        <th class="tg-uy2u">input_course_part_id</th>
                        <th class="tg-uy2u">input_recording_id</th>
                        <th class="tg-uy2u">time_input_start</th>
                        <th class="tg-uy2u">time_input_end</th>
                        <th class="tg-uy2u">input_student_id</th>
                        <th class="tg-uy2u">input_teacher_id</th>
                    </tr>
                    <tr>
                        <td class="tg-4a11">question ?</td>
                        <td class="tg-4a11">answer ...</td>
                        <td class="tg-4a11">1</td>
                        <td class="tg-4a11">15</td>
                        <td class="tg-4a11">1:15:20</td>
                        <td class="tg-4a11">1:20:13</td>
                        <td class="tg-4a11">5</td>
                        <td class="tg-4a11">17</td>
                    </tr>
                </table>
            </form>
        );
    }
}

export default UploadForm;


