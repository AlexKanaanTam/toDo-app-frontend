import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { ICONS } from '../../../assets/icons/icons';
import { shortFetch } from '../../../assets/utils/fetch.utils';
import { COLLECTIONS_PAGE } from '../../../routers/routers';
import styles from './editCollection.module.css';

export const EditCollection = ({ onOpen, onClose, name, color, keyid, icon, update }) => {
  const [newName, setNewName] = useState();
  const [newColor, setNewColor] = useState();
  const [newIcon, setNewIcon] = useState();

  const updateCollection = () => {
    shortFetch({
      url: `${COLLECTIONS_PAGE}/${keyid}`,
      body: {
        name: newName,
        color: newColor,
        icon: newIcon,
      },
      method: 'PATCH',
    });
    update();
    onClose();
  };

  return (
    <div className={`${styles.modal} ${onOpen && styles.open}`}>
      <div className={styles.editers}>
        <input
          className={styles.text}
          type="text"
          onChange={(e) => setNewName(e.target.value)}
          defaultValue={name}
        />
        <input type="color" onChange={(e) => setNewColor(e.target.value)} defaultValue={color} />
        <select
          onChange={(e) => setNewIcon(e.target.value)}
          defaultValue={icon}
          style={{ width: '50px' }}
        >
          {ICONS.map((ic) => (
            <option value={ic} key={ic}>
              {ic}
            </option>
          ))}
        </select>
      </div>
      <span className={styles.icons}>
        <FontAwesomeIcon
          icon="thumbs-up"
          style={{ marginLeft: '5px' }}
          onClick={updateCollection}
        />
        <FontAwesomeIcon icon="times-circle" style={{ marginLeft: '5px' }} onClick={onClose} />
      </span>
    </div>
  );
};
