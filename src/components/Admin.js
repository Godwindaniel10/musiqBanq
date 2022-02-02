import React from 'react';

const Admin = () => {
  return <>
            <div className="adminComtainer">
                <div className="a1">
                   <div className="adminLogo">MB</div>
                </div>
                <div className="a2">
                    <div className="topZone">
                       <div className="userNameAndSearchBar">
                          <div className="userImgAndName">
                             <div className="userImg"></div>
                             <div className="userName">Godwin Daniel Olele</div>
                          </div>
                        
                       </div>
                       <div className="userEarningAndCard">
                          <div className="totalEarning">
                             <div className="totalEarningImg"><img src="https://img.icons8.com/external-flat-02-chattapat-/35/000000/external-carryingmoney-money-flat-02-chattapat-.png" alt=""/></div>
                             <div>
                                <div className="totalEarningHeader">Total earnings</div>
                                <div className="totalEarningNum">$25,750.00</div>
                             </div>
                          </div>
                          <div className="userCard">
                             <div className="userCardNameAndType">
                                <div className="cardName">
                                   <span className="cName">Card Name</span>
                                   <div className="name">Godwin Olele</div>
                                </div>
                                <div className="cardType">Debit</div>
                             </div>
                             <div className="cardNum">**** &nbsp;&nbsp;**** &nbsp;&nbsp;**** &nbsp;&nbsp;1234</div>
                             <div className="expAndcvv">
                                <div className="exp">
                                   <span className="expDateHeader">Exp date</span>
                                   <div className="expDate">09 / 24</div>
                                </div>
                                <div className="cvv">
                                   <span className="cvvHeader">cvv number</span>
                                   <div className="cvvNum">988</div>
                                </div>
                             </div>
                          </div>
                          <div className="c-Or-d-Btn">
                            <div>
                              <button className="userCreditBtn">Add Money</button><br/>
                              <button className="userdebitBtn">Deduct Money</button>
                            </div>
                          </div>
                       </div>
                    </div>
                    <div className="bottomZone">
                       <div className="allUser">
                          <div className="allUserText">All User's</div>
                          <form>
                            <input type="search" name="search" id="search" placeholder='Search user...' className="userSearchBox" />
                            <button type="submit" className="submitSearchBtn"><img src="https://img.icons8.com/officel/20/ffffff/search-client.png" alt=""/></button>
                         </form>
                       </div>
                       <div className="userS">
                          <div className="userProf">
                             <div className="usersImg"></div>
                             <div className="usersName">Oluyomi Kunle adebayo</div>
                          </div>
                          <div className="userProf">
                          <div className="usersImg"></div>
                             <div className="usersName">Chigga Clement</div>
                          </div>
                          <div className="userProf">
                          <div className="usersImg"></div>
                             <div className="usersName">Lawal Adeyemi coker</div>
                          </div>
                          <div className="userProf">
                          <div className="usersImg"></div>
                             <div className="usersName">Friday Mercy</div>
                          </div>
                          <div className="userProf">
                          <div className="usersImg"></div>
                             <div className="usersName">Justina Fred</div>
                          </div>
                          <div className="userProf">
                          <div className="usersImg"></div>
                             <div className="usersName">Kunle Poli</div>
                          </div>
                          <div className="userProf">
                          <div className="usersImg"></div>
                             <div className="usersName">Bisoye Lateef</div>
                          </div>
                          <div className="userProf">
                          <div className="usersImg"></div>
                             <div className="usersName">John Doe</div>
                          </div>
                          <div className="userProf">
                          <div className="usersImg"></div>
                             <div className="usersName">Mark Tyson</div>
                          </div>
                       </div>
                       <div className="next-or-prev-btn">
                          <div className="prev-btn"><img src="https://img.icons8.com/dusk/64/000000/previous.png" alt=""/></div>
                          <div className="next-btn"><img src="https://img.icons8.com/dusk/64/000000/next.png" alt=""/></div>
                       </div>
                       <div className="adminDescription"><span>Instruction:</span> &nbsp;&nbsp;Click each user box to view more details.</div>
                    </div>
                </div>
                <div className="a3">
                    <div className="adminName"><img src="https://img.icons8.com/external-itim2101-blue-itim2101/40/000000/external-admin-devices-service-itim2101-blue-itim2101.png" alt=""/>&nbsp;&nbsp;Godwin Olele</div>
                    <div className="cardNbtn">
                      <div className="adminCard">
                          <div className='myPort'>My Portfolio</div>
                          <div className='portAmount'>$150,000.00</div>
                      </div>
                      <div className="adminBtnContainer">
                          <button className="deposit">Deposit</button>
                          <button className="withdraw">Withdraw</button>
                      </div>
                    </div>
                    <div className="topSongContainer">
                        <p className="tsText">Top Song's &nbsp;&nbsp;<span className="bb">- Billboard -</span></p>
                        <div className='topSong'></div>
                    </div>
                    <div className="transHeader">
                            <div className="t">Transaction's</div>
                            <div className="s">See All</div>
                        </div>
                    <div className="trans">
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
                </div>
            </div>
         </>;
};

export default Admin;

