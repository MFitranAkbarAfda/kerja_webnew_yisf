
import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function NewsLayouts() {
    const [number, setNumber] = useState("");
    return (
        <>
            <Link to="/newslist/1">News 1</Link>   
            <br /> 
            <Link to="/newslist/2">News 2</Link>
            <br />
            
            <Outlet context={{ hello : "World"}}/>
            {/* <input 
                type="number" 
                value={number} 
                onChange={e => setNumber(e.target, value)} 
            /> */}
        </>
    )
}