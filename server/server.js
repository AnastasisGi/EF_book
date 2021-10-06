const express = require('express');
const mongoose = require('mongoose');
const next = require('next');


require('dotenv').config();
const dev = process.env.NODE_ENV !== 'production';
const MONGO_URL = process.env.MONGO_URL_TEST;

const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
};
mongoose.connect(MONGO_URL, options);


const port = process.env.PORT || 8000;
const ROOT_URL = `http://localhost:${port}`;

const app = next({dev});
const handle = app.getRequestHandler();



app.prepare().then(()=>{
  const server = express();

  

  server.get('/', (req, res) => {
    const user = { email: 'team@builderboo11k.org!' };
    app.render(req, res, '/', { user });
  });

  server.get('*',(req,res)=> handle(req,res));

  
server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on ${ROOT_URL}`);
    console.log(process.env.MONGO_URL_TEST)
  });


});











