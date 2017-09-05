var http = require('http');
var bl = require('bl');
var result = []
var count = 0;

for(var i=0;i<3; i++)
    httpGet(i);

function httpGet(index) {
    http.get(process.argv[2 + index], function (res) {
        res.pipe(bl(function (err, data) {
            if (err)
                return console.error(err);
            result[index] = data.toString();
            count++;
            if (count == 3) {
                for (var i = 0; i < 3; i++)
                    console.log(result[i]);
            }
        }))
    });
}
