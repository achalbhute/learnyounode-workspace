var fs= require('fs');
var path = require('path');

fs.readdir(process.argv[2],function(err, data){
    if(err)
        return console.log(err);
    data.forEach(function(val)
    {
        if(path.extname(val) === "."+process.argv[3])
        console.log(val);
    })
    
})