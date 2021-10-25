import mongoose from 'mongoose';

const Connection = async (username, password) => {
    const URL =`mongodb+srv://user-123:${password}@cluster0.2d3aj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false } );
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;