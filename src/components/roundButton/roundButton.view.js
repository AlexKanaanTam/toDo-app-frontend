import React from 'react';
import styles from './roundButton.module.css';

export const RoundButton = ({ cName, name, handleClick, children }) => {
  let cNameStyle;
  // Switch state for classname personalization
  switch (cName) {
    case 'primary':
      cNameStyle = styles.primary;
      break;
    case 'secondary':
      cNameStyle = styles.secondary;
      break;
    case 'collection':
      cNameStyle = styles.collection;
      break;
    default:
      break;
  }
  return (
    <button className={cNameStyle} onClick={handleClick}>
      {name}
      {children}
    </button>
  );
};
