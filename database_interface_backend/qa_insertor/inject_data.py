from django.db import connections
from .views import DATABASE


def add_student(firstname, name, birth, country):
    try:
        cursor = connections[DATABASE].cursor()
        cursor.execute(
            f"""
            INSERT INTO student(
                student_firstname,
                student_name,
                student_birth,
                student_country
            )
            VALUES (
                '{firstname}',
                '{name}',
                TO_TIMESTAMP('{birth}', 'DD/MM/YYYY'),
                '{country}'
            );
        """
        )
        return "OK"

    except:
        return "ERROR : SQL problem"


def add_teacher(firstname, name, birth, country):
    try:
        cursor = connections[DATABASE].cursor()
        cursor.execute(
            f"""
            INSERT INTO teacher(
                teacher_firstname,
                teacher_name,
                teacher_birth,
                teacher_country
            )
            VALUES (
                '{firstname}',
                '{name}',
                TO_TIMESTAMP('{birth}', 'DD/MM/YYYY'),
                '{country}'
            );
        """
        )
        return "OK"

    except:
        return "ERROR : SQL problem"
