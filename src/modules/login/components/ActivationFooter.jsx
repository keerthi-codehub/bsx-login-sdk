import React from 'react';
import './activationCmp.css';

const ActivationFooter = ({ privacyPolicyLink, termsOfUseLink }) => (
  <div className="footer">
    <div className="link-container">
      <a className="styled-link" href={privacyPolicyLink || 'privacy-policy-details'}>
        Privacy Policy
      </a>
    </div>
    <div className="link-container">
      <a className="styled-link" target="_blank" href={termsOfUseLink || 'terms-and-conditions-details'}>
        Terms of Use
      </a>
    </div>
  </div>
);

export default ActivationFooter;
