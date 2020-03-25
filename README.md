# DATA BASE INTERFACE PROJECT

## BACKEND : Django
### I. To setup : 

download python and pip, and 

``` bash
pip install -r requirements.txt
```

### II. To run in dev mode:
1. activate dev settings in database_interface_backend/database_interface_backend/settings.py

```python
DEBUG = True

ALLOWED_HOSTS = []  # dev mode
#ALLOWED_HOSTS = ['35.180.191.115']  # prod mode

CORS_ORIGIN_WHITELIST = 'http://localhost:3000', # dev mode 
#CORS_ORIGIN_WHITELIST = 'http://35.180.191.115:5000', # prod mode
```
> dont forget the comma at the end (it is a tuple)

2. run server : go to the root directory of the file manage.py and run 
```
python manage.py runserver
```

### III. To run in prod mode (deploy)
1. activate prod settings in database_interface_backend/database_interface_backend/settings.py

```python
DEBUG = False

#ALLOWED_HOSTS = []  # dev mode
ALLOWED_HOSTS = ['35.180.191.115']  # prod mode

#CORS_ORIGIN_WHITELIST = 'http://localhost:3000', # dev mode 
CORS_ORIGIN_WHITELIST = 'http://35.180.191.115:5000', # prod mode
```
> dont forget the comma at the end (it is a tuple)

2. run server : go to the root directory of the file manage.py and run 
```
python manage.py runserver 0:8000
```

### IV. Data Base Choice
there are two databases : default and test, to choose which one to connect to please change the value of the global variable in database_interface_backend/database_interface_backend/qa_insertor/views.py

``` python
DATABASE = "test"  # or "default"
```

### V. Install Django authentification tables
run the following commands if you want to push or update the django auth tables in the database 
> make sure you are in the same directory as manage.py

```bash
python manage.py makemigrations
python manage.py migrate
```

## FRONTEND : React

### I. To Setup : 
1. download Node.JS https://nodejs.org/en/download/ and npm

2. go to frontend project
```
cd database_interface_frontend
```

3. install the necessary node modules
```
npm install
```

### II. To run in dev mode:
1. activate dev settings in database_interface_frontend/src/urlBackend.js

```javascript
export const url_django = 'http://127.0.0.1:8000/'  //dev mode
//export const url_django = 'http://35.180.191.115:8000/'  // prod mode
```

2. Run local developpement server in database_interface_frontend folder
``` bash
npm start
```

### III. To run in prod mode (deploy)
1. activate prod settings in database_interface_frontend/src/urlBackend.js

```javascript
//export const url_django = 'http://127.0.0.1:8000/'  //dev mode
export const url_django = 'http://35.180.191.115:8000/'  // prod mode
```

2. install serve 
```bash
npm install -g serve
```

3. Build app : in database_interface_frontend folder
```bash
npm run build
```

4. Start online server in database_interface_frontend folder
```bash
serve -s build
```