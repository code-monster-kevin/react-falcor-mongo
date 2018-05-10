import mongoose from 'mongoose'; 

const conf = { 
    hostname: process.env.MONGO_HOSTNAME || 'localhost', 
    port: process.env.MONGO_PORT || 27017, 
    env: process.env.MONGO_ENV || 'local', 
}; 

mongoose.connect(`mongodb://${conf.hostname}:${conf.port}/${conf.env}`,
{
    useMongoClient: true
}); 

const userSchema = { 
    'username' : String, 
    'password' : String, 
    'firstName' : String, 
    'lastName' : String, 
    'email' : String, 
    'role' : String, 
    'verified' : Boolean, 
    'imageUrl' : String 
};

const articleSchema = { 
    'articleTitle' : String, 
    'articleContent' : String 
};

const User = mongoose.model('User', userSchema, 'pubUsers');
const Article = mongoose.model('Article', articleSchema, 'articles'); 

export default { 
    User,
    Article 
};