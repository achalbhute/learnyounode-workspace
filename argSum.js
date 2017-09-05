var a=0;
process.argv.forEach(function(val){
    if(+val){
        a += +val;
    }
   });
   console.log(a);
