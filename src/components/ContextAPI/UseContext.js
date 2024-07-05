import React, { createContext} from "react"
let created = createContext({
    todos:[],
   
    delete:()=>{},
    update:()=>{},
    toggle:()=>{}
}) 

export {created};

export const UseProvider = created.Provider;