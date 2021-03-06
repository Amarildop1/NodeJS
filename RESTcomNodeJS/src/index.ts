import express, { Request, Response, NextFunction } from "express";
import usersRoute from "./routes/users.route";

const app = express();
/* app.get('/status', (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send("<h1> Hello World! </h1> <h3> com NodeJS, JavaScript, TypeScript e Express </h3>");
}); */


//Configurações da Aplicação
app.use(express.json());


//Configurações de Rotas
app.use(usersRoute);


//Inicialização do servidor
app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000");
});
