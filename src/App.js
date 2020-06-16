import React from 'react';
import './App.css';
import HRSection from './components/sections/HRSection';
import SalesSection from './components/sections/SalesSection';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Main from './components/Main';
import ITSection from './components/sections/ITSection';
import RDSection from './components/sections/RDSection';
import AdminSection from './components/sections/AdminSection';

function App() {
  return (
    <Router>
      <div className="App">
        <Route path="/" component={NavBar}/>
        <Route path="/" component={Main}/>
        <Route path="/hr" component={HRSection}/>
        <Route path="/sales" component={SalesSection}/>
        <Route path="/it" component={ITSection}/>
        <Route path="/rd" component={RDSection}/>
        <Route path="/admin" component={AdminSection}/>
      </div>
    </Router>

  );
}

export default App;
