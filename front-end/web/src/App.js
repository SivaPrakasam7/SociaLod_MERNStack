import './App.css';
import './components/component.css';
import './assemblers/assesmblers.css';
import Nav from './components/intract/navigation';
import Views from './controllers/views';
import Social from './components/intract/social';
import View from './components/views/view';


function App() {
  return (
    <div className="App">
      <Nav />
      <Views />
      <Social />
      {/* <View /> */}
    </div>
  );
}

export default App;