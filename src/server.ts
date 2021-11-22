import express from 'express';

const app = express();

app.use(express.json());
app.get("/", (request, response) => {
    return response.json({ message: "Seja Bem Vindo Myltiane ao Mundo Node Js"})
});

app.post("/courses", (request, response) => {
    const { name } = request.body;
    return response.json({ name });
});

app.listen(3333, () => console.log("Server is running!")); 