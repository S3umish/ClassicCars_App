import React from 'react'

function SearchBar(props){

    return(
        <div id="search-bar">
            Search Car: <input onChange={(e) => props.filterCars(e)}></input>
        </div>
    )
}

export default SearchBar
