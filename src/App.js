import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './componentss/Home';
import About from './componentss/About';
import NavBar from './componentss/NavBar';
import Page404 from './componentss/Page404';
import User from './componentss/User';
import Filter from './componentss/Filter';
import Contact from './componentss/Contact';
import Company from './componentss/Company';
import Channel from './componentss/Channel';
import Other from './componentss/Other';
import Login from './componentss/Login';
import Protected from './componentss/Protected';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <NavBar />
      <Routes>
        <Route path="/" element={<Protected Component={Home} />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/about" element={<Protected Component={About}/>}/>
        <Route path="/user/:name" element={<User />}/>
        <Route path="/filter" element={<Protected Component={Filter}/>}/>
        <Route path="/contact/" element={<Protected Component={Contact}/>}>
          <Route path="company" element={<Company />}/>
          <Route path="channel" element={<Channel />}/>
          <Route path="other" element={<Other />}/>
        </Route>
        
        <Route path='/*' element={<Page404/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
