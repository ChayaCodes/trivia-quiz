import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import "./Layout.css";
import Footer from '../Footer/Footer'; 

const Layout=({ children })=>{
    return (
         <>
           {/* I kept the sidebar code so it can be restored if needed. */}
           {/* <div className="container">
           <Sidebar />
           <div className="content">{children}</div>
           </div> */}

           <div className="content">{children}</div>

           <footer className="footer">
           <span>
            פותח באהבה ❤️ על ידי חיה קרמר | צור קשר: chaya41182@gmail.com |
            טלפון: 058-3241182
           </span>
           </footer>
           <div className="layout">
           <div className="container">
           <Sidebar />
           <div className="content">{children}</div>
           </div>
           <Footer /> 
           </div>
        </>
      );
  }
  
  export default Layout;