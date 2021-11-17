import express from 'express';

const app = express();

app.get("/", (request, response) => {
    return response.json({ message: "Seja Bem Vindo Myltiane ao Mundo Node Js"})
});

app.listen(3333);