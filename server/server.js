import express from "express";
import "./config/dotenv.js";
import giftsRouter from "./routes/gifts.js";
const app = express();

const PORT = process.env.port || 3001; //read port fron env file else 3001 by default
app.use("/public", express.static("./public")); //serve frontand files from /public
app.use("/public", express.static("./public/scripts")); //serve script files from /public/scripts
app.use("/gifts", giftsRouter);

app.get("/", (req, res) => {
  //route when we type / at browser
  res
    .status(200)
    .send(
      '<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>'
    );
});

app.listen(PORT, () => {
  //Make app to listen to the PORT constant
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});
