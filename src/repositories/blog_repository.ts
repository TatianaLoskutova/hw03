import {blogsDataBase, BlogType} from '../types';
import {blogsCollection} from './db';

export const blogsRepository = {
    async findAllBlogs(): Promise<BlogType[]> {
        return blogsCollection.find({}).toArray()
    },
    async createBlog(name: string, description: string, websiteUrl: string): Promise<BlogType> {
        const newBlog = {
            id: Math.random().toString(36),
            name: name,
            description: description,
            websiteUrl: websiteUrl,
            createdAt: new Date().toISOString(),
            isMembership: true
        }
        const result = await blogsCollection.insertOne(newBlog)
        return newBlog

    }

}