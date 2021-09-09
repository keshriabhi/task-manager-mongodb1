const mongoose = require('mongoose');
const validator = require('validator');

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser : true,
    //useCreateIndex : true
})

// const User = mongoose.model('User', { 
//     name : {
//         type : String,
//         required : true
//     },
//     email : {
//         type : String,
//         required : true,
//         lowercase : true,
//         trim : true,
//         validate(value){
//             if(!validator.isEmail(value)){
//                 throw new Error('Email is invalid, bro!')
//             }
//         }
//     },
//     password : {
//         type : String,
//         required : true,
//         minlength : 7,
//         trim : true,
//         validate(value){
//             if(value.toLowerCase().includes('password')){
//                 throw new Error('Password is not strong!')
//             }
//         }
//     },
//     age :{
//         type : Number,
//         default : 0,
//         validate(value){
//             if(value<0){
//                 throw new Error("Age cannot be negative")
//             }
//         }
//     }
// })

// const abhi = new User({ 
//     name : "Abhishek",
//     email : 'abhishek@live.com',
//     password : '23jkjdaa',
//     // age : 25 
// });

// abhi.save().then((result)=>{
//     console.log(result);
//     console.log('-------------');
//     console.log(abhi)
// }).catch((error)=>{
//     console.log(error);
// })


const tasks = mongoose.model('tasks', {
    desc : {
        type : String,
        required : true, 
        trim : true,
    },
    completed :{
        type : Boolean,
        default : false
    }
})

const t1 = new tasks({
    desc : 'Finishing MongoDB',
    // completed : false
})
t1.save().then(()=>{
    console.log(t1);
}).catch((err)=>{
    console.log(err);
})