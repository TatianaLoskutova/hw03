import express from 'express'
import bodyParser from 'body-parser';

import {blogRouters} from './routers/blog_routers';
import {postRouters} from './routers/post_routers';
import {testingRouter} from './routers/testing_routers';

const app = express()
const port = process.env.PORT || 3000

const parserMiddleware = bodyParser({})
app.use(parserMiddleware)

app.use('/blogs', blogRouters)
app.use('/posts', postRouters)
app.use('/testing', testingRouter)


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})