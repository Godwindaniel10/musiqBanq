import React from 'react';

const userPage = () => {

  function userPageCardClick() {

    const userPageCard = document.getElementById("userPageCardContainer");
    userPageCard.style.cssText = `
    display: block; 
  `;
 
 }



  return <>
      <div className="userPageContainer">
        <div className="header"></div>
        <div className="userPageProfile">
          <div className="userPageProfileImg"></div>
          <div className="userPageProfileName">Samirat Kate</div>
          <div className="userPageProfileBtn">
            <button className="userPageProfileCard" onClick={userPageCardClick}>Card</button>
            <div className="userPageProfileFan">1,000 fans</div>
          </div>
        </div>
          <div className="userPageCardContainer" id="userPageCardContainer">
            <div className="userPageCard">
            <div className="userCardNameAndType">
                                <div className="cardName">
                                   <span className="cName">Card Name</span>
                                   <div className="name">Samirat Kate</div>
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
          </div>
        <div className="albumHeader">Albums</div>
        <div className="albumContainer">
          <div className="album">
            <div className="albumImg"></div>
            <div className="albumNameAndBtns">
             <div className="albumName">
                <div className="name">Central Cee</div>
                <div className="title">Loading</div>
             </div>
             <div className="playAndDownloadBtn">
               <div className="play"><img src="https://img.icons8.com/external-bearicons-outline-color-bearicons/20/000000/external-play-call-to-action-bearicons-outline-color-bearicons.png" alt=''/></div>
               <div className="download">
                 <img src="https://img.icons8.com/external-bearicons-outline-color-bearicons/20/000000/external-download-call-to-action-bearicons-outline-color-bearicons.png" alt=""/>
               </div>
               <div className="moreInfo"><img src="https://img.icons8.com/cotton/20/000000/info--v3.png" alt=""/></div>
             </div>
             <button className="addToChartBtn">Add to chart</button>
            </div>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="album">
          <div className="albumImg"></div>
            <div className="albumNameAndBtns">
             <div className="albumName">
                <div className="name">Central Cee</div>
                <div className="title">Loading</div>
             </div>
             <div className="playAndDownloadBtn">
               <div className="play"><img src="https://img.icons8.com/external-bearicons-outline-color-bearicons/20/000000/external-play-call-to-action-bearicons-outline-color-bearicons.png" alt=''/></div>
               <div className="download">
                 <img src="https://img.icons8.com/external-bearicons-outline-color-bearicons/20/000000/external-download-call-to-action-bearicons-outline-color-bearicons.png" alt=""/>
               </div>
               <div className="moreInfo"><img src="https://img.icons8.com/cotton/20/000000/info--v3.png" alt=""/></div>
             </div>
             <button className="addToChartBtn">Add to chart</button>
            </div>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="album">
          <div className="albumImg"></div>
            <div className="albumNameAndBtns">
             <div className="albumName">
                <div className="name">Central Cee</div>
                <div className="title">Loading</div>
             </div>
             <div className="playAndDownloadBtn">
               <div className="play"><img src="https://img.icons8.com/external-bearicons-outline-color-bearicons/20/000000/external-play-call-to-action-bearicons-outline-color-bearicons.png" alt=''/></div>
               <div className="download">
                 <img src="https://img.icons8.com/external-bearicons-outline-color-bearicons/20/000000/external-download-call-to-action-bearicons-outline-color-bearicons.png" alt=""/>
               </div>
               <div className="moreInfo"><img src="https://img.icons8.com/cotton/20/000000/info--v3.png" alt=""/></div>
             </div>
             <button className="addToChartBtn">Add to chart</button>
            </div>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="album">
          <div className="albumImg"></div>
            <div className="albumNameAndBtns">
             <div className="albumName">
                <div className="name">Central Cee</div>
                <div className="title">Loading</div>
             </div>
             <div className="playAndDownloadBtn">
               <div className="play"><img src="https://img.icons8.com/external-bearicons-outline-color-bearicons/20/000000/external-play-call-to-action-bearicons-outline-color-bearicons.png" alt=''/></div>
               <div className="download">
                 <img src="https://img.icons8.com/external-bearicons-outline-color-bearicons/20/000000/external-download-call-to-action-bearicons-outline-color-bearicons.png" alt=""/>
               </div>
               <div className="moreInfo"><img src="https://img.icons8.com/cotton/20/000000/info--v3.png" alt=""/></div>
             </div>
             <button className="addToChartBtn">Add to chart</button>
            </div>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="album">
          <div className="albumImg"></div>
            <div className="albumNameAndBtns">
             <div className="albumName">
                <div className="name">Central Cee</div>
                <div className="title">Loading</div>
             </div>
             <div className="playAndDownloadBtn">
               <div className="play"><img src="https://img.icons8.com/external-bearicons-outline-color-bearicons/20/000000/external-play-call-to-action-bearicons-outline-color-bearicons.png" alt=''/></div>
               <div className="download">
                 <img src="https://img.icons8.com/external-bearicons-outline-color-bearicons/20/000000/external-download-call-to-action-bearicons-outline-color-bearicons.png" alt=""/>
               </div>
               <div className="moreInfo"><img src="https://img.icons8.com/cotton/20/000000/info--v3.png" alt=""/></div>
             </div>
             <button className="addToChartBtn">Add to chart</button>
            </div>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="album">
          <div className="albumImg"></div>
            <div className="albumNameAndBtns">
             <div className="albumName">
                <div className="name">Central Cee</div>
                <div className="title">Loading</div>
             </div>
             <div className="playAndDownloadBtn">
               <div className="play"><img src="https://img.icons8.com/external-bearicons-outline-color-bearicons/20/000000/external-play-call-to-action-bearicons-outline-color-bearicons.png" alt=''/></div>
               <div className="download">
                 <img src="https://img.icons8.com/external-bearicons-outline-color-bearicons/20/000000/external-download-call-to-action-bearicons-outline-color-bearicons.png" alt=""/>
               </div>
               <div className="moreInfo"><img src="https://img.icons8.com/cotton/20/000000/info--v3.png" alt=""/></div>
             </div>
             <button className="addToChartBtn">Add to chart</button>
            </div>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="album">
          <div className="albumImg"></div>
            <div className="albumNameAndBtns">
             <div className="albumName">
                <div className="name">Central Cee</div>
                <div className="title">Loading</div>
             </div>
             <div className="playAndDownloadBtn">
               <div className="play"><img src="https://img.icons8.com/external-bearicons-outline-color-bearicons/20/000000/external-play-call-to-action-bearicons-outline-color-bearicons.png" alt=''/></div>
               <div className="download">
                 <img src="https://img.icons8.com/external-bearicons-outline-color-bearicons/20/000000/external-download-call-to-action-bearicons-outline-color-bearicons.png" alt=""/>
               </div>
               <div className="moreInfo"><img src="https://img.icons8.com/cotton/20/000000/info--v3.png" alt=""/></div>
             </div>
             <button className="addToChartBtn">Add to chart</button>
            </div>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="album">
          <div className="albumImg"></div>
            <div className="albumNameAndBtns">
             <div className="albumName">
                <div className="name">Central Cee</div>
                <div className="title">Loading</div>
             </div>
             <div className="playAndDownloadBtn">
               <div className="play"><img src="https://img.icons8.com/external-bearicons-outline-color-bearicons/20/000000/external-play-call-to-action-bearicons-outline-color-bearicons.png" alt=''/></div>
               <div className="download">
                 <img src="https://img.icons8.com/external-bearicons-outline-color-bearicons/20/000000/external-download-call-to-action-bearicons-outline-color-bearicons.png" alt=""/>
               </div>
               <div className="moreInfo"><img src="https://img.icons8.com/cotton/20/000000/info--v3.png" alt=""/></div>
             </div>
             <button className="addToChartBtn">Add to chart</button>
            </div>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="album">
          <div className="albumImg"></div>
            <div className="albumNameAndBtns">
             <div className="albumName">
                <div className="name">Central Cee</div>
                <div className="title">Loading</div>
             </div>
             <div className="playAndDownloadBtn">
               <div className="play"><img src="https://img.icons8.com/external-bearicons-outline-color-bearicons/20/000000/external-play-call-to-action-bearicons-outline-color-bearicons.png" alt=''/></div>
               <div className="download">
                 <img src="https://img.icons8.com/external-bearicons-outline-color-bearicons/20/000000/external-download-call-to-action-bearicons-outline-color-bearicons.png" alt=""/>
               </div>
               <div className="moreInfo"><img src="https://img.icons8.com/cotton/20/000000/info--v3.png" alt=""/></div>
             </div>
             <button className="addToChartBtn">Add to chart</button>
            </div>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="album">
          <div className="albumImg"></div>
            <div className="albumNameAndBtns">
             <div className="albumName">
                <div className="name">Central Cee</div>
                <div className="title">Loading</div>
             </div>
             <div className="playAndDownloadBtn">
               <div className="play"><img src="https://img.icons8.com/external-bearicons-outline-color-bearicons/20/000000/external-play-call-to-action-bearicons-outline-color-bearicons.png" alt=''/></div>
               <div className="download">
                 <img src="https://img.icons8.com/external-bearicons-outline-color-bearicons/20/000000/external-download-call-to-action-bearicons-outline-color-bearicons.png" alt=""/>
               </div>
               <div className="moreInfo"><img src="https://img.icons8.com/cotton/20/000000/info--v3.png" alt=""/></div>
             </div>
             <button className="addToChartBtn">Add to chart</button>
            </div>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="album">
          <div className="albumImg"></div>
            <div className="albumNameAndBtns">
             <div className="albumName">
                <div className="name">Central Cee</div>
                <div className="title">Loading</div>
             </div>
             <div className="playAndDownloadBtn">
               <div className="play"><img src="https://img.icons8.com/external-bearicons-outline-color-bearicons/20/000000/external-play-call-to-action-bearicons-outline-color-bearicons.png" alt=''/></div>
               <div className="download">
                 <img src="https://img.icons8.com/external-bearicons-outline-color-bearicons/20/000000/external-download-call-to-action-bearicons-outline-color-bearicons.png" alt=""/>
               </div>
               <div className="moreInfo"><img src="https://img.icons8.com/cotton/20/000000/info--v3.png" alt=""/></div>
             </div>
             <button className="addToChartBtn">Add to chart</button>
            </div>
          </div>
           &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className="album">
          <div className="albumImg"></div>
            <div className="albumNameAndBtns">
             <div className="albumName">
                <div className="name">Central Cee</div>
                <div className="title">Loading</div>
             </div>
             <div className="playAndDownloadBtn">
               <div className="play"><img src="https://img.icons8.com/external-bearicons-outline-color-bearicons/20/000000/external-play-call-to-action-bearicons-outline-color-bearicons.png" alt=''/></div>
               <div className="download">
                 <img src="https://img.icons8.com/external-bearicons-outline-color-bearicons/20/000000/external-download-call-to-action-bearicons-outline-color-bearicons.png" alt=""/>
               </div>
               <div className="moreInfo"><img src="https://img.icons8.com/cotton/20/000000/info--v3.png" alt=""/></div>
             </div>
             <button className="addToChartBtn">Add to chart</button>
            </div>
          </div>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <div className='addMoreSongContainer'>
            <div className="addMoreSongBtn"><img src="https://img.icons8.com/ios-filled/30/ffffff/add-song.png" alt=""/></div>
          </div>
        </div>
        
        <div className="footer">
          <div className="footerHomeBtn"><img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/20/ffffff/external-home-multimedia-kiranshastry-lineal-kiranshastry.png" alt=""/></div>
          <div className="footerAlbumBtn"><img src="https://img.icons8.com/ios-filled/22/575757/add-song.png" alt=""/></div>
          <div className="footerChartBtn"><img src="https://img.icons8.com/ios-filled/20/575757/rebalance-portfolio.png" alt=""/></div>
          <div className="footerNewsBtn"><img src="https://img.icons8.com/ios-filled/20/575757/news.png" alt=""/></div>
        </div>
      </div>
  </>;
};

export default userPage;
