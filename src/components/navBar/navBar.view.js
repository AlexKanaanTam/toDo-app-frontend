import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './navBar.module.css';
import TabButton from '../tabButton';
import UserBox from './userBox';
import UserMenu from '../userMenu';
import { ReactComponent as MoveTask } from '../../assets/icons/move-task.svg';
import { ReactComponent as Stack } from '../../assets/icons/stack.svg';
import { COLLECTIONS_PAGE, TASKS_PAGE } from '../../routers/routers';

export const NavBar = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className={styles.navBar}>
      <div className={styles.tabsContainer}>
        <TabButton cName="button" name="Tasks" to={TASKS_PAGE}>
          <MoveTask style={{ marginLeft: '10px' }} />
        </TabButton>
        <TabButton cName="button" name="Collections" to={COLLECTIONS_PAGE}>
          <Stack style={{ marginLeft: '10px' }} />
        </TabButton>
      </div>
      <div className={styles.searchUser}>
        <div className={styles.searchBarC}>
          <input className={styles.searchBar} type="search" />
          <FontAwesomeIcon icon="search" className={styles.lens} />
        </div>
        <UserBox menuHandle={() => setMenu(!menu)} />
        <UserMenu open={menu} close={() => setMenu(false)} />
      </div>
    </div>
  );
};
