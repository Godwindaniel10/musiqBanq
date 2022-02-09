import React from 'react'
import {Link} from "react-router-dom";
{/*import UserProfile from "./components/UserProfile"*/}

const Main = () => {


     function sayHello() {

        const musicCha = document.getElementById("musicChartContainer");
        musicCha.style.display = "none";

        const tH = document.getElementById("transactionHistoryone");
        tH.style.display = "block";


    }

    function btn01() {
    
        const musicCha = document.getElementById("musicChartContainer");
        musicCha.style.display = "block";

        const tH = document.getElementById("transactionHistoryone");
        tH.style.display = "none";
    }


    return (
        <>
            <div className="transaction-header-container">
            <div className="base1">
            </div>
                <div className="base2">
                    <div className="phone-ui">
                        <div className="slide-container">
                        <div className="fund-balance" id="f1">
                            <p className="ab">Account Balance</p>
                            <p className="amount">$50,000</p>
                            <p className="acc-num">Account no: <span className="acc-number">6156738012</span></p>
                            <div className="buttons">
                               <button className="add-money"><img src="https://img.icons8.com/material-outlined/20/ffffff/add.png" alt="" />&nbsp;Add money</button>
                               <button className="send-money"><img src="https://img.icons8.com/material-outlined/20/ffffff/filled-sent.png" alt=""/>&nbsp;Send money</button>
                            </div>
                        </div>
                        

                        
                             {/* slide 3*/}
                             <div className="slide-3">
                               <p className="ab">Account Balance</p>
                               <p className="amount">$50,000</p>
                               <p className="acc-num">Account no: <span className="acc-number">6156738012</span></p>
                               <div className="buttons">
                                  <button className="add-money"><img src="https://img.icons8.com/material-outlined/20/ffffff/add.png" alt="" />&nbsp;Add money</button>
                                  <button className="send-money"><img src="https://img.icons8.com/material-outlined/20/ffffff/filled-sent.png" alt=""/>&nbsp;Send money</button>
                               </div>
                            </div>


                            </div>
                        <div className="dot-container">
                            <div className="dot1" onClick={btn01}><img src="https://img.icons8.com/fluency/30/000000/home.png" alt=""/></div>
                            <div className="dot2" onClick={sayHello}><img src="https://img.icons8.com/external-prettycons-flat-prettycons/30/000000/external-transaction-business-and-finance-prettycons-flat-prettycons.png" alt=""/></div>
                        
                        </div>

                        <div className="musicChartContainer" id="musicChartContainer">
                            <h1 className="MC">Music Chart</h1>
                            <div className="m1">
                                <div className="songImage"></div>
                                <div className="songInfo">
                                    <p className="songTitle">Central Cee - Loading</p>
                                    <div className="btnsContainer">
                                       <div className="playBtn"><img src="https://img.icons8.com/material-rounded/15/000000/play--v1.png" alt=""/>1046</div>
                                       <div className="downloadBtn"><img src="https://img.icons8.com/material-rounded/15/000000/download--v1.png" alt=""/>133</div>
                                       <div className="infoBtn"><img src="https://img.icons8.com/material-outlined/20/000000/error-cloud.png" alt=""/></div>
                                    </div>
                                </div>
                            </div>
                            <div className="m1">
                                <div className="songImage2"></div>
                                <div className="songInfo">
                                <p className="songTitle">ArrDee - Cheeky Bars</p>
                                    <div className="btnsContainer">
                                       <div className="playBtn"><img src="https://img.icons8.com/material-rounded/15/000000/play--v1.png" alt=""/>46</div>
                                       <div className="downloadBtn"><img src="https://img.icons8.com/material-rounded/15/000000/download--v1.png" alt=""/>8</div>
                                       <div className="infoBtn"><img src="https://img.icons8.com/material-outlined/20/000000/error-cloud.png" alt=""/></div>
                                    </div>
                                </div>
                            </div>
                            <div className="m1">
                                <div className="songImage3"></div>
                                <div className="songInfo">
                                <p className="songTitle">Portable X Olamide - Zazu</p>
                                    <div className="btnsContainer">
                                    <div className="playBtn"><img src="https://img.icons8.com/material-rounded/15/000000/play--v1.png" alt=""/>883</div>
                                       <div className="downloadBtn"><img src="https://img.icons8.com/material-rounded/15/000000/download--v1.png" alt=""/>305</div>
                                       <div className="infoBtn"><img src="https://img.icons8.com/material-outlined/20/000000/error-cloud.png" alt=""/></div>
                                    </div>
                                </div>
                            </div>
                            <div className="m1">
                                <div className="songImage4"></div>
                                <div className="songInfo">
                                <p className="songTitle">Wizkid - Essence</p>
                                    <div className="btnsContainer">
                                       <div className="playBtn"><img src="https://img.icons8.com/material-rounded/15/000000/play--v1.png" alt=""/>505</div>
                                       <div className="downloadBtn"><img src="https://img.icons8.com/material-rounded/15/000000/download--v1.png" alt=""/>124</div>
                                       <div className="infoBtn"><img src="https://img.icons8.com/material-outlined/20/000000/error-cloud.png" alt=""/></div>
                                    </div>
                                </div>
                            </div>
                            <div className="m1">
                                <div className="songImage5"></div>
                                <div className="songInfo">
                                <p className="songTitle">Dave X Burna Boy - Location</p>
                                    <div className="btnsContainer">
                                       <div className="playBtn"><img src="https://img.icons8.com/material-rounded/15/000000/play--v1.png" alt=""/>23</div>
                                       <div className="downloadBtn"><img src="https://img.icons8.com/material-rounded/15/000000/download--v1.png" alt=""/>9</div>
                                       <div className="infoBtn"><img src="https://img.icons8.com/material-outlined/20/000000/error-cloud.png" alt=""/></div>
                                    </div>
                                </div>
                            </div>
                            <div className="m1">
                                <div className="songImage6"></div>
                                <div className="songInfo">
                                <p className="songTitle">Tems - Crazy Tings</p>
                                    <div className="btnsContainer">
                                       <div className="playBtn"><img src="https://img.icons8.com/material-rounded/15/000000/play--v1.png" alt=""/>44</div>
                                       <div className="downloadBtn"><img src="https://img.icons8.com/material-rounded/15/000000/download--v1.png" alt=""/>3</div>
                                       <div className="infoBtn"><img src="https://img.icons8.com/material-outlined/20/000000/error-cloud.png" alt=""/></div>
                                    </div>
                                </div>
                            </div>
                            <div className="m1">
                                <div className="songImage7"></div>
                                <div className="songInfo">
                                <p className="songTitle">Timaya - Cold Outside</p>
                                    <div className="btnsContainer">
                                       <div className="playBtn"><img src="https://img.icons8.com/material-rounded/15/000000/play--v1.png" alt=""/>31,467</div>
                                       <div className="downloadBtn"><img src="https://img.icons8.com/material-rounded/15/000000/download--v1.png" alt=""/>633</div>
                                       <div className="infoBtn"><img src="https://img.icons8.com/material-outlined/20/000000/error-cloud.png" alt=""/></div>
                                    </div>
                                </div>
                            </div>
                            <div className="m1">
                                <div className="songImage8"></div>
                                <div className="songInfo">
                                <p className="songTitle">Davido ft. Summer walker - Animashaun</p>
                                    <div className="btnsContainer">
                                       <div className="playBtn"><img src="https://img.icons8.com/material-rounded/15/000000/play--v1.png" alt=""/>101</div>
                                       <div className="downloadBtn"><img src="https://img.icons8.com/material-rounded/15/000000/download--v1.png" alt=""/>33</div>
                                       <div className="infoBtn"><img src="https://img.icons8.com/material-outlined/20/000000/error-cloud.png" alt=""/></div>
                                    </div>
                                </div>
                            </div>
                            <div className="m1">
                                <div className="songImage9"></div>
                                <div className="songInfo">
                                <p className="songTitle">Tion Wayne - Wow</p>
                                    <div className="btnsContainer">
                                       <div className="playBtn"><img src="https://img.icons8.com/material-rounded/15/000000/play--v1.png" alt=""/>299</div>
                                       <div className="downloadBtn"><img src="https://img.icons8.com/material-rounded/15/000000/download--v1.png" alt=""/>77</div>
                                       <div className="infoBtn"><img src="https://img.icons8.com/material-outlined/20/000000/error-cloud.png" alt=""/></div>
                                    </div>
                                </div>
                            </div>
                            <div className="m1">
                                <div className="songImage10"></div>
                                <div className="songInfo">
                                <p className="songTitle">Wizkid - Blessed</p>
                                    <div className="btnsContainer">
                                       <div className="playBtn"><img src="https://img.icons8.com/material-rounded/15/000000/play--v1.png" alt=""/>346</div>
                                       <div className="downloadBtn"><img src="https://img.icons8.com/material-rounded/15/000000/download--v1.png" alt=""/>63</div>
                                       <div className="infoBtn"><img src="https://img.icons8.com/material-outlined/20/000000/error-cloud.png" alt=""/></div>
                                    </div></div>   
                            </div>
                        </div>

                         
                         <div className="transactionHistoryone" id="transactionHistoryone">
                             <div className="transHeaderr">
                                 <p className="thp">Transactions</p>
                                 <p className="thp2">View all</p>
                             </div>
                             <div className="transMadeContainer">
                                <div className="transMade">
                                    <div className="imgg">
                                    <img src="https://img.icons8.com/color/48/000000/transaction.png" alt=""/>
                                    </div>
                                   <div className="transId">
                                      <div>
                                         <div className="ids">ID-00001</div>
                                         <div className="date">December 27, 09:47 AM</div>
                                      </div>
                                   </div>
                                   <p className="transAmount">$7,000</p>
                                </div>
                                <div className="transMade">
                                <div className="imgg">
                                    <img src="https://img.icons8.com/color/48/000000/transaction.png" alt=""/>
                                    </div>
                                   <div className="transId">
                                      <div>
                                         <div className="ids">ID-00002</div>
                                         <div className="date">july 1, 12:01 PM</div>
                                      </div>
                                   </div>
                                   <p className="transAmount">$50,000</p>
                                </div>
                                <div className="transMade">
                                <div className="imgg">
                                    <img src="https://img.icons8.com/color/48/000000/transaction.png" alt=""/>
                                    </div>
                                   <div className="transId">
                                      <div>
                                         <div className="ids">ID-00003</div>
                                         <div className="date">september 17, 9:09 AM</div>
                                      </div>
                                   </div>
                                   <p className="transAmount">$100</p>
                                </div>
                                <div className="transMade">
                                <div className="imgg">
                                    <img src="https://img.icons8.com/color/48/000000/transaction.png" alt=""/>
                                    </div>
                                   <div className="transId">
                                      <div>
                                         <div className="ids">ID-00004</div>
                                         <div className="date">April 15, 1:06 PM</div>
                                      </div>
                                   </div>
                                   <p className="transAmount">$105,000,000</p>
                                </div>
                                <div className="transMade">
                                <div className="imgg">
                                    <img src="https://img.icons8.com/color/48/000000/transaction.png" alt=""/>
                                    </div>
                                   <div className="transId">
                                      <div>
                                         <div className="ids">ID-00005</div>
                                         <div className="date">february 8, 19:32 AM</div>
                                      </div>
                                   </div>
                                   <p className="transAmount">$4,000,000</p>
                                </div>
                            </div>
                         </div>


                         <footer className="mainFooter"></footer>
                        </div>
                       
                       
                      
                    </div>


                    
                </div>
                
        </>
    )
}

export default Main;
