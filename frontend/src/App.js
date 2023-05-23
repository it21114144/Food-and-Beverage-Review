import './App.css';
import Login from './component/Login';
import Home from './component/Home';
import NavBar from './component/NavBar';
import EditPost from './component/EditPost';
import ViewProfile from './component/ViewProfile';
import SuggestProfile from './component/SuggestProfile';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar/>
      <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/home/:id" element={<Home/>} />
        <Route path="/edit/:id/:id" element={<EditPost/>}/>
        <Route path="/profile/:id" element={<ViewProfile/>}/>
        <Route path="/suggestprofile/:id" element={<SuggestProfile/>}/>
      </Routes>
      </Router>

    </div>
  );
}

export default App;