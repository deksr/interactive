import React, { Component } from 'react';

import Radium from 'radium';
import axios from 'axios';
import Unsplash, { toJson } from 'unsplash-js';
import Modal from 'react-responsive-modal';



import './App.css';


import SiteNavbar from '../Dumbbells/Navbar'
import SiteFooter from '../Dumbbells/Footer'

import Pictures from '../Components/Pictures/Pictures';
import Recommendations from '../Components/Recommendations/Recommendations';





class App extends Component {

  constructor() {
    super();
    this.state = {
      allsearchImages: [],
      open: false
    }
  }





  componentDidMount() {
    // use express proxy
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
    //////////////////////////



     // use unsplashjs
    const unsplash = new Unsplash({
      applicationId: "",
      secret: "",
      callbackUrl: "http://localhost:3000/"
    });


    unsplash.search.collections("flowers", 1, 60)
    .then(toJson)
    .then(json => {
      console.log(json.results);
      this.setState({ allsearchImages:json.results });
    });
    //////////////////////////
  }; 

     


  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };



  // eventHandlers for
  onOpenModal = () => {
    this.setState({ open: true });
  };
 


  onCloseModal = () => {
    this.setState({ open: false });
  };
  //////////////////////////





  render() {
    const { open } = this.state;

    return (
      <div className="App">
      <SiteNavbar/>
          <button onClick={this.onOpenModal}>Open modal</button>
          <Modal open={open} onClose={this.onCloseModal} center>
            <h2>Simple centered modal</h2>
          </Modal>
          <Pictures dummyPictureData = {this.state.allsearchImages}/>
          {/*<Recommendations dummyRecommendationData = {this.state.recomendationDummys} />*/}

          <SiteFooter />
      </div>
    );
  }
}



export default Radium(App);