const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors({origin: 'http://localhost:8080'}));

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

app.get('/api', (req: any, res: any) => {
  res.send(mockResponse);
});

app.listen(port, function () {
 console.log('App listening on port: ' + port);
});
