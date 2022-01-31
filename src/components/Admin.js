import React from 'react';

const Admin = () => {
  return <>
            <div className="adminComtainer">
                <div className="a1"></div>
                <div className="a2"></div>
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
                </div>
            </div>
         </>;
};

export default Admin;

