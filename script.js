const input = document.querySelector("input")
const btn = document.querySelector("button")
const taskList = document.querySelector("ul")

class Task{
    constructor(id, taskName, doneBool){
        this.id = id
        this.taskName = taskName
        this.doneBool = doneBool
    }
    generateNextId(){
        return this.id++
    }
}

function addTask(){
    if(input.value != ""){
        let task = new Task(0, input.value, false)
        const li = document.createElement("li")
        li.textContent = task.taskName
        li.dataset.id = task.id
        taskList.appendChild(li)
    }else{
        console.error("cant add empty task")
    }
}

btn.addEventListener("click", addTask)