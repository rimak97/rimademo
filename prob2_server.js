const http=require("http");
const url=require("url");
const fs=require("fs");
const server=http.createServer(function(req, res){
    console.log("Request Received");
    console.log(req.url);
    if(req.url=="/"){
        rs=fs.createReadStream("prob2.html");
        rs.pipe(res);

    }
    else{
        var q=url.parse(req.url, true);
        var pri=q.query.pri;
        var rate=q.query.rate;
        var yr=q.query.yr;
        var sin;
        sin=(pri*rate*yr)/100;
        // console.log("Pri"+q.query.pri);
        // console.log("rate"+q.query.rate);
        // console.log("yr"+q.query.yr);
        res.write(`<h1>Simple Int:- ${sin} </h1>`)
      // res.write()
        res.end();
    }

});

server.listen(3000);
console.log("Server running on port 3000 ");

