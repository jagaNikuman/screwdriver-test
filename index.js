const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const server = app.listen(3000, function() {
    console.log("opened");
});

function tasks(date, title) {
    this.date = date;
    this.title = title;
}

let taskArray = new Array();

app.post("/register", function(request, response, next) {
    request.body.tasks.forEach(function(postedTask, index, array) {
        // avoid registering duplicate task
        let existFlag = false;
        taskArray.forEach(function(storedTask, index){
            if(storedTask.title === postedTask.title) {
                if(storedTask.date === postedTask.date) {
                    existFlag = true;
                    return;
                }
            }
        });
        if(existFlag) return;

        taskArray.push(new tasks(postedTask.date, postedTask.title));
        console.log(`Registered Task: ${postedTask.date}, ${postedTask.title}`);
    });
    response.json(taskArray);
});
