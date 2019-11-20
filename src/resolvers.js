import {  tasks } from "./sample";

import User from "./models/user"


export const resolvers = {
    Query:{
        hello: () =>{
            return ' NicoNico ni'
        },
        greet: (root, {name}, ctx ) =>{
            console.log(ctx);
            return `jello ${name}`; 
        },
        Tasks(){
            return tasks;

        },
        async Users(){
            return await User.find();
        },
        async getUser(_, {_id}) {
            return await User.findById(_id);
        }
          
    },
    Mutation:{
        createTask(_, {input}){
            input._id = tasks.length;
            tasks.push(input);
            return input;
        },
        async createUser(_, { input }) {
            return await User.create(input);
        },
        async updateUser(_, {_id, input}) {
            return await User.findByIdAndUpdate(_id, input, {new: true});
        },
        async deleteUser(_, {_id}) {
            return await User.findByIdAndDelete(_id);
        }
        
    }
};