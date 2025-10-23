import {createContext, useState } from "react";

export const ThemeContext=createContext();
export const ThemeProvider=({children})=>{
    const[ison,setIson]=useState(true);
    const change=()=>setIson((prev)=>!prev);
    return(
        <>
            <ThemeContext.Provider value={{ison,change}}>
                {children}
            </ThemeContext.Provider>
        </>
    );
}