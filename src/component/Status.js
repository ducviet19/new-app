import { useState } from "react";
import todoStore from "../store/TodoStore";
import { observer } from 'mobx-react';

function Status(props) {
  const [taskStatus, setTaskStatus] = useState(false);
  // const [changeStatus,setChangeStatus] = useState(todoStore.taskList[props.index].status)
  const changeStatus = todoStore.taskList[props.index].status;
  console.log('changeStatus',changeStatus)
  const handleStatus = (e) => {
    todoStore.setChangeStatus(e.target.value, props.id);
 
    
  }

  const handleSubmit = () => {

    setTaskStatus(false)
  }


  const showStatus = () => {
    if (taskStatus) {
      return (
        <div>
        <label>
          Pick your Status:
          <select value={props.status} onChange={handleStatus} >
            <option value="done">Done</option>
            <option value="cancel">Cancel</option>
            <option value="pending">Pending</option>
          </select>
        </label>
       <button onClick={handleSubmit}>Edit</button>
     
          <p >Save</p>
        </div>
      )
    }
    else {
      return (
        <div >
          <button onClick={() => {
          setTaskStatus(true)
        }}>Edit Status</button>
        <p onClick={() => {console.log("status")}} style={props.status === "done" ? {fontWeight: 'bold'} : props.status === "cancel" ? {textDecoration: "line-through"} : { fontWeight: "bold", textDecoration: "underline"} }>{props.status}</p>
        </div>
      )
    }
  }

    return ( <>{showStatus()}</> )


}

export default observer(Status);