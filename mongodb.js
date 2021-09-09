//CRUD operations

const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';

const databaseName = 'task-manager';

mongoClient.connect(connectionURL, {useNewUrlParser : true}, (error, client)=>{
    if(error){
        return console.log('Unable to connect to the database');
    }
    const db = client.db(databaseName);
    //console.log('Connection Successful');

    // db.collection('users').insertOne({
    //     name : 'Abhishek Keshri',
    //     place : 'Bangalore'
    // }, (error, result)=>{
    //     if(error){
    //         return console.log('There was an error inserting the document');
    //     }
    //     console.log(result);
    // })

    db.collection('users').insertMany([
        {
            name : 'Raushan',
            place : 'Bihar'
        },
        {
            name : 'Priya',
            place : 'Haryana'
        }
    ], (error, result)=>{
        if(error)
            return console.log('Unable to insert in collection')
        console.log(result.ops);
    })

    db.collection('task').insertMany([
        {
            name : 'ab1',
            place : 'blr',
            age : '25'
        },{
            name : 'ab2',
            place : 'ccu',
            age : '26'
        },{
            name : 'ab3',
            place : 'del',
            age : '27'
        }
    ], (error, result)=>{
        if(error){
            return console.log('Unable to insert in the new collection')
        }
        console.log('Insertion Successful');
        console.log(result.insertedCount);
    })

})