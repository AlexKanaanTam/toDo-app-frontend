import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './colorPicker.module.css';

export const ColorPicker = ({ handleColor }) => (
  <>
    <div className={styles.container}>
      <div>
        <p>
          Select Color <FontAwesomeIcon icon="paint-brush" />
        </p>
      </div>
      <input type="color" onChange={(e) => handleColor(e.target.value)} />
    </div>
  </>
);
