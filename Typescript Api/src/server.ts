import express from 'express'
import { categoriesRoutes } from './routes/categories.routes'
import { specificationRoutes } from './routes/specifications.routes'

const app = express()

app.use(express.json())

app.get('/', (request, response) => {
    return response.send({message:"OI"})
})

app.post('/courses', (request, response) => {
    const { name } = request.body
    return response.json({ name })
})

app.use('/categories', categoriesRoutes)
app.use('/specifications', specificationRoutes)

app.listen(8000, () => console.log("Server running"))