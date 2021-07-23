import './App.css';
import './components/component.css';
import './assemblers/assesmblers.css';
import Nav from './components/widgets/navigation';
import Auth from './controllers/views';
import Social from './components/interfaces/clickable/social';


function App() {
  return (
    <div className="App">
      <Nav />
      <Auth />
      <Social />
    </div>
  );
}

export default App;