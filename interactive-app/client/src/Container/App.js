import React, { Component } from 'react';

import Radium from 'radium';

import './App.css';

import SiteNavbar from '../Dumbbells/Navbar'
import SearchBarItems from '../Components/SearchBarItems/SearchBarItems'
import Pictures from '../Components/Pictures/Pictures';
import SiteFooter from '../Dumbbells/Footer'




class App extends Component {

  constructor() {
    super();
    this.state = {
      enteredData: null
    }
  }



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
  }


  enteredDatahandler = (ctp) => {
    console.log(ctp)
    this.setState({enteredData: ctp })
  }



  render() {
    return (
      <div className="App">
        <SiteNavbar/>
          <SearchBarItems ctpEnteredData={this.enteredDatahandler}/>
          <Pictures ptcEnteredData={this.state.enteredData}/>
        <SiteFooter />
      </div>
    );
  }
}



export default Radium(App);