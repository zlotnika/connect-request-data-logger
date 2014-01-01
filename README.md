connect-request-data-logger
===========================

Log the request data. By default, logs *query*, *body*, and *files*. Formatted to look much like the rails request log.

Install
-------

```BASH
npm install connect-request-data-logger
```

Example
-------

```JavaScript
var http = require('http')
var connect = require('connect')
var logger = require('connect-request-data-logger')

var app = connect()

// make sure the objects are added to the request before the request is logged
    .use(connect.query())
    .use(connect.bodyParser())


// you can specify any objects within the request to log
    .use(logger({ delimiter: ', ', keys: ['query', 'body'] }))

    .use(function(req, res){
        res.end('hello world\n');
    })

http.createServer(app).listen(3000);
```