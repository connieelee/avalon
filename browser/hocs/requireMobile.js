/* global navigator */
import React from 'react';
import { isOnMobileDevice } from '../../utils';

function requireMobile(Component) {
  if (isOnMobileDevice(navigator)) return Component;
  return () => (
    <div className="flex-container-col vertical-center mobile">
      <div className="text-center require-mobile-card">
        <h1>please visit this url from a mobile device.</h1>
      </div>
    </div>
  );
}

export default requireMobile;
