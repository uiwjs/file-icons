import React from 'react';
export const File = props => (
  <svg viewBox="0 0 20 20" width="16px" height="16px" {...props} className={`ffont ${props.className ? props.className : ''}`}><path d="M38,16 L27,5 L27,16 L38,16 Z M28.875,2 L42,15.2 L42,41.6 C42,44.0300529 40.0412458,46 37.625,46 L11.375,46 C8.946875,46 7,44.02 7,41.6 L7,6.4 C7,3.958 8.946875,2 11.375,2 L28.875,2 Z M24.25,5 L10,5 L10,43 L23.25,43 L39,43 L39,19.3125 L24.25,19.3125 L24.25,5 Z" fillRule="evenodd" /></svg>
);
