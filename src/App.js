import Home from "./Component/Home";
import Navbar from "./Component/Navbar";
import Create from "./Component/Create";
import BlogDetails from "./Component/BlogDetails";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home/>} />     
            <Route path="/create" element={<Create/>}/>    
            <Route path="/blogs/:id" element={<BlogDetails/>}/> 
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;