import express from 'express';
import  cors from 'cors';
import outputData from './displayData/displayOutput.js';
import RouteHandling from './routes/index.js';

const app = express();

const port = 5000;

outputData();

app.use(cors());
app.use('/twitter-app', RouteHandling);

app.use((req, res, next) =>{
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
      error : {
          message : error.message
      }
  })
})

app.listen(port,  () => {
  console.log(`Server running at http://${port}/`);
});