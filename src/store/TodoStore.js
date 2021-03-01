
import React from "react"
import ReactDOM from "react-dom"
import { makeAutoObservable, observable } from "mobx"
import { observer } from "mobx-react"


class TodoStore {
    arrNewTask = [];
    arrDoingTask = [];
    arrDoneTask = [];
    taskList = [
        {
            id: "1",
            title: "FrameWork1",
            content: "ReactJs",
            status: "done"
        },
        {
            id: "2",
            title: "FrameWork2",
            content: "Angular",
            status: "cancel"
        },
        {
            id: "3",
            title: "FrameWork3",
            content: "VueJs",
            status: "pending"
        }
    ];


    constructor() {
        makeAutoObservable(this);
    }

    getTodo(id) {
       return (this.taskList.find((todo) => todo.id === id))
    }
    addTask(task) {
        this.taskList = [...this.taskList, task]
    }
    deleteTask(index) {
        const newList = [...this.taskList]
        const listUpdate = newList.filter((item) => item.id !== index)

        this.taskList = [...listUpdate]
    }
    editTask(value, index) {
        let newTask = [...this.taskList]
        newTask[index].content = value
    }
    setChangeStatus(value, id) {
        
        this.taskList = this.taskList.map((item) => {
            if (item.id === id) return { ...item, status: value }
            return item;
        })

        this.arrDoneTask = ([...this.taskList.map(x => ({ ...x}))].filter((e) => e.status === "done"));
        this.arrDoingTask = ([...this.taskList.map(x => ({ ...x}))].filter((e) => e.status === "cancel"));
        this.arrNewTask = ([...this.taskList.map(x => ({ ...x}))].filter((e) => e.status === "pending"));
        console.log('done',this.arrDoneTask.map(x => ({ ...x})))
        console.log('cancel',this.arrDoingTask.map(x => ({ ...x})))
        console.log('pending',this.arrNewTask.map(x => ({ ...x})))
    }
}
const todoStore = new TodoStore();

export default todoStore