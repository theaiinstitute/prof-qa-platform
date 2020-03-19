# DATA BASE INTERFACE PROJECT

## BACKEND : Django
Setup : 

``` bash
pip install django djangorestframework django-cors-headers psycopg2
``` 

## FRONTEND : React

Setup : 
1. download Node.JS https://nodejs.org/en/download/

2. go to frontend project
```
cd database_interface_frontend
```

3. install the necessary node modules
```
npm install
```

## CONNECTION FRONT-BACK 
Make sure to update the values of the following variables to the final endpoints :

* in App.js the global variable

```javascript
url_django = 'http://127.0.0.1:8000/qa/'
```

* in settings.py

```python
CORS_ORIGIN_WHITELIST = 'http://localhost:3000',
```
> dont forget the comma at the end (it is a tuple)

