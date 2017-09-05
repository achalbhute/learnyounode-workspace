var net =require ("net");

var server = net.createServer(function(socket){
    var data = new Date();
    let mm=data.getMonth()+1;
    let dd = data.getDate()+0;
    if(mm<10)
        mm="0"+mm;
    if(dd<10)
        dd ="0"+dd;
    var d=data.getFullYear()+'-'+mm+'-'+dd+' '+data.getHours()+':'+data.getMinutes();
    socket.write(d);
    socket.end();
});
server.listen(process.argv[2]);