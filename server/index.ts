const express = require('express');

const app = express();
const port = process.env.PORT || 4000;
const mockResponse = [
  {
    name: 'dallas sallad',
    country: 'sverige',
    picture: 'https://randomuser.me/api/portraits/med/women/96.jpg'
  },
  {
    name: 'judas sallad',
    country: 'sverige',
    picture: 'https://randomuser.me/api/portraits/med/women/96.jpg'
  },
  {
    name: 'Kalle sallad',
    country: 'sverige',
    picture: 'https://randomuser.me/api/portraits/med/women/96.jpg'
  }
];


app.get('/api', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(mockResponse);
});

app.get('/', (req, res) => {
 res.status(200).send('Hello World from the server!');
});

app.listen(port, function () {
 console.log('App listening on port: ' + port);
});
