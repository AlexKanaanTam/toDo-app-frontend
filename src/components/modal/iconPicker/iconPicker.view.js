import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ICONS } from '../../../assets/icons/icons';
import styles from './iconPicker.module.css';

export const IconPicker = ({ handleIcon, selectedIcon, selectedColor }) => (
  <>
    <div className={styles.container}>
      <select onChange={(e) => handleIcon(e.target.value)}>
        <option value="" selected disabled hidden>
          Select Icon
        </option>
        {ICONS.map((ic) => (
          <option key={ic} value={ic}>
            {ic}
          </option>
        ))}
      </select>
      <div className={styles.icon} style={{ backgroundColor: `${selectedColor || '#e0e0e0'}` }}>
        <FontAwesomeIcon icon={selectedIcon || 'smile'} />
      </div>
    </div>
  </>
);
