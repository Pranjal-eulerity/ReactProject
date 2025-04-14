
import React, { Component } from 'react';
import { Button } from './ButtonComponent';

class MyClass extends Component {
  componentDidMount() {
    console.log('Component mounted!');
  }
  componentWillUnmount() {
    console.log('Component will unmount!');
  }

  render() {
    return <div>Hello, this is a React class!
        Wait a min , lets see <Button label={123} />
    </div>;
  }
}

export default MyClass;
