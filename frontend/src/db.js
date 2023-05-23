// db.js

const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb+srv://zerowaste:zerowaste0@cluster0.jjlu2o0.mongodb.net/test';
const client = new MongoClient(url, { useUnifiedTopology: true });

const connectDB = async () => {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB', error);
  }
};

const getDB = () => client.db('foodies');

module.exports = { connectDB, getDB };