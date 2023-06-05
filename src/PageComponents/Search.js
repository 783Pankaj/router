import React, { useState } from "react";
import SearchResult from "./SearchResult";
import HeaderNav from "../HeaderComponent/HeaderNav";
const Search = () => {
    const [img, setImg] = useState("");
    const changeValue=(e)=>{
       const store= e.target.value;
       console.log(store);
       setImg(store);
    }
    return (
        <> 
           <HeaderNav />
            <div className="search">
            <h3>You Can Search anything</h3>
                <input type="text"
                    placeholder="Search anything"
                    value={img}
                    onChange={changeValue}  
                />
            
            {img ==="" ? null : <SearchResult serchImg={img}/>} 
            </div>
        </>
    );
}
export default Search;