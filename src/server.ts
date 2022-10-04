import express from 'express'

const app = express()


app.get("/", (request, response) => {
    return response.json({ message: "Hello world" })
})

app.listen(1337, () => console.log("Servidor rodando"))