import React from "react";
import "./style.css";
import logo from "./logo_b.png"; 

// This file exports both the List and ListItem components


 
  
export function FinalList({ children }) {
  return (
	    
    <div className="container-fluid">
	    <div className="list-group2" id="menu-list-group">
		    <img className="logo" src={logo} alt="Logo" /> 
		    
			<ul>{children}</ul>
		</div>
		<div className="btn-container"><button className="bnt btn-lg" id="download_pdf">Download PDF</button></div>
    </div>
  );
}

export function FinalListItem({ children }) {
  return <li className="list-group-item2">{children}</li>;
}


