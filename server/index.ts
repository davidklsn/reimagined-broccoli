const express = require('express');
const cors = require('cors');
const request = require('request');

const app = express();
app.use(cors({origin: 'http://localhost:8080'}));

const port = process.env.PORT || 4000;

const parseBody = (users: any) => {
  const parsed_users = users.map((user: any) => {
    return {
      name: user.name.first,
      country :user.location.country,
      picture: user.picture.medium,
    }
  })

  return parsed_users;
}

app.get('/api', (req: any, res: any) => {
  request.get("https://randomuser.me/api/?results=50", (err: any, response: any, body: any) => {
    const response_users = parseBody(JSON.parse(body).results);
    res.send(response_users);
  });
});

app.listen(port, function () {
 console.log('App listening on port: ' + port);
});
