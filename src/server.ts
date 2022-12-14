import express, { Request, Response } from "express";
import cors from "cors";
import messageRouter from './route/message.route';

// const messages: Array<string> = ["apples", "grapes", "oranges"];
const app = express();
app.use(cors());
app.use(express.json());
//METODO DE LA PETICION GET/POST/PUT...
//RUTA DE LA PETICION
app.use(messageRouter);

// app.get("/", (req: Request, res: Response) => {
//     res.json({ message: messages })
// });
// app.post("/", (req: Request, res: Response) => {
//     const message = req.body.message
//     console.log(message)
//     messages.push(message)
// });
// app.get("/message/:id", (req: Request, res: Response) => {
//     const id = parseInt(req.params.id);
//     res.json({ message: messages[id] });
// });
// app.get("/message", (req: Request, res: Response) => {
//     const quantity = req.query.quantity;
//     const message = req.query.message;
//     res.json({ message: `We have to buy ${quantity} ${message}` });
// });
// app.put("/message/:id", (req: Request, res: Response) => {
//     const message = req.body.message;
//     const id = parseInt(req.params.id);
//     messages[id] = message;
//     res.json({ message: messages[id] });
// })
// app.delete("/message/:id", (req: Request, res: Response) => {
//     const id = parseInt(req.params.id);
//     messages.splice(id, 1);
//     res.json({ message: `delete ${id}` });
// })
app.listen(3001, () => console.log("listening on port 3001"));