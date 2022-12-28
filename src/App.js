import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './pages/Home';
import Events from './pages/Events';
import History from './pages/History';
import Memership from './pages/Membership';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} / >
      <Route path='/events' element={<Events/>} / >
      <Route path='/history' element={<History/>} / >
      <Route path='/membership' element={<Memership/>} / >
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
