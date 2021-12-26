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
                        <div className="secLineText">
                        <div className="zero">Get yours today with ZERO</div>
                        
                        <div className="content-slider">
                          <div className="slider">
                            <div className="mask">
                               <ul>
                                      <li className="anim1">
                     <div className="quote">Collateral</div>
        </li>
        <li className="anim2">
          <div className="quote">Bank statement</div>
        </li>
        <li className="anim3">
          <div className="quote">Guarantor</div>
        </li>
        <li className="anim4">
          <div className="quote">Bvn Needed</div>
        </li>
      </ul>
    </div>
  </div>
  </div>
                        </div>

                        <Link exact to="/SignUp" className="signUpButton">Sign up</Link>
                    </div>
                    <div className="z2">
                        <div className="pattern1"></div>
                        <div className="pattern2"></div>
                    </div>
                    <div className="z3">
                    <div className="pattern3"></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage
