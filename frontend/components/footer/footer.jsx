import React from 'react';

export default () => {
  return (
    <div className="footer">
      <div className="footer-box-container">
        <div className="footer-box-1">
          <span>Description</span>
          <p>Welcome to EasyTable - Your destination for restaurant bliss.
          This web application was built using Ruby on Rails and React/Redux
          as a tribute to the popular reservation service OpenTable.
        </p>
        </div>
        <div className="footer-box-2">
          <span>Links</span>
          <ul>
            <li>Github</li>
            <li>LinkedIn</li>
            <li>README</li>
            <li>Email</li>
          </ul>
        </div>
      </div>
      <div className="footer-bar">
        <span className="footer-banner">
          Brandt Sheets 2018 All Rights Reserved
        </span>
      </div>
    </div>
  );
};
