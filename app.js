const express = require("express");  
const app = express();
const bodyParser = require("body-parser");
const fs = require("fs");
const urlencodedParser = bodyParser.urlencoded({extended: false});
var content = fs.readFileSync("./lpu.json", "utf8");
var users = JSON.parse(content);

app.set("view engine", "pug");
app.use("/contact", function(request, response){

			    response.render("contact", {
			    	Hospital: users.Hospital,
			    	users: JSON.stringify(users)
			  
			    });			    
app.use(express.static(__dirname + '/css'));			        
});  
app.listen(3000);


