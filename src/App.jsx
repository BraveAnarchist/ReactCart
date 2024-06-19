import { createContext, useState } from "react";
import Left from "./components/Left";
import Right from "./components/Right";

export const cont=createContext();
export default function App(){
  const [product,setProduct]=useState([{id: 1, name: 'Product-1', price:100,number:0},
    {id: 2, name: 'Product-2', price:200,number:0},
    {id: 3, name: 'Product-3', price:300,number:0},])

  return(<div style={{display:"flex",height:"100vh",justifyContent:"center",alignItems:"center",gap:"2vw"}}>
    <cont.Provider value={{product,setProduct}}>
    <Left></Left>
    <Right></Right>
    </cont.Provider>
  </div>)
}