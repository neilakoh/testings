import React from 'react';

const Layout = ({content = () => null }) => (
  <div className="mainWrapper">
    <div className="subWrapper">
      {content()}
    </div>
  </div>
);

export default Layout;
