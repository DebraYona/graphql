import {  tasks } from "./sample";

export const resolvers = {
    Query:{
        hello: () =>{
            return ' NicoNico ni'
        },
        greet: (root, {name} ) =>{
            console.log(name);
            return `jello ${name}`; 
        },
        Tasks(){
            return tasks;

        },       
    },
    Mutation:{
        createTask(_, {input}){
            input._id = tasks.length;
            tasks.push(input);
            return input;
        }
    }
};