import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './userMenu.module.css';
import TabButton from '../tabButton';

export const UserMenu = ({ open, close }) => (
  <div className={`${styles.container} ${open && styles.open}`} onMouseLeave={close}>
    <div>
      <TabButton cName="menu" name="Profile" to="/user">
        <FontAwesomeIcon icon="user-astronaut" />
      </TabButton>
    </div>
    <div>
      <TabButton cName="menu" name="Logout" to="/abyss">
        <FontAwesomeIcon icon="power-off" />
      </TabButton>
    </div>
  </div>
);
