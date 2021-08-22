# Twitter-feed-application


## Tase of content 

* General info
* Technologies
* Setup

### Introduction 

Simple Node Js console application with an API endpoint created using Node.JS, Express.JS and File System.

### Technologies

* Node.js
* Express.js
* React.js

### Perequisite

Before launching this project you must ensure that you have Node installed locally
Bellow are the links to help you installing it:

 —>https://nodejs.org/en/download/	

### Launch

* git clone 
* cd Twitter-feed-application
* cd server
* npm install 
* npm run server (To Launch the console app)

* npm run dev (To launch the fullstack app) 



APP STRUCTURE AND KEY POINTS


- [x] Server ==> Server
			
In the server we import 


    1.  express (The framework on which will be built the app)

- [x] Database  => File System


    * Import fs from Node runtime environment 



- [x] Server ==> Models

We have : 

    * User 
    * Tweet 
    * User_Feed (user + followers_feed)


- [x] Server ==> Routes

The routes are : 

    1. GET USERS  ==>  GET ==> /twitter-app/users
    2. GET TWEETS  ==>  GET ==> /twitter-app/feeds
    3. 404 NOT FOUND
    

- [x] MIDDLEWARE ==> OUTPUT THE DATA IN THE CONSOLE






