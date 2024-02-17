import Header from "./Header"
import Sidebar from "./Sidebar"
import Order from "./Order";
import Orderinfo from "./Orderinfo"
import Orderpopup from "./Orderpopup"
import { useState } from "react";

const Body = ()=>{

  const [selectedContent, setselectedContent]= useState([])
  const onItemClick = (item) => {
    setselectedContent(item);
  };
  return(
    <div className=" h-auto bg-zinc-100">
    
        <Header/>
        <Orderpopup selectedContent = {selectedContent}/>
        <Orderinfo selectedContent = {selectedContent}/>
        <Sidebar onItemClick = {onItemClick}/>
        <Order selectedContent = {selectedContent}/>
        </div>
  )
};
export default Body;