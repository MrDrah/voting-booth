import React, { Component } from 'react';

class FooterDashboard extends Component {
  render() {

    return (
      <footer>
        <div className='footerContent'>
          <p>copyright &copy; <span id="year">{new Date().getFullYear()}</span> &nbsp;-&nbsp; all rights reserved </p>
        </div>
      </footer>
    );
  };
};

export default FooterDashboard;