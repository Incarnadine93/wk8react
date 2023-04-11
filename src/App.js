import './App.css';
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Shop from './views/Shop';
import Home from './views/Home';
import Footer from './components/Footer';
import Ads from './components/Ads';



function App() {

  return (

    <div className="App">
      <Nav />
      <Ads />
      <Routes>
        {/* any 'page' of our app can be defined as a route here */}
        <Route children path='/' element={<Home />}  />

      </Routes>
      <Footer />
    </div>

  );
}

export default App;