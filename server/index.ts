const express = require('express');
const cors = require('cors');
const request = require('request');
const qs = require('qs');

const app = express();
app.use(cors({origin: 'http://localhost:8080'}));

const port = process.env.PORT || 4000;

const buildObject = (users: any) => {
  return users.map((user: any) => {
    return {
      name: user.name.first,
      country :user.location.country,
      picture: user.picture.medium,
    }
  })
}

const searchParams = (query: any) => { 
  return qs.stringify(query, { encode: false })
}

app.get('/api', (req: any, res: any) => {
  request.get("https://randomuser.me/api?" + searchParams(req.query), (err: any, response: any, body: any) => {
    const response_users = buildObject(JSON.parse(body).results);
    res.send(response_users);
  });
});

app.listen(port, function () {
 console.log('App listening on port: ' + port);
});
