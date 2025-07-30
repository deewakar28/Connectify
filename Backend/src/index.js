import {app, port} from './app.js';
import connectDB from './db/index.js';
import dotenv from 'dotenv';

dotenv.config();

connectDB().then(()=>{
    app.listen(port, ()=>{
        console.log(`Server is running at http://localhost:${port}`)
    })
}).catch(error=>{
    console.log(error);
})