# Surveys - "Smart Locker"

Surveys or Smart Locker is a simple web app where one can store their system or web configurations (along with credentials).
These configurations will be saved and visible to you once you login.

# How to Start:

Note: This project requires <b>node 7.4.0</b> and <b>npm 5.6.0</b>

In order to start the project:

1. Clone/downloadd the workspace <br />
`$ git clone git@github.com:miralkumbhani/surveys.git`

2. Open the path in terminal for the workspace dependency injection <br />
`$ cd surveys`

3. install the project's dependencies <br />
`$ npm install`

4. watches your files and uses livereload by default run `npm start`. Navigate to `http://localhost:4200/`. 
The app will automatically reload if you change any of the source files. <br />
`$ npm start`

# Credentials:
Username: admin <br />
Password: admin

# Known Issues:

The project will run smoothlessly in <b>Chrome</b> Browser. Whereas, it'll not work as expected in Firefox or IE, as `backface-visibility: hidden;` is a noted issue by the above mentioned browsers.
