import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from './pages/Home';
import Events from './pages/Events';
import History from './pages/History';
import Membership from './pages/Membership';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>} / >
      <Route path='/events' element={<Events/>} / >
      <Route path='/history' element={<History/>} / >
      <Route path='/membership' element={<Membership/>} / >
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;