import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import WhyUs from './WhyUs';
import About_us from './About_us';
import How_works from './How_works';
import Login from './Login';
import Register from './Register';

function App() {
  return (
    <div>
     <Router>
     <Navbar />
    	<Routes>
 		    <Route path="/" element={<Home />} /> 
         <Route path="/why_us" element={<WhyUs />} /> 
         <Route path="/about_us" element={<About_us />} />
         <Route path="/how_works" element={<How_works />} />
         <Route path="/login" element={<Login />} />
         <Route path="/register" element={<Register />} />
        {/* <Navbar /> */}
   
        </Routes>
      </Router>  

  </div>
  );
}

export default App;
