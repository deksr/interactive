import React, { Component } from 'react';
import Radium from 'radium';
import Unsplash from 'unsplash-js';
import axios from 'axios';


import './App.css';

import SiteNavbar from '../Dumbbells/Navbar'
import SiteFooter from '../Dumbbells/Footer'

import Pictures from '../Components/Pictures/Pictures';
import Recommendations from '../Components/Recommendations/Recommendations';






class App extends Component {
  state = {
    response: '',
    pictureDummys:[
      {id:'ayhi', name: 'John', profession:"Web Developer" },
      {id:'ewsm', name: 'Sal', profession:"Front End" },
      {id:'djrf', name: 'Nick', profession:"Back End" },
      {id:'azhi', name: 'Jake', profession:"Web Developer" },
      {id:'ersm', name: 'Robert', profession:"Front End" },
      {id:'darf', name: 'Matt', profession:"Back End" },
      {id:'ahhi', name: 'Max', profession:"Web Developer" },
      {id:'ewtm', name: 'Joe', profession:"Front End" },
      {id:'derf', name: 'Eric', profession:"Back End" }
    ],
    recomendationDummys:[
      {id:'ayri', name: 'George', profession:"Web Developer" },
      {id:'ewsm', name: 'Thomas', profession:"Front End" },
      {id:'drrf', name: 'Jared', profession:"Back End" }
    ]

  };



  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }


  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };


  render() {
    return (
      <div className="App">
      <SiteNavbar/>
          <Pictures dummyPictureData= {this.state.pictureDummys}/>
          <Recommendations dummyRecommendationData = {this.state.recomendationDummys} />
          <SiteFooter />
      </div>
    );
  }
}



export default Radium(App);