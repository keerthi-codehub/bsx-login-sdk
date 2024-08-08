import React from 'react';
import './activationCmp.css';

const ActivationHeader = ({ title, subtitle, siteLogo }) => (
  <div className="header">
    <div className="image-wrapper">
      <div className="picture">
        {/* <Fcfdlogo width="253" height="50" /> */}
       {siteLogo}
      </div>
    </div>
    <div className="head">
      <div className="title">{title}</div>
      {subtitle && (
        <div className="subtitle" dangerouslySetInnerHTML={{ __html: subtitle }} />
      )}
    </div>
  </div>
);

export default ActivationHeader;
