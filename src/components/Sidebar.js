


const Sidebar =({onItemClick})=>{

    

 

  return (
    <>
    <aside className=" bg-white h-screen w-32 flex flex-col">
      <ul>
        <li className="px-6  py-1 hover:bg-sky-200 hover:border-blue-500 hover:border-r-4  flex items-center " onClick={()=>onItemClick("Dashboard")}>
          <h1 className="text-gray-800 hover:text-sky-500 text-sm">Dashboard</h1>
          
        </li>
        <li className="px-6  py-1 hover:bg-sky-200 hover:border-blue-500 hover:border-r-4 " onClick={()=>onItemClick("Inventory")}> 
        <h1 className="text-gray-800 hover:text-sky-500 text-sm">Inventory</h1>
         
        </li>
        <li className="px-6  py-1 hover:bg-sky-200 hover:border-blue-500 hover:border-r-4 "onClick={()=>onItemClick("Orders")}>
        <h1 className="text-gray-800 hover:text-sky-500 text-sm">Orders</h1>
          
        </li>
        <li className="px-6  py-1 hover:bg-sky-200 hover:border-blue-500 hover:border-r-4"onClick={()=>onItemClick("Shipping")}>
        <h1 className="text-gray-800 hover:text-sky-500 text-sm">Shipping</h1>
          
        </li>
        <li className="px-6 py-1 hover:bg-sky-200 hover:border-blue-500 hover:border-r-4 "onClick={()=>onItemClick("Channel")}> 
        <h1 className="text-gray-800 hover:text-sky-500 text-sm">Channel</h1>
          
        </li>
      </ul>

      
      
    </aside>
    
    </>
  );
}

export default Sidebar;
