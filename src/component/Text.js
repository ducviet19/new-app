
import React from 'react';
import { Link } from 'react-router-dom';
import todoStore from '../store/TodoStore';
function Text(props) {


  
  const deleteTask = () => {
  todoStore.deleteTask(props.id)
  }

  const { isTitle, content } = props;
  if (isTitle) {
    return<> <h1  >  <Link to={`/Todo/${props.id}`}>{content}</Link> </h1><button onClick={deleteTask}>Delete</button></>
  } else {
    return <p>{content}</p>
  }

}

export default Text;