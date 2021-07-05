import React from 'react'

function SearchBar(props){

    return(
        <div id="search-bar">
            <span className="text-success"><h3><b>Search Car By Title:</b></h3>
             <input onChange={(e) => props.filterCars(e)}></input></span>
        </div>
    )
}

export default SearchBar
