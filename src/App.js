import React, { Component } from "react";
import Transition from 'react-transition-group/Transition';

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {

  state = {
    isModalOpen : false,
    showBlock: false
  }

  openModalHandler = () => {
    this.setState({isModalOpen : true});
  };

  closeModalHandler = () => {
    this.setState({isModalOpen : false});
  };

  toggleHandler = () => {
    this.setState({showBlock : !this.state.showBlock});
  }

  render() {
    return (
      <div className="App">

        <h1>React Animations</h1>
        <button className="Button" onClick={this.toggleHandler}>Toggle</button>
        <br/>
        <Transition in={this.state.showBlock} mountOnEnter unmountOnExit timeout={300}>
          {state =>  (<div 
                        style = {{ backgroundColor: "red",
                                   width: 100,
                                   height: 100,
                                   margin: 'auto',
                                   transition: 'opacity 1s ease-out',
                                   opacity: state === 'exited'? 0 : 1 
                                }}/>
                      ) 
            }
        </Transition>
        
        {/* <Transition in={this.state.isModalOpen} mountOnEnter unmountOnExit timeout={300}
          onEnter={() => console.log('onEnter')}
          onEntering={() => console.log('onEntering')}
          onEntered={() => console.log('onEntered')}
          onExit={() => console.log('onExit')}
          onExiting={() => console.log('onExiting')}
          onExited={() => console.log('onExited')}
        >
          {
            state =>  <Modal show={state} closed={this.closeModalHandler}/>          
          }
        </Transition> */}

        <button className="Button" onClick={this.openModalHandler}>Open Modal</button>
        {this.state.isModalOpen ? <Modal show={this.state.isModalOpen} closed={this.closeModalHandler}/> : null}
        {this.state.isModalOpen ? <Backdrop show={this.state.isModalOpen} /> : null}
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
