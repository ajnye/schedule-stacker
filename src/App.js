import logo from './logo.svg';
import './App.css';
import ReactDOM from 'react-dom'

function App() {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  const value = "hi";
  root.render(<h1>Hello {value}, world! {new Date().toLocaleTimeString()}</h1>);
}

setInterval(App, 1000);

export default App;
