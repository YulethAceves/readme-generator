const inquirer = require("inquirer")
const fs = require("fs")
const generateReadme = require("./utils/generateReadme.js")

function init (){
inquirer.prompt([
{
    type:"input",
    name:"title",
    message:"Enter Project Title"
},
{
    type:"input",
    name:"description",
    message:"Enter Project description"
},{
    type:"input",
    name:"installation",
    message:"Enter Project installation instructions"
},{
    type:"input",
    name:"usage",
    message:"Enter Project usage information"
},{
    type:"input",
    name:"contributing",
    message:"Enter Project contributiors"
},{
    type:"input",
    name:"tests",
    message:"Enter Project test instruction"
},{
    type:"list",
    name:"license",
    message:"Enter Project license",
    choices:["MIT","ISC","GPL","APACHE 2.0","None"]
},{
    type:"input",
    name:"github",
    message:"Enter Project github username"
},{
    type:"input",
    name:"email",
    message:"Enter Project email"
},
]).then(response => {
    console.log(response)
    fs.writeFileSync("README.md",generateReadme(response),function(err){
        if(err) throw err;
    })

})
} 

init()