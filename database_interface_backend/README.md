# DATA BASE INTERFACE BACKEND

1. generate models.py file from RDS data base
```
python manage.py inspectdb > qa_insertor/models.py
```

2. run the server :

```
python manage.py runserver
```

## Special commands

* To run sync the database :

```
python manage.py makemigrations
python manage.py migrate --database=database_name
```
> add routers for multiple data bases to specify action for makemigrations command

* To stop the server : press the escape key

* To use a relation for a database in Django

``` python
Relation.objects.using('database_name').all()
object.save(using='database_name')
```