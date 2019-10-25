import React from 'react';

class Pure extends React.PureComponent {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     update: props.toggle,
  //   };
  // }

  render() {
    console.log("!!! Pure Component !!! Render called");
    return (
      <strong>
        <span style={{ color: 'mediumseagreen' }}>Pure: </span>
        {new Date().getSeconds().toString()}
      </strong>
    );
  }
}

const Stateless = props => {
  console.log("!!! Stateless functional Component !!! Render called");
  return (
    <strong>
    <span style={{ color: 'orange' }}>Stateless: </span>
    {new Date().getSeconds().toString()}
    </strong>
);
}
  
 

class Normal1 extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     update: props.toggle,
  //   };
  // }

  render() {
    
    console.log("!!! Normal1 Component !!! Render called. This has constructor function");

    return (
      <strong>
        <span style={{ color: 'dodgerblue' }}>Normal1: </span>
        {new Date().getSeconds().toString()}
      </strong>
    );
  }
}

class Normal2 extends React.Component {
  // state = {
  //   update: this.props.toggle,
  // };

  render() {
    console.log("!!! Normal2 Component !!! Render called. No constructor function");
    return (
      <strong>
        <span style={{ color: 'green' }}>Normal2: </span>
        {new Date().getSeconds().toString()}
      </strong>
    );
  }
}

class Normal3 extends React.PureComponent {
  render() {
    console.log("!!! Normal3 Component !!! Render called. No state present in this component.");    
    return (
      <strong>
        <span style={{ color: 'red' }}>Normal3: </span>
        {new Date().getSeconds().toString()}
      </strong>
    );
  }
}

class App extends React.Component {
  state = { toggle: true };

  componentDidMount() {
    setInterval(() => {
      this.setState({ toggle: true });
      // this.setState({ toggle: !this.state.toggle })
    }, 1000);
  }

  render() {
    const { toggle } = this.state;
    return (
      <div>
        <Pure toggle={toggle} />
        <br />
        <Stateless toggle={toggle} />
        <br />
        <Normal1 toggle={toggle} />
        <br />
        <Normal2 toggle={toggle} />
        <br />
        <Normal3 />
        <br />
      </div>
    );
  }
}

export default App;
