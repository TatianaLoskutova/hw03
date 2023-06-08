import {blogsDataBase, BlogType} from '../types';
import {blogsCollection} from './db';

export const blogsRepository = {
    async findAllBlogs(): Promise<BlogType[]> {
        return blogsCollection.find({}).toArray()
    }

}