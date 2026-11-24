import  dotenv from 'dotenv';

import * as path from 'path';

interface Account {

  username: any,
  password: any;
}




export const envFile = process.env.NODE_ENV ? `${process.env.NODE_ENV}.env` : 'test.env';

console.log(envFile)

export let envCredentials:Account;

dotenv.config({ 
  path: path.resolve(process.cwd(), envFile) 
});

if (envFile==='test.env')
{

  envCredentials= {

    username: process.env.TestUserName1,
    password: process.env.TestPassword1

  }


}
else{

  envCredentials= {

    username: process.env.ProdUserName1,
    password: process.env.ProdPassword1

  }


}


// function readfromEnvFile(appUserName:string, password:string)
// {

//   console.log("reading environment variable from .env file " +process.env[appUserName]+ " "+process.env[password]);
// }

// readfromEnvFile("TestUserName1", "TestPassword1");

console.log(`reading environment variable from ${envFile} file, userName as  ${envCredentials.username} and password as ${envCredentials.password}`);