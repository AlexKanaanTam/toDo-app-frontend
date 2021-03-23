/* eslint-disable jsx-a11y/no-autofocus */
/* eslint-disable no-alert */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom';
import IconPicker from './iconPicker';
import styles from './modal.module.css';
import ColorPicker from './colorPicker';
import { RoundButton } from '../roundButton/roundButton.view';
import { shortFetch } from '../../assets/utils/fetch.utils';

export const Modal = ({ onClose, name, update }) => {
  const [selectedIcon, setSelectedIcon] = useState('kiwi-bird');
  const [selectedColor, setSelectedColor] = useState('#CCCCCC');
  const [selectedName, setSelectedName] = useState();
  const { collectionId } = useParams();

  const handleCreate = () => {
    let data;
    if (name === 'collection') {
      data = {
        name: selectedName,
        color: selectedColor,
        icon: selectedIcon,
      };
    } else {
      data = {
        content: selectedName,
        isChecked: false,
        Collection: collectionId,
      };
    }

    const analizeSituation = (situation) => {
      if (situation === 'Collection') {
        return selectedIcon && selectedColor && selectedName;
      }
      return !selectedName;
    };

    if (analizeSituation(name)) {
      alert('please put a valid entry');
    } else {
      shortFetch({
        url: `/${name}s`,
        body: data,
        method: 'POST',
      });
      update();
      onClose();
    }
  };

  const handleKeyPress = (key) => {
    if (key === 'Enter') {
      handleCreate();
    }
  };

  return (
    <>
      <div className={styles.background} onClick={onClose} />
      <div className={styles.modal}>
        <div className={styles.title}>
          <h1>
            <FontAwesomeIcon icon="plus" /> Create new {name}
          </h1>
        </div>
        <div className={styles.description}>
          <h3>{`Add new ${name}`}</h3>
          <input
            type="text"
            className={styles.text}
            placeholder={`Create new ${name}`}
            autoFocus
            onChange={(e) => setSelectedName(e.target.value)}
            onKeyUp={(e) => {
              handleKeyPress(e.key);
            }}
          />
          {name === 'collection' && (
            <>
              <IconPicker
                handleIcon={(value) => setSelectedIcon(value)}
                selectedIcon={selectedIcon}
                selectedColor={selectedColor}
              />
              <ColorPicker handleColor={(value) => setSelectedColor(value)} />
            </>
          )}
        </div>
        <div className={styles.buttonContainer}>
          <RoundButton cName="secondary" name="Cancel" handleClick={onClose} />
          <RoundButton cName="primary" name="Create" handleClick={handleCreate} />
        </div>
      </div>
    </>
  );
};
