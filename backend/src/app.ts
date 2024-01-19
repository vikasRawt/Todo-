import express from "express"
import config from "config";
import DbConnect from "./utils/dbConnect";
import routes from "./routes";

const PORT = config.get<number>('port')
const app = express(); 


app.listen(PORT,async ()=>{
console.log("port is listening now");
await DbConnect();

routes(app);
})