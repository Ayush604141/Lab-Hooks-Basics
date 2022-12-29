import React, { useContext, useState, useEffect} from "react";
import { ToggleTheme } from "../App";

function UseContext() {
  const theme = useContext(ToggleTheme);
  const [count, setcount] = useState(0);
  const [content, setcontent] = useState("")
  const themeStyle = {
    backgroundColor: theme ? "black" : "grey",
    color: theme ? "grey" : "black",
    padding: "2rem",
    margin: "2rem",
  };

  useEffect(()=>{
    alert(`Content Updated`)
  },[content])
  function Content(){
    if(content === ""){
      setcontent(content + "Hello! This is Ayush.")
    }
  }
  function Increase(){
    setcount(count + 1)
  }
  return (
  <div style={themeStyle}>
    This is made by Kalvium
    <p>{content}</p>
    <button onClick={Content}>Content</button>
    <h3>count: {count}</h3>
    <button onClick={Increase}>Increment</button>
  </div>
  );
}

export default UseContext;
