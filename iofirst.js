var fs = require("fs");

//var data=fs.readFileSync(process.argv[2]);

//var arr=data.toString().split('\n');

//console.log(arr.length-1);

var arr;
fs.readFile(process.argv[2],function(err, data){
    if(err)
        return console.log(err);
     if(data)
         arr=data.toString().split('\n');
     console.log(arr.length-1);
}
);
