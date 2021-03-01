import { useEffect, useState } from "react";
import React from 'react';

function SearchItem(props) {




    return (
        <>
            <input onChange={(e) => {
                props.handleSearch(e.target.value)
            }}
                type="text" className="form-control" placeholder="Search item"
                value={props.searchItem}
            />
        </>
    )

}

export default SearchItem;