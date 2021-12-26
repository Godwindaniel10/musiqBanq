import React, { useState } from "react"
import { Card, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import {Link, useNavigate } from "react-router-dom"




export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useNavigate()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
    <div className="header-container">
          <div className="zone1">
    
                   <h1>Transaction Always Reliable With <span>CLink</span></h1>
                  
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus veniam dolore maiores molestiae, obcaecati.</p>
                   <div className="btn-zone">
                       <Link exact to="/Main" className="btn1"> Get Started </Link>
                   </div>
               </div> 
               </div>
      {/*<Card>
        <Card.Body>
          <h2 className="text-center mb-4">Profile</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>*/}
    </>
  )
}

