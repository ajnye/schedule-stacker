import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom'
import React from 'react'
import data from './data.json'

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
      <div>
        <h1>hello</h1> 
        <h2>it is {this.state.date.toLocaleTimeString()} {this.state.counter} </h2>
      </div>      
    );
  }
}
function Test(props) {
  return <h1>{props.name}</h1>;
}

function ClassHtml(props) {
  let schoolClass = props.class;

  var startTime = new Date ('January 09, 2023 00:00:00'); 
  startTime.setHours(schoolClass.startHour);
  startTime.setMinutes(schoolClass.startMinute);
  var endTime = new Date(startTime.getTime());
  endTime.setHours(schoolClass.endHour);
  endTime.setMinutes(schoolClass.endMinute);

  var startTimeFormatted = new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit'}).format(startTime);
  var endTimeFormatted = new Intl.DateTimeFormat('en-US', {hour: '2-digit', minute: '2-digit'}).format(endTime);
  return (
    <dl style={{float: 'left', padding: '10px'}}>
    <h2>{schoolClass.name}</h2>
    <h3>{schoolClass.days}, {startTimeFormatted} - {endTimeFormatted}</h3>
    </dl>
  );
}

function ClassList(props) {
  // var date = new Date('January 09, 2023 00:00:00');
  return (
    props.classes.map((schoolClass) => 
      <ClassHtml class={schoolClass}/>
  ));
}

function ScheduleList() {
  return (
    data.schedules.map((schedule) => <li>
      <h1>{schedule.name}</h1>
      <ClassList classes={schedule.classes}/>
    </li>)
  );
}

function App() {
  // const root = ReactDOM.createRoot(document.getElementById('root'));
  // const value = "hi";
  // root.render(<=.Fragment><h1>Hello {value}, world! {new Date().toLocaleTimeString()}</h1></React.Fragment>);
  return (
    <div>
      <Clock />
      <Test name="OK Bud"/>
      <ScheduleList />
    </div>
  );
}

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Clock />);

// setInterval(App, 1000);

export default App;
