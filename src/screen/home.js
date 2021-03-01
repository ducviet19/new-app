import '../styles/home.css'
import Task from "../component/Task";
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
    BrowserRouter,
    Switch,
    Route,
    Link
} from "react-router-dom";


import todoStore from '../store/TodoStore'

import { observer } from 'mobx-react'
import Todo from '../component/Todo';
import SearchItem from '../component/SearchItem';
function Home() {

    const [newTask, setNewTask] = useState("")
    const [newContent, setNewContent] = useState("")

    const [searchItem, SetSearchItem] = useState("")


    let todoTask = []
    todoStore.taskList.map((item) => {
        todoTask.push({...item})
     })


    const renderTask = () => {
        return todoStore.taskList.map((item, index) => {
            return <Task
                index={index}
                key={index}
                id={item.id}
                {...item}
                isLastItem={index === todoStore.taskList.length - 1}
                isFistItem={index === 0}
            />
        })
    }

    const valueChangeTitle = (e) => {
        setNewTask(e.target.value)
    }

    const valueChangeContent = (e) => {
        setNewContent(e.target.value)
    }



    const addTask = (e) => {
        e.preventDefault();
        todoStore.addTask({ id: uuidv4(), title: newTask, content: newContent, status: "pending" });
        setNewTask("")
        setNewContent("")
    }


    const handleSearch = (search) => {
      console.log(search)
    // let currentList  = [];

    // let newList = [];

    // if(search !== ""){
    //     currentList = todoTask;

    //     newList = currentList.filter(item =>  {
    //         const lc = item;
    //         // const filter = search.toLowerCase();
    //         return lc.includes(search);
    //     }
           
    //         )
    // }
    // else {
    //     newList = todoTask;
    //     SetSearchItem(newList)
    // }
  
    }
    return (
        <BrowserRouter>
            <h2>TodoList</h2>
            <ul>
                <li>
                    <Link to="/all">All List</Link>
                </li>
                <li>
                    <Link to="/new">Pending</Link>
                </li>
                <li>
                    <Link to="/doing">Cancel</Link>
                </li>
                <li>
                    <Link to="/done">Done</Link>
                </li>
            </ul>

            <Switch>
                <Route path="/all">
                    <h2>SearCh Item</h2>
                    <SearchItem
                        handleSearch={handleSearch}
                        searchItem={searchItem}
                    />
                    <form onSubmit={addTask}>
                        <h2>Add New Todo</h2>
                        <label>title</label>
                        <input value={newTask} onChange={valueChangeTitle} ></input>

                        <label>Content</label>
                        <input value={newContent} onChange={valueChangeContent} ></input>

                        <button>Add</button>
                    </form>

                    {<ul className="list-inline border-top-0" >
                        {renderTask()}
                    </ul>}
                </Route>
                <Route path="/new">
                    {todoStore.arrNewTask.map((item, index) => <Task {...item} key={index} id={item.id} index={index} />)}
                </Route>
                <Route path="/doing">
                    {todoStore.arrDoingTask.map((item, index) => <Task {...item} key={index} id={item.id} index={index} />)}
                </Route>
                <Route path="/done">
                    {todoStore.arrDoneTask.map((item, index) => <Task {...item} key={index} id={item.id} index={index} />)}
                </Route>

                <Route path="/todo/:id" component={Todo} />
            </Switch>
        </BrowserRouter>
    )

}

export default observer(Home)