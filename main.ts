#! /usr/bin/env node

import inquirer from "inquirer";

let todos = [];
let condition = true;
while (condition)

{
    let addTask = await inquirer.prompt(
   [
        {
            name: 'todos',
            type: 'input',
            message: "What you want to add in your todos?"
        },
        {

            name: 'addmore',
            type: 'confirm', //ans in yes or no
            message: "Do you want to add more?",
            default: "false"
        }
    ]   
    
 );
 todos.push(addTask.todos);
 condition = addTask.addmore
 console.log(todos);


}