import React, { useState } from 'react';
import Text from './Text'
import Status from './Status'
import InputText from "./InputText";
import PropTypes from 'props-type';
import todoStore from '../store/TodoStore';

const propTypes  = {
  content: PropTypes.string,
  title: PropTypes.string,
  status:  PropTypes.string,
  updateData: PropTypes.func,
  index: PropTypes.number
}

const defaultProps = {
  content: 'default',
  title: 'default',
  status:  false,
  updateData: () => console.log("default"),
  index: 0
}

function Task(props) {
  const chooseStyle = () => {
    if (status === "done") return { backgroundColor: 'green' }
    if (status === "cancel") return { backgroundColor: 'red' }
    if (status === "pending") return { backgroundColor: 'yellow' }
    if (props)
      return;
  }
  const {  content, title, status,index , id } = props;

  const [isEditing, setIsEditing] = React.useState(false);
  const [inputValue, setInputValue] = React.useState({value : '' , index : 0});

  const getValue = (value, index) => {
    setInputValue({value: value, index: index});
  }

  const saveData = () => {
    setIsEditing(false)
    if(inputValue.value) {todoStore.editTask(inputValue.value,inputValue.index)}
  }


  const showInputText = () => {
    
    if (isEditing) {

      return (
        <div>
          <p></p>
          <InputText getValue={getValue} content={content} index={index} id={id} />
          <p onClick={() => {
            saveData()
          }}>Save</p>
        </div>
      )
    }
    else {
      return (
        <div>
        {/* <button  onClick={() => {
          setIsEditing(true)
        }}>Edit Title </button> */}
        <button onClick={() => setIsEditing(true)}>Edit</button>
          <Text index={index} id={id}  isTitle content={title} />
          <Text content={content} />
        </div>
      )
    }
  }
  return (
    <>
      <li style={chooseStyle()}>
        {showInputText()}
       <Status index={index} id={id}  status={status} />
      </li>

    </>
  )
}

Task.propTypes = propTypes;
Task.defaultProps = defaultProps;

export default Task;