import express from "express.js";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Hello, World!");
});

app.get("/work", (req, res) => {
    res.send("Hello, About!");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})