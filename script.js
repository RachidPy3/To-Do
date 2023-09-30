const input = document.querySelector("input")
const btn = document.querySelector("button")
const taskList = document.querySelector("ul")

class Task{
    constructor(id, taskName, doneBool){
        this.id = id
        this.taskName = taskName
        this.doneBool = doneBool
    }
}