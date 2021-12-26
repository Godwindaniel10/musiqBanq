import React from 'react'
import { Link } from "react-router-dom"

const LandingPage = () => {
    return (
        <>
            <div className="landingPageContainer">
                <div className="navBarContainer">
                    <div className="logo">MusiQBanQ</div>
                    <Link exact to="/SignUp" className="signUpButton">Sign up</Link>
                </div>
                <div className="mainPageContainer">
                    <div className="z1">
                       
                        <h1 className="p1">MusiqBanq offers <span>ZERO</span> interest <span>LOAN</span> to upcoming artistes and small business owners</h1>
                        <p className="p2">Get yours today with ZERO <span>collateral.</span></p>
                        <Link exact to="/SignUp" className="signUpButton">Sign up</Link>
                    </div>
                    <div className="z2"></div>
                    <div className="z3"></div>
                </div>
            </div>
        </>
    )
}

export default LandingPage
