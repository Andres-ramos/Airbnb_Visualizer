# Airbnb_Visualizer

This project is an Airbnb Visualizer. 

To run the project you must:

1. Setup a docker enviroment with a postGIS databse
2. Run the django backend server
3. Run the nextjs react app

To set up the docker enviroment, run the following two commands:

`docker build -t airbnb_db . `

`docker run --name airbnb_db -p 5432:5432 -d airbnb_db` 

These commands must be run on the root folder of the project (ie where the docker file is)
The first command creates an image of the postgis DB
The second command actually created the database

To run the django server you must first create an enviroment in the root folder

`python -m venv venv` 

Then install the dependencies using the command

`pip install -r requirements.txt`

To make sure the django server is working

`cd backend`
`python manage.py runserver` 

if nothing broke, good news!

The next step is to apply database migrations.

`python manage.py migrate`

Right now there's no data in the database. In order to seed the data base, go to the root folder and run the data ingest script.

`python data_ingest.py`

Finally to run the front end, make sure you're using node version 18.17. To do this I recommend using nvm (node version manager) which is sort of a node equivalent of conda.

Once nvm is installed run the command:

`nvm install 18.17`
`nvm use 18.17`

Finally run to download the node dependencies

`npm install`

To run the front end, cd into the frontend folder and run

`npm run dev`

The application should be up and running


