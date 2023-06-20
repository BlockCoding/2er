import Home from '../src/screen/Home'
import './App.css';
import SignIn from '../src/Components/Auth/SignIn'
import SignUp from '../src/Components/Auth/SignUp'
import { path } from './Router/router';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    
    <Router>
      <Routes>
      <Route path={path.HOME} element={<Home />} />
      <Route path={path.SIGNIN} element={<SignIn />} />
      <Route path={path.SIGNUP} element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
