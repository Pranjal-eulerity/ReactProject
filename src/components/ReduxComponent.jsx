import React from 'react';
import { connect } from 'react-redux';
import './ReduxComponent.css';

class ReduxComponent extends React.Component {
  render() {
    return (
      <div id="wrapper">
        <div className="marqueeBox">
          <marquee>Welcome to the Redux Zone 🔥</marquee>
        </div>
        <div id="content" className="float-box">
          <h1 className="titleText">{this.props.value}</h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  value: state.some.value,
});

export default connect(mapStateToProps)(ReduxComponent);
