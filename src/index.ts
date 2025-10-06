import express from "express";
import 'dotenv/config';
import routes from "./http/routes/index.routes";

const app = express();

app.use(express.json());
app.use(routes);
app.get("/", (req: any, res: any) => {
  res.send({message: "You're not suposed to be here"});
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});