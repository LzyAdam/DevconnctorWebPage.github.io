


const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = async ()=>{
    try{
        // await mongoose.connect(db,{
        //     useNewUrlParser: true,
        //     useCreateIndex: true
        // });
        await mongoose.connect(db,{
            useNewUrlParser:true,
            //useCreateIndex:true,
            //useFindAndModify: false
            //useCreateIndex
        });
        console.log('Mongo DB Connected..111.');
    }catch(err){
        console.error(err.message);
        //exit process with failure
         process.exit(1);
    }
}


module.exports = connectDB;