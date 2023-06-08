import {BlogType} from '../types';
import {MongoClient} from 'mongodb';
import dotenv from 'dotenv';
dotenv.config()

// Connection URL
const mongoURI = process.env.MONGO_URL || 'mongodb://0.0.0.0:27017'
console.log(process.env.MONGO_URL)

const client = new MongoClient(mongoURI)
const db = client.db('socialNetwork')

export const blogsCollection = db.collection<BlogType>('blogs')

export const runDb = async () => {
    try {
        await client.connect()
        console.log('Connected successfully to mongo server')
    } catch (e) {
        console.log('Can\'t connect successfully to mongo server')
        await client.close()
    }
}