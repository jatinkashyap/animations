import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {

  state = {
    isModalOpen : false
  }

  openModalHandler = () => {
    this.setState({isModalOpen : true});
  };

  closeModalHandler = () => {
    this.setState({isModalOpen : false});
  };

  render() {
    console.log(this.state.isModalOpen);
    return (
      <div className="App">

        <h1>React Animations</h1>
        <button className="Button" onClick={this.openModalHandler}>Open Modal</button>
        <Modal show={this.state.isModalOpen} closed={this.closeModalHandler}/>
        <Backdrop show={this.state.isModalOpen} /> 
        
        <h3>Animating Lists</h3>
        <List />
        
      </div>
    );
  }
}

export default App;
