import './App.css';
import Hero from './components/Hero/Hero.jsx'
import Reasons from './components/Reasons/Reasons.jsx';
import Plans from './components/Plans/Plans.jsx';
import Programs from './components/Programs/Programs.jsx'
function App() {
  return (
    <div className="App">
      <Hero/>
      <Programs/>
      <Reasons/>
      <Plans/>
    </div>
  );
}

export default App;
