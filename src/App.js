import Profile from './components/profile';
import Interest from './components/interest';
import Learn from './components/learn';
import Expectations from './components/expectations';
import './App.css';


function App() {
  return (
    <div className="container">
      <Profile/>
      <Interest/>
      <Learn/>
      <Expectations/>
    </div>
  );
}

export default App;
