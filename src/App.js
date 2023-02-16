import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import Reservation from './pages/Reservations';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/reservation' element={<Reservation></Reservation>}></Route>
      </Routes>
      </Router>
    </>
  );
}

export default App;
