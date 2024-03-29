import "./App.css";
import React, { useState } from "react";
import HeaderDes from "./Discription/HeaderDes";
import Footer from "./Footer/Footer";
import Header1 from "./Header/Header1";
import Product from "./Maincontent/Product";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/sidebar";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Handle sidebar toggle when the user clicks on the product area
  const handleProductAreaClick = () => {
    if (isSidebarOpen) {
      toggleSidebar();
    }
  };
  return (
    <div className="App ">
      <Navbar />
      <HeaderDes />
      <Header1 toggleSidebar={toggleSidebar} />
      <div className="container" >
      <div className="row">
        {isSidebarOpen && (
          <div
            className="col"
            style={{
              width: "20%",
              flexDirection: "column",
              float: "left",
              height: "100%"
            }}
          >
            <Sidebar />
          </div>
        )}
        <div
            className={isSidebarOpen ? "col-10" : "col-12"} // Adjust width based on sidebar state
            style={{ width: isSidebarOpen ? "80%" : "100%", float: "right" }}
          >
          <Product isSidebarOpen={isSidebarOpen} />
        </div>
      </div>
    </div>
    
    

      <Footer/>
    </div>
  );
}

export default App;
