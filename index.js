import express from 'express'
import route from './routes.js'

const app = express()

app.use(express.json())

app.use(route)
//global error handler
app.use((err, req, res, next)=>{
    res.json({
        status: 'error',
        statusCode: 400,
        message: err.message,
        data: null
    })
})


app.listen(8080, 'localhost', () => {
  console.log('Server running on port http://localhost:8080')
})




