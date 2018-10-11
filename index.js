const express = require('express');
const http = require('http');
const reactViews = require('express-react-views');
const path = require('path');

const port = 5000;

const eApp = express();

//Config react engine
eApp.set('view engine', 'jsx');
eApp.engine('jsx', reactViews.createEngine());

//Config view folder
eApp.use(express.static(path.join(__dirname, '/views')));

//Routing
eApp.get('/', (req, res) => {
  res.render('homePage');
});

const server = http.createServer(eApp);
//Log something when server is ready
server.on('listening', () => {
  const addr = server.address();
  const bind = `${typeof addr === 'string' ? 'pipe' : 'port'} ${
    typeof addr === 'string' ? addr : addr.port
  }`;
  console.log(`Server is listening on ${bind}`);
  console.log(`Visit: http://localhost:${addr.port}`);
});

server.listen(port);
