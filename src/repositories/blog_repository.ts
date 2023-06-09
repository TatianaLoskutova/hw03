import {BlogType} from '../types';
import {blogsCollection} from './db';
import {BlogInputModel} from '../models/blog/Post_blog_model';
import {UpdateBlogModel} from '../models/blog/Put_blog_model';

export const blogsRepository = {
    async findAllBlogs(): Promise<BlogType[]> {
        return await blogsCollection.find({}).toArray()
    },
    async findBlogById(id: string): Promise<BlogType | null> {
        const foundedBlog: BlogType | null = await blogsCollection.findOne({id: id})
        if (foundedBlog) {
            return foundedBlog;
        } else {
            return null
        }
    },
    async createBlog(data: BlogInputModel): Promise<BlogType> {
        const newBlog = {
            id: Math.random().toString(36),
            name: data.name,
            description: data.description,
            websiteUrl: data.websiteUrl,
            createdAt: new Date().toISOString(),
            isMembership: true
        }
        const result = await blogsCollection.insertOne(newBlog)
        return newBlog
    },
    async updateBlog(data: UpdateBlogModel): Promise<boolean> {
        const result = await blogsCollection.updateOne({id: data.id}, {$set: {name: data.name
            ,description: data.description, websiteUrl: data.websiteUrl}})
        return result.matchedCount === 1
    },
    async deleteBlog(id: string): Promise<boolean> {
        const result = await blogsCollection.deleteOne({id: id})
        return result.deletedCount === 1
    }


}