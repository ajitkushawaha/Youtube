import React from "react";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Routers from "./Components/Routers";


const App = () => {
  return (
      
      <div className="app bg-black">
        <Header />
        <div className=" flex w-full items-start">
            <Sidebar/>
            <Routers>
            
            </Routers>
        </div>
      </div>
    
  );
};

export default App;
