const express = require("express"),
     app = express();

app.get("/", (req,res) => {
    res.send("Hello from Docker :)");
});

app.listen(3000, function(){
    console.log("app listening on port 3000")
})