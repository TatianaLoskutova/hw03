import {Router, Request, Response} from 'express';
import {blogsRepository} from '../repositories/blog_repository';

export const blogRouters = Router()

blogRouters.get('/', async (req:Request, res: Response) => {
    const allBlogs = await blogsRepository.findAllBlogs()
    res.status(200).send(allBlogs)
})

blogRouters.post('/', async (req:Request, res: Response) => {
    const newBlog = await blogsRepository.createBlog(req.body.name, req.body.description, req.body.websiteUrl)
    if (newBlog) {
        res.status(201).send(newBlog)
    } else {
        res.sendStatus(404)
    }
})