The project consists of a login system to register tasks, made with react and django

### TECHNOLOGIES
- Python 
- Django
- Django Rest framework
- django-cors-headers to allow the react app to consume the django api
- Angular
- NODEJS
- Typescript

![Foo](https://raw.githubusercontent.com/matheusosp/DjangoComAngular/main/Management%20of%20Members%20-%20Google%20Chrome.jpg)

## TO RUN LOCALLY
```
git clone git@github.com:matheusosp/DjangoComAngular.git
cd backend
python -m venv venv
venv/Scripts/activate
pip install -r requirements.txt 
python manage.py makemigrations
python manage.py migrate 
python manage.py runserver
python manage.py createsuperuser
login and create token authentication in http://127.0.0.1:8000/admin
cd ..
cd frontend
npm install
Update baseURL api to localhost
ng s -o
```
