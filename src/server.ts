import express from "express";
import swaggerUi from "swagger-ui-express"
import { router } from "./routes";


import swaggerFile from "./swagger.json"


const app = express();

const port = 1337;




app.use(express.json());
app.use(router);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerFile))

app.listen(port, () =>
    console.log(
        `Servidor rodando, de um ctrl + clique  http://localhost:${port}/`
    )
);
