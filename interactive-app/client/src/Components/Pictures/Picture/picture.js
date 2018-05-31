import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Row, Col, Container} from 'reactstrap';




const Picture = (props) => {
	console.log("person running")

	return (
		<div> 
	    <p >  I am {props.name} and my profession is  {props.profession} </p> 
	    <p >{props.children } </p>
	    
	    <input type = "text" onChange={props.inputEvent} value={props.name} /> 
	    
	    <div onClick = {props.click}> click here to deleteme </div>
	    <div onClick = {props.dataClick}> click here to see the data </div>

	  </div>
	)	
}





export default Picture