import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
 
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.get("/work", (req, res) => {
    res.send("Hello, Work!");
});

app.post("/submit", (req, res) => {
    const newTask = req.body["task"];
    console.log(newTask);
    res.render("index.ejs", { task: newTask });
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})

