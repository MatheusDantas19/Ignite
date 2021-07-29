import express from 'express'
import { router } from './routes'
const app = express()

app.use(express.json())
app.use(router)

// app.get('/', (request, response) => {
//     return response.send({message:"OI"})
// })

// app.post('/courses', (request, response) => {
//     const { name } = request.body
//     return response.json({ name })
// })


app.listen(8000, () => console.log("Server running"))