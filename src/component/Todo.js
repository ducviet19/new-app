import { useEffect, useState } from "react";
import React from 'react';
import todoStore from '../store/TodoStore';
import { Link } from "react-router-dom";
function Todo(props) {

    let n = todoStore.getTodo(props.match.params.id)
    let arb = {...n};

    return(
        <>
            <div>
                <h2>ID : {arb.id}</h2>
                <h2>Title {arb.title}</h2>
                <h2>Content {arb.content}</h2>
                <h2>Status:  {arb.status}</h2>

                <Link to="/all">Back</Link>
            </div>
        </>
    )

}

export default Todo;