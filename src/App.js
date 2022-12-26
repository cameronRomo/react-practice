import './App.css';
import _ from "lodash"

const Welcome = ((props) => (
  <h4>Welcome to my site, {props.firstName}</h4>
))

function App() {
  const nameArray = ["Chris", "Jane", "BillyBob", "JoeyJoeJoe", "Marry"];

  return (
    <div className="App">
      <header className="App-header">
        <Welcome firstName="Cameron" />
        <ul>
          {_.map(nameArray, (name, i) => (
            <li key={i}>{i}: { name }</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
