/* eslint-disable no-alert */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { shortFetch } from '../../assets/utils/fetch.utils';
import { COLLECTIONS_PAGE, TASKS_PAGE } from '../../routers/routers';
import { EditCollection } from './editCollection/editCollection.view';
import styles from './tabButton.module.css';

export const TabButton = ({ cName, name, children, icon, color, keyid, update, to }) => {
  const [openEditMenu, setOpenEditMenu] = useState(false);
  const [appear, setAppear] = useState(false);
  const location = useLocation();
  const history = useHistory();
  let cNameStyle;
  // Switch state for classname personalization
  switch (cName) {
    case 'button':
      cNameStyle = styles.button;
      break;
    case 'menu':
      cNameStyle = styles.menu;
      break;
    case 'tab':
      cNameStyle = styles.tab;
      break;
    case 'collection':
      cNameStyle = styles.collection;
      break;
    default:
      cNameStyle = styles.tab2;
      break;
  }
  // Switch state for icon personalization

  let iconStyle;
  switch (icon) {
    case 'tabIcon':
      iconStyle = styles.tabIcon;
      break;
    default:
      iconStyle = styles.icon;
      break;
  }
  const confirmDelete = () => {
    if (window.confirm('Do you really want to delete this Collection?')) {
      shortFetch({
        url: `${COLLECTIONS_PAGE}/${keyid}`,
        method: 'DELETE',
        onSuccess: () => {
          update();
          history.push(`${TASKS_PAGE}`);
        },
      });
    }
  };
  return (
    <button
      className={`${cNameStyle} ${
        location.pathname.includes(name.toLowerCase()) && styles.selected
      }`}
      onMouseEnter={() => setAppear(true)}
      onMouseLeave={() => setAppear(false)}
    >
      <Link
        to={to || '/'}
        className={`${cNameStyle} ${
          location.pathname.includes(name.toLowerCase()) && styles.selected
        }`}
      >
        {!openEditMenu && (
          <>
            <div className={iconStyle}>{children}</div>
            <div>{name}</div>
            <>
              {(cName === 'tab' || cName === 'collection') && (
                <span className={`${styles.editers} ${appear && styles.appear}`}>
                  <FontAwesomeIcon
                    icon="edit"
                    className={styles.iconStyle}
                    onClick={() => setOpenEditMenu(true)}
                  />
                  <FontAwesomeIcon
                    icon="toilet"
                    className={styles.iconStyle}
                    onClick={confirmDelete}
                  />
                </span>
              )}
            </>
          </>
        )}
      </Link>
      <EditCollection
        onOpen={openEditMenu}
        onClose={() => setOpenEditMenu(false)}
        name={name}
        color={color}
        keyid={keyid}
        icon={icon}
        update={() => update()}
      />
    </button>
  );
};
