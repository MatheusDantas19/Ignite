import express, { response } from 'express'
import { createCourse } from './routes'

const app = express()

app.get('/', createCourse)

app.listen(8000)