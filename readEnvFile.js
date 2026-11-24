import dotenv from 'dotenv';
import * as path from 'path';
dotenv.config({
    path: path.resolve(process.cwd(), 'test.env')
});
console.log("reading environment variable from .env file " + process.env.TestUserName1);
