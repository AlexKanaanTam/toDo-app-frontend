import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './userBox.module.css';

export const UserBox = ({ menuHandle }) => (
  <div className={styles.userC}>
    <p className={styles.user}>Pato</p>
    <div className={styles.image}>P</div>
    <div className={styles.moreMenu} onClick={menuHandle}>
      <FontAwesomeIcon icon="ellipsis-v" />
    </div>
  </div>
);
