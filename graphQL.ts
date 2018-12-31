import {
    graphql,
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLString
} from 'graphql';

var schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: 'RootQueryType',
        fields: {
            hello: {
                type: GraphQLString,
                resolve() {
                    return 'world';
                }
            }
        }
    })
});


// index.ts

import * as express from 'express';
console.log(process.env.NODE_ENV);

const app = express();
const host = 'localhost';
const port = 4000;

// app.get('/', (req, res) => {
//     res.send('use ' + host + ':' + port + '/test');
// })
var query = '{ hello }';


app.route('/test')
    .post((req, res) => {
        graphql(schema, query).then(result => {

            // Prints
            // {
            //   data: { hello: "world" }
            // }
            //console.log(result);
            res.json(result)
        });
        //res.json({"data":{"hello":"test"}})
    });

app.listen(port, () => {
    console.log('App is running on port ', port);
})
