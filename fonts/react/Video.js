import React from 'react';
export const Video = props => (
  <svg viewBox="0 0 20 20" width="16px" height="16px" {...props} className={`ffont ${props.className ? props.className : ''}`}><path d="M36.6,7 L40.8,15.5 L34.5,15.5 L30.3,7 L26.1,7 L30.3,15.5 L24,15.5 L19.8,7 L15.6,7 L19.8,15.5 L13.5,15.5 L9.3,7 L7.2,7 C4.88040405,7 3,8.90278981 3,11.25 L3,36.75 C3,39.0972102 4.88040405,41 7.2,41 L40.8,41 C43.1195959,41 45,39.0972102 45,36.75 L45,7 L36.6,7 Z" fillRule="evenodd" /></svg>
);
