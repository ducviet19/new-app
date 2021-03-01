
import React, { useState } from 'react';
function InputText(props) {

  const [valueChange, setValueChange] = useState(props.content)


  return (
    <>
      <input value={valueChange} type="text" onChange={(e) => {
        setValueChange(e.target.value)
        props.getValue(valueChange, props.index)
      }}></input>
    </>
  )
}

export default InputText;