import logo from './logo.svg';
import {Routes,Route} from 'react-router-dom';
import Home from './pages/Home';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Footer from './pages/Footer';
import AdminLogin from './pages/AdminLogin';
import Login from './pages/Login';
import Contact from './pages/Contact';
function App() {
  return (
    <div>
      <Routes>
        <Route exact path='/contact' element={<Contact />}/>
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/admin-login' element={<AdminLogin />} />
        <Route exact path="/" element={<Home />}/>
      
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
