import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Row, Col } from 'react-bootstrap';
import Navbar from './components/layouts/Navbar'
import Footer from './components/layouts/Footer'
// React Router Import
import { Switch, Route } from 'react-router-dom'
// Import Pages
import Home from './components/pages/Home'
import About from './components/pages/About'
import Contacts from './components/pages/Contacts'
import Details from './components/pages/Details'
import NotFoundPage from './components/pages/NotFoundPage'
import Login from './components/pages/Login'
import Signup from './components/pages/Signup'
import AddDocuments from './components/pages/AddDocuments'



function App() {
    return (
      <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route path='/contacts' component={Contacts}/>
            <Route path='/details' component={Details}/>
            <Route path='/login' component={Login}/>
            <Route path='/signup' component={Signup}/>
            <Route path='/addDoc' component={AddDocuments}/>
            <Route  component={NotFoundPage}/>
          </Switch>
          <Footer/>
      </div>
    );
  
}

export default App;
