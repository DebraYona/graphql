import { resolvers} from "./resolvers";
import { from } from "apollo-link";
import {makeExecutableSchema} from "graphql-tools";


const typeDefs = `

    type Query {
        hello: String,
        greet : Int ,
    }
 
`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})


