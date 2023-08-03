import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
var homeTaskList = [];
var workTaskList = [];
 
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.render("index.ejs", { task: homeTaskList });
});

app.get("/work", (req, res) => {
    res.render("work.ejs", { task: workTaskList });
});

app.post("/submit", (req, res) => {
    homeTaskList.push(req.body["task"]);
    res.redirect("/");
})

app.post("/work", (req, res) => {
    workTaskList.push(req.body["task"]);
    res.redirect("/work");
})

app.post("/delete", (req, res) => {
    var index = Number(req.body.index);
    homeTaskList.splice(index, 1);
    res.json({deleted: true});
});

app.post("/work/delete", (req, res) => {
    var index = Number(req.body.index);
    workTaskList.splice(index, 1);
    res.json({deleted: true});
});

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
})
