import { Given, When, Then } from '@cucumber/cucumber';
 import  dotenv from 'dotenv';
 import * as path from 'path';
    
    dotenv.config({ 
      path: path.resolve(process.cwd(), 'test.env') 
    });

Given('user logins with username {username} and password {password}', function (username, password) {
   console.log("Hello World");
    console.log("reading environment variable from .env file " +process.env.username)
});

When('user click on Login button', function () {
  // Write code here that turns the phrase above into concrete actions
    console.log("Hello Click on Login button")
});


