import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Navbar from './shared/components/Navbar';
import Header from './components/Header';

function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Header/>
    </BrowserRouter>
    </>
  );
}

export default App;
