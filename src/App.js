import './App.css';
import names from './mock-data';

import Layout from './components/Layout'

function App() {
  return (
    <div className="App">
      <Layout names={names} />
    </div>
  );
}

export default App;
