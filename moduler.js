var fs = require('fs');
var path = require('path');

module.exports = function (arg1, arg2, callback) {
    fs.readdir(arg1, function (err, data) {
        var list = [];
        if (err)
            return callback(err, null);
        else data.forEach(function (val) {
            if (path.extname(val) === "." + arg2)
                list.push(val);
        })

        return callback(null,list);
    })
};