from rest_framework.views import APIView
from rest_framework.response import Response
from django.db import connections

DATABASE = "test" # or "default"

def add_row_to_db(edit_form):

    if all(edit_form[k] == None for k in edit_form):
        return "OK"

    elif any(edit_form[k] == None for k in edit_form):
        return "ERROR : all fields are mandatory"

    else :
        try:
            cursor = connections[DATABASE].cursor()
            cursor.execute(
                f"""
                INSERT INTO question_answer(
                    question_answer_question_text,
                    question_answer_answer_text,
                    question_answer_course_part_id,
                    question_answer_bootcamp_recording_id,
                    question_answer_start_date,
                    question_answer_end_date,
                    question_answer_student_id,
                    question_answer_teacher_id
                )
                VALUES (
                    '{edit_form["question_input"]}',
                    '{edit_form["answer_input"]}',
                    '{edit_form["input_course_part_id"]}',
                    '{edit_form["input_recording_id"]}',
                    TO_TIMESTAMP('{edit_form["time_input_start"]}', 'HH24:MI:SS'),
                    TO_TIMESTAMP('{edit_form["time_input_end"]}', 'HH24:MI:SS'),
                    '{edit_form["input_student_id"]}',
                    '{edit_form["input_teacher_id"]}'
                );
            """
            )
            return "OK"

        except:
            return "ERROR : SQL problem"


def add_rows_to_db(file_upload):
        if file_upload["file"] == None:
            return "OK"
        else :
            messages = []
            for row in file_upload["file"]:
                messages.append(add_row_to_db(row))

            if all(m =="OK" for m in messages):
                return "OK"
            else :
                return "ERROR : check columns labels, input values and csv format"

class QnAInsertorAPI(APIView):
    """
    Add question answer pairs in database
    """

    def post(self, request):
        data = request.data
        
        edit_form = data["edit_form"]
        file_upload = data["file_upload"]

        response_form = add_row_to_db(edit_form)
        response_file = add_rows_to_db(file_upload)

        if response_form == "OK" and response_file == "OK":
            response = "OK"

        else:
            response = {
                'response_form' : response_form,
                'response_file' : response_file
            }

        return Response(response)