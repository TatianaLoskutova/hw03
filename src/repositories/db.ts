import {BlogType} from '../types';
import {MongoClient} from 'mongodb';


// Connection URL
const url = 'mongodb+srv://tanisha:Loskutidze1988@cluster0.c1g5djw.mongodb.net/?retryWrites=true&w=majority'
console.log('url :', url)
const client = new MongoClient(url)
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