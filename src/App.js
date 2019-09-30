import React, { Component } from 'react';
import HeaderNav from "./containers/HeaderNav/HeaderNav";
import {SideBar} from "./containers/SideBar/SideBar";

class App extends Component {
  state = {
    count: 0
  }


  //Tykkää-napin lähde: https://medium.com/@elle.westervelt/create-a-basic-like-button-in-react-5274a6991385
  incrementMe = () => {
    let newCount = this.state.count +1
    this.setState({
      count: newCount
    })
  }

  render() {
    return (
        <React.Fragment>
          <HeaderNav />
          {/*<button onClick={this.incrementMe}>❤ Likes: {this.state.count} </button>*/}
          <SideBar />
        </React.Fragment>
    );
  }
}

export default App;
