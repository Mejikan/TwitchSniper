const url = require('url');
const path = require('path');
const fs = require("fs");
const http = require('http');
const querystring = require('querystring');

const WebHandler = {
  init: function(hostname, port){
	this.mimeTypes = JSON.parse(fs.readFileSync('mimetypes.json'));

    this.server = http.createServer((request, response) => {
      // handlers based on path
      handleRequest(request, response);
    });

    this.server.listen(port, hostname, () => {
      console.log(`Server running at http://${hostname}:${port}/`);
    });
  }
}

function handleRequest(request, response){
  // Parse the request containing file name
  let urlObj = url.parse(request.url);
  let query = querystring.parse(urlObj.query);
  let pathname = urlObj.pathname;
  //console.log("Request for " + pathname + " received.");
  let requestPath = decodeURI(pathname.substr(1));
  //console.log("Request for " + requestPath + " received.");

  let requestPathArgs = requestPath.split('/');
	let cleanRequestPath = requestPath.trim();
	if (cleanRequestPath === '' || requestPathArgs[0] === 'sniper'){
	  requestPath = 'index.html';
	}

	// handle mime and ext
	let extname = path.extname(requestPath);
	let mimetype = getMIMEType(extname);

	response.setHeader('Content-Type', mimetype);

	// file reads and response
	if (extname !== undefined && extname !== null && extname != ''){
		let filePath = requestPath;
		if (fs.existsSync(filePath)){
		  response.statusCode = 200;
		  response.end(fs.readFileSync(filePath));
		} else {
		  console.error('404 File Not Found: ' + requestPath);
		  response.statusCode = 404;
		  response.end();
		}
	}
}

function getMIMEType(extname){
  extname = extname.substring(1);
  let mimetype = WebHandler.mimeTypes[extname];
  //console.log(extname + ', ' + mimetype);
  if (mimetype === undefined){
    mimetype = 'text/plain';
  }
  return mimetype;
}

//module.exports = WebHandler;
WebHandler.init('localhost', 80);
