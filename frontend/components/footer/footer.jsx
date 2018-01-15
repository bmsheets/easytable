import React from 'react';

export default () => {
  return (
    <div className="footer">
      <div className="footer-box-container">
        <div className="footer-box-1">
          <span>About</span>
          <p className="about-paragraph">Welcome to EasyTable - Your destination for restaurant bliss.
          This web application was built using Ruby on Rails and React/Redux
          as a tribute to the popular reservation service OpenTable.
        </p>
        </div>
        <div className="footer-box-2">
          <span>Links</span>
          <ul className="fa-ul footer-links">
            <li>
              <a href="http://github.com/bmsheets">
                <i class="fa fa-github fa-li" aria-hidden="true"></i>
                Github
              </a>
            </li>
            <li>
              <a href="http://linkedin.com/in/bmsheets">
                <i class="fa fa-linkedin-square fa-li" aria-hidden="true"></i>
                LinkedIn
              </a>
            </li>
            <li>
              <a href="http://github.com/bmsheets/easytable">
                <i class="fa fa-book fa-li" aria-hidden="true"></i>
                README
              </a>
            </li>
            <li>
              <a href="mailto:brandtsheets@gmail.com">
                <i class="fa fa-envelope-o fa-li" aria-hidden="true"></i>
                Email
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bar">
        <span className="footer-banner">
          Built by Brandt Sheets, 2017-2018
        </span>
      </div>
    </div>
  );
};
