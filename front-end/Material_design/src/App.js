import './index.css';
import Views from './controllers/views';
import NavigationBar from './components/fixeds/navigation';

export default function App() {
  return (
    <div className="App" style={{width:'100vw',overflowX:'hidden',overflowY:'visible',minHeight:'100vh'}}>
      <NavigationBar />
      <Views />
    </div >
  );
};
