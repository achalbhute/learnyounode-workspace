var net =require ("net");

var data = new Date();
var mm= zeroFill(data.getMonth()+1);
var dd = zeroFill(data.getDate());
var hh = zeroFill(data.getHours());
var min = zeroFill(data.getMinutes());

function zeroFill(fill){
    return fill<10 ? "0"+fill : fill;
}

var server = net.createServer(function(socket){
    var d=data.getFullYear()+'-'+mm+'-'+dd+' '+hh+':'+min;
    socket.write(d);
    socket.end("\n");
});
server.listen(process.argv[2]);