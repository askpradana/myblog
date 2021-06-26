import React, { Component } from 'react';
import Header from '../components/Header';
import Pict from '../images/main-content.png';
import HowToReachme from '../components/HowToReachme';

export default class MainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hilang: false,
    };
  }
  render() {
    const handleOnClick = () => {
      this.setState({
        hilang: !this.state.hilang,
      });
    };
    return (
      <div className="Mainpage">
        <Header />
        <div className="Mainpage-wrapper  flex-sb">
          <div className="Mainpage-left">
            {this.state.hilang ? <h3>Nice!</h3> : <h3>Welcome!</h3>}
            {this.state.hilang ? (
              <h1>You can reach me with these option</h1>
            ) : (
              <h1>Let me help You with your own personal website</h1>
            )}
            <button onClick={handleOnClick}>
              I'm ready to build my website
            </button>
          </div>
          <div className="Mainpage-right">
            {this.state.hilang ? (
              <HowToReachme />
            ) : (
              <img
                src={Pict}
                alt="Image_in_Mainpage_that_I_add_only_for_aesthetic"
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}
