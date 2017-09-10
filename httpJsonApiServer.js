var http = require('http');
var url = require ('url');

var server = http.createServer((req, res)=>{
    res.writeHead(200, { 'Content-Type': 'application/json' })
    var urlObj = url.parse(req.url, true);
    var iso = new Date(urlObj.query.iso);

    if(urlObj.pathname === '/api/parsetime'){
        var date = {
            hour : iso.getHours(),
            minute : iso.getMinutes(),
            second : iso.getSeconds()
        }
        res.end(JSON.stringify(date));
    }
    else if(urlObj.pathname === '/api/unixtime'){    
        var date ={
            unixtime : iso.getTime()
        }
        res.end(JSON.stringify(date));
    }
    
})
server.listen(process.argv[2]);

