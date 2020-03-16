import React, { Component } from 'react';
import './EditForm.css';


class EditForm extends Component {

    render() {
        return (
            <form className='border-left'>
                    <p style={{ textAlign: "center"}}>Enter a Q and A pair</p>
                    <br></br>

                    <label for="time-input" >Time</label>
                    <input type="time" id="time-input" className="form-control" step="1"></input>
                    <br></br>


                    <label for="question-input">Question</label>
                    <textarea type="text" id="question-input" className="form-control" style={{resize: 'vertical'}} rows="2"></textarea>
                    <br></br>

                    <label for="answer-input" >Answer</label>
                    <textarea type="text" id="answer-input" className="form-control" style={{ resize: 'vertical' }} rows="4"></textarea>

                </form>

        );
    }
}

export default EditForm;



