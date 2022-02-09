import React from 'react';

const userPage = () => {
  return <>
      <div className="userPageContainer">
        <div className="header"></div>
        <div className="userPageProfile">
          <div className="userPageProfileImg"></div>
          <div className="userPageProfileName">Samirat Kate</div>
          <div className="userPageProfileBtn">
            <button className="userPageProfileCard">Card</button>
            <div className="userPageProfileFan">1,000 fans</div>
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
          <div className="album2"></div>
          <div className="album3"></div>
        </div>
      </div>
  </>;
};

export default userPage;
