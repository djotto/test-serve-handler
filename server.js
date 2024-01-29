const http = require('http');
const handler = require('serve-handler');

const server = http.createServer((request, response) => {
  handler(request, response, {"public": "docroot"});
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});

