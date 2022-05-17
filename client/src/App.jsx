/** @format */

import './app.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Post from './pages/Post';

const App = () => {

  const user = true

  return (
    <Router>
      <Navbar user={user}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={user ? <Navigate to="/" replace/> : <Login />} />
        <Route path="/post/:id" element={!user ? <Navigate to="/login" replace/> : <Post />} />
      </Routes>
    </Router>
  );
};

export default App;
