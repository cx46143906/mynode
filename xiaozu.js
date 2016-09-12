var fs=require('fs');
var str = fs.readFileSync("./ejs.html","utf8");
var ejs = require("ejs");

var data={
    title:"hello tiger",
    list:[
        {name:"xiaozu"},
        {name:"tiger"},
        {name:"biubiu"}
    ]
}
var html = ejs.render(str,data);
console.log(html);