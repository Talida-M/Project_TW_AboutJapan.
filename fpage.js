
const express=require("express");
const app=express();
const fs=require("fs");
const formidable=require("formidable");
app.set('view engine', 'ejs');
app.use(express.static("resurse"));



app.post("/comanda",function(req,res){

    var date=fs.readFileSync("feed.json","utf8");
    var pdate=JSON.parse(date);//transform json in javascript
//console.log(date);
//console.log(date[0].produs);
    var form = new formidable.IncomingForm(); //creez ob formular
    form.keepExtensions=true;
    form.parse(req,function(err,fields,files){
        var lname=fields.nume;
        var fname=fields.fname;
        var subject=fields.subject;
        ob={name:lname,fnume:fname,sub:subject};
//array.push(ob);
        pdate.push(ob);
        fs.writeFileSync("feed.json",JSON.stringify(pdate));
        res.send("Last name: " + lname + " \n First Name" + fname + " \n Subject: " + subject);

    });
});
app.get("/comenzi", function(req,res){
    var date=fs.readFileSync("feed.json","utf8");
    var pdate=JSON.parse(date);//transform json in javascript
    res.render("feed",{feed:pdate});

});