import React, { Component } from 'react';
import './EditForm.css';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

const editorConfiguration = {
    toolbar: ['bold', 'italic', 'bulletedList', 'numberedList', 'blockQuote', 'Undo', 'Redo'],
}

class EditForm extends Component {
    editor = React.createRef();
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


    reset = () => {
        document.getElementById("form-reset").click();
        this.editor.current.editor.setData("");
        this.setState(
            {
                input_student_id: null,
                input_teacher_id: null,

                time_input_start: null,
                time_input_end: null,

                input_recording_id: null,
                input_course_part_id: null,

                question_input: null,
                answer_input: null,
            }
        )
    }

    handleEditorChange = (e, editor) => {
        let data = editor.getData()
        let answer_input = null
        if (data) {
            answer_input = data
        }
        this.setState({
            answer_input: answer_input
        })
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
        }
        this.setState(newstate)
    }

    render() {
        return (
            <form onChange={this.collectInfos}>
                <p style={{ textAlign: "center" }}>Enter a Q and A pair</p>
                <br></br>

                <div className="two-columns">
                    <div style={{ marginRight: "10px" }}>

                        <div className="one-row">
                            <label htmlFor="time-input-start" >Start time</label>
                            <label htmlFor="time-input-end" >End time</label>
                            <input type="time" id="time-input-start" className="form-control" step="1"></input>
                            <input type="time" id="time-input-end" className="form-control" step="1"></input>
                        </div>
                        <br></br>
                        
                        <div className="one-row">
                            <label htmlFor="input-student-id" >Student</label>
                            <label htmlFor="input-teacher-id" >Teacher</label>

                            <select id="input-student-id" className="form-control">
                                <option value="">--</option>
                                {this.props.students.map((student) => (<option key={student["id"]} value={student["id"]}>{student["student_firstname"]+" "+student["student_name"]}</option>))}
                            </select>

                            <select id="input-teacher-id" className="form-control">
                                <option value="">--</option>
                                {this.props.teachers.map((teacher) => (<option key={teacher["id"]} value={teacher["id"]}>{teacher["teacher_firstname"] + " " + teacher["teacher_name"]}</option>))}
                            </select>

                        </div>
                        <br></br>

                        <div className="one-row">
                            <label htmlFor="input-recording-id"  >Recording</label>
                            <label htmlFor="input-course-part-id" >Course part</label>
                            <select id="input-recording-id" className="form-control">
                                <option value="">--</option>
                                {this.props.recordings.map((recording) => (<option key={recording} value={recording}>{recording}</option>))}
                            </select>
                            <select id="input-course-part-id" className="form-control">
                                <option value="">--</option>
                                {this.props.courseParts.map((coursePart) => (<option key={coursePart} value={coursePart}>{coursePart}</option>))}
                            </select>
                        </div>
                        <br></br>

                        <label htmlFor="question-input">Question</label>
                        <textarea type="text" id="question-input" className="form-control" style={{ resize: 'vertical' }} rows="3"></textarea>
                        
                    </div>

                    <div style={{marginLeft: "10px"}}>
                        <label htmlFor="answer-input" >Answer</label>
                        <CKEditor
                            id="answer-input"
                            ref= {this.editor}
                            config={editorConfiguration}
                            editor={ClassicEditor}
                            onChange={this.handleEditorChange}
                        />
                        <p style={{fontSize:"10px"}}>you can type with LaTeX conventions in the editor</p>
                        <input type="reset" id="form-reset" style={{ display: "none" }}></input>
                    </div>
                </div>    
            </form >

        );
    }
}

export default EditForm;