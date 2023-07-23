const express=require("express")
const bodyParser=require("body-parser")
const date=require(__dirname + "/date.js");
const app=express()
app.set("view engine",'ejs');
app.use(bodyParser.urlencoded({extended:true}));
var taskslists=["Coding","Read Book","Music"];
var worklist=[];
app.use(express.static("public"));
app.get("/",function(req,res){
    let day=date.getDate();
    res.render("list",{listTitle:day,newtaskitem:taskslists,location:"Work"});
})
app.post("/",function(req,res){
    // console.log(req.body);
  var task=req.body.newtask;
  if(req.body.type==="work"){
    worklist.push(task);
   res.redirect("/work");
  }else{
    taskslists.push(task);
    res.redirect("/");
  }
  
})
app.get("/work",function(req,res){
    res.render("list",{listTitle:"Work",newtaskitem:worklist,location:""});
})
app.get("/about",function(req,res){
    res.render("about");
})
app.listen(3000,function(){
    console.log("server has been started");
})