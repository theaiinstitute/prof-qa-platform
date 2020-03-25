from .views import DATABASE


class MainRouter:
    """
    A router to control all database operations on models in the
    all applications.
    """

    def db_for_read(self, model, **hints):
        """
        Attempts to read  models go to database.
        """
        return DATABASE
    

    def db_for_write(self, model, **hints):
        """
        Attempts to write models go to database.
        """
        return DATABASE

    def allow_relation(self, obj1, obj2, **hints):
        """
        Allow relations
        """
        return True


    def allow_migrate(self, db, app_label, model_name=None, **hints):
        """
        Make sure all apps appear in the database.
        """
        return db == DATABASE