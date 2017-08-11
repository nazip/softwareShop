import React from 'react';

export const Center = (func) => (
  <div style={{textAlign: 'center'}}>
    {func()}
  </div>
);
