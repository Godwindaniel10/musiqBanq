
import React, {Fragment} from 'react';
import Signup from "./components/Signup"
import Main from "./components/Main"

import { AuthProvider } from "./contexts/AuthContext"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Dashboard from "./components/Dashboard"
import Login from "./components/Login"

import ForgotPassword from "./components/ForgotPassword"

import LandingPage from "./components/LandingPage"
import './App.css';


function App() {
  return (
  
   
<>

        <Router>
          <AuthProvider>
            <Routes>
              <Route exact path='/' element={<LandingPage/>} />
              <Route path='/dashboard' element={<Dashboard/>} />
              <Route path="/signup" element={<Signup/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/forgot-password" element={<ForgotPassword/>} />
              <Route path="/main" element={<Main/>} />

            </Routes>
          </AuthProvider>
        </Router>

         {/*<Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
    <div className="w-100" style={{ maxWidth: "400px" }}>  </div>
     
    </Container>*/}

     </>
   
  )
}

export default App
