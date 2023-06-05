import React from "react";

const SearchResult=(props)=>{
    const img =`https://source.unsplash.com/400x300/?${props.serchImg}`;
    return(
        <div className="search-input">
           <h2>I am SearchResult</h2>
           <img src={img} alt="search" />
        </div>
    );
}
export default SearchResult;