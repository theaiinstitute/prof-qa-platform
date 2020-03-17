import React, { Component } from 'react';
import './EditForm.css';


class EditForm extends Component {

    state = {
        input_student_id: null,
        input_teacher_id: null,

        time_input_start: null,
        time_input_end: null,

        input_recording_id: null,
        input_course_part_id: null,

        question_input: null,
        answer_input: null,
    }

    collectInfos = (e) => {
        let newstate = {
            input_student_id: document.getElementById("input-student-id").value ? document.getElementById("input-student-id").value : null,
            input_teacher_id: document.getElementById("input-teacher-id").value ? document.getElementById("input-teacher-id").value : null,

            time_input_start: document.getElementById("time-input-start").value ? document.getElementById("time-input-start").value : null,
            time_input_end: document.getElementById("time-input-end").value ? document.getElementById("time-input-end").value : null,

            input_recording_id: document.getElementById("input-recording-id").value ? document.getElementById("input-recording-id").value : null,
            input_course_part_id: document.getElementById("input-course-part-id").value ? document.getElementById("input-course-part-id").value : null,

            question_input: document.getElementById("question-input").value ? document.getElementById("question-input").value : null,
            answer_input: document.getElementById("answer-input").value ? document.getElementById("answer-input").value : null,
        }
        this.setState(newstate)
    }

    render() {
        return (
            <form className='border-left' onChange={this.collectInfos}>
                <p style={{ textAlign: "center" }}>Enter a Q and A pair</p>
                <br></br>

                <div className="one-row">
                    <label htmlFor="input-student-id" >Student id</label>
                    <label htmlFor="input-teacher-id" >Teacher id</label>
                    <input type="number" id="input-student-id" className="form-control" step="1"></input>
                    <input type="number" id="input-teacher-id" className="form-control" step="1"></input>
                </div>
                <br></br>

                <div className="one-row">
                    <label htmlFor="time-input-start" >Start time</label>
                    <label htmlFor="time-input-end" >End time</label>
                    <input type="time" id="time-input-start" className="form-control" step="1"></input>
                    <input type="time" id="time-input-end" className="form-control" step="1"></input>
                </div>
                <br></br>

                <div className="one-row">
                    <label htmlFor="input-recording-id" >Recording id</label>
                    <label htmlFor="input-course-part-id" >Course part id</label>
                    <input type="number" id="input-recording-id" className="form-control" step="1"></input>
                    <input type="number" id="input-course-part-id" className="form-control" step="1"></input>
                </div>
                <br></br>

                <label htmlFor="question-input">Question</label>
                <textarea type="text" id="question-input" className="form-control" style={{ resize: 'vertical' }} rows="2"></textarea>
                <br></br>

                <label htmlFor="answer-input" >Answer</label>
                <textarea type="text" id="answer-input" className="form-control" style={{ resize: 'vertical' }} rows="4"></textarea>

            </form >

        );
    }
}

export default EditForm;



