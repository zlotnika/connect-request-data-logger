// index.js: -*- Javascript -*- Request data logger main file.
// 
//  Copyright (c) 2013 Alex Zlotnik
//  Author: Alex Zlotnik (zlotnika@gmail.com) .

exports = module.exports = function(options) {
    options = options || {}
    // query + body + (files)
    var keys = options.keys || ['query', 'body', 'files']
    var delimiter = options.delimiter || ', '

    return function requestDataLogger(request, response, next) {

        // method
        var output = '\n' + request.method

        // path
        var path = request.url.match(/(.+)\?/)
        path = (path ? path[1] : request.url)
        output += ' ' + path

        // keys
        for (index in keys) {
            var key = keys[index]
            if (request[key] && Object.keys(request[key]).length !== 0) {
                output += delimiter + key + ': ' + JSON.stringify(request[key])
            }
        }
        output += '\n'

        // log it
        console.log(output)

        if (next) { next() }
    }
}
