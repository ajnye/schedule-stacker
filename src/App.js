import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom'
import React from 'react'

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date : new Date(), counter : ""};
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState((state, props) => ({
      date: new Date(),
      counter : state.counter + "y"
    }));
  }

  render() {
    return (
      <React.Fragment>
      <div>
        <h1>hello</h1>
        <h2>it is {this.state.date.toLocaleTimeString()} {this.state.counter} </h2>
      </div>      
      </React.Fragment>
    );
  }
}
function Test(props) {
  return <h1>{props.name}</h1>;
}

function App() {
  // const root = ReactDOM.createRoot(document.getElementById('root'));
  // const value = "hi";
  // root.render(<React.Fragment><h1>Hello {value}, world! {new Date().toLocaleTimeString()}</h1></React.Fragment>);
  return (
    <React.Fragment>
    <div>
      <Clock />
      <Test name="OK Bud"/>
      <Test name="OK NOTOK"/>
    </div>
    </React.Fragment>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Clock />);

// setInterval(App, 1000);

export default App;
