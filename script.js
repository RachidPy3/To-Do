class Task{
    constructor(id, taskName, doneBool){
        this.id = id
        this.taskName = taskName
        this.doneBool = doneBool
    }
}

const input = document.querySelector("input")
const btn = document.querySelector("button")
const taskList = document.querySelector("ul")

let id = 0

function deleteTask(deleteTarget){
    taskList.removeChild(deleteTarget)
}

function createTask(){
    let task = new Task(id, input.value, false)

    const li = document.createElement("li")
    const deleteBtn = document.createElement("button")

    deleteBtn.addEventListener("click", ()=>{
        const deleteTarget = deleteBtn.parentElement
        deleteTask(deleteTarget)
    })

    li.textContent = task.taskName
    deleteBtn.textContent = "Done"
    li.appendChild(deleteBtn)
    li.dataset.id = task.id

    return li
}

function addTask(){
    if(input.value != ""){
        let task = createTask()
        taskList.appendChild(task)
        id++
    }else{
        console.error("cant add empty task")
    }
}

btn.addEventListener("click", addTask)