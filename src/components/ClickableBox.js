import React, { Component } from 'react';

export default class ClickableBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      status: false,
    };
  }
  render() {
    const handleOnClick = () => {
      this.setState((prevState) => ({
        status: !prevState.status,
      }));
    };
    return (
      <div className={this.props.className} onClick={handleOnClick}>
        <div className="WhyChooseMe-content">
          {this.state.status ? (
            this.props.penjelasan
          ) : (
            <div>
              <i class="fas fa-universal-access Pembesar-icon"></i>
              <h3>{this.props.title}</h3>
            </div>
          )}
        </div>
      </div>
    );
  }
}
