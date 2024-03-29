import React from 'react';
export const Document = props => (
  <svg viewBox="0 0 20 20" width="16px" height="16px" {...props} className={`ffont ${props.className ? props.className : ''}`}><path d="M26.6875,17.4 L38.71875,17.4 L26.6875,5.3 L26.6875,17.4 Z M11.375,2 L28.875,2 L42,15.2 L42,41.6 C42,44.0300529 40.0412458,46 37.625,46 L11.375,46 C8.946875,46 7,44.02 7,41.6 L7,6.4 C7,3.958 8.946875,2 11.375,2 Z M31.0625,37.2 L31.0625,32.8 L11.375,32.8 L11.375,37.2 L31.0625,37.2 Z M37.625,28.4 L37.625,24 L11.375,24 L11.375,28.4 L37.625,28.4 Z" fillRule="evenodd" /></svg>
);
