import express from "express";
import { categoriesRoutes } from "./routes/categories.routes";

const app = express();

const port = 1337;

app.use(express.json());

app.use("/categories", categoriesRoutes);

app.listen(port, () =>
    console.log(
        `Servidor rodando, de um ctrl + clique  http://localhost:${port}/`
    )
);
