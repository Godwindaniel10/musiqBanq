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
                <div className="title">welcome to brixton</div>
             </div>
             <div className="playAndDownloadBtn"></div>
             <div className="addToChartBtn"></div>
            </div>
          </div>
          <div className="album2"></div>
          <div className="album3"></div>
        </div>
      </div>
  </>;
};

export default userPage;
