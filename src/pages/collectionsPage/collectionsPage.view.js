import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './collectionsPage.module.css';
import { Collection } from '../../components/collection/collection.view';
import RoundButton from '../../components/roundButton';
import Modal from '../../components/modal';

export const CollectionsPage = ({ collections, update, updateCollection }) => {
  const [modal, setModal] = useState(false);
  return (
    <div className={styles.mainContainer}>
      <div className={styles.title}>
        <p>Collections</p>
      </div>
      <div className={styles.collections}>
        {collections.map((c) => (
          <Collection collection={c} key={c._id} updateCollection={updateCollection} />
        ))}
      </div>
      <div style={{ alignSelf: 'flex-end', marginRight: '75px' }}>
        <RoundButton
          cName="collection"
          name="Add new collection"
          handleClick={() => setModal(true)}
        >
          <FontAwesomeIcon icon="plus" />
        </RoundButton>
      </div>
      {modal && <Modal name="collection" onClose={() => setModal(false)} update={() => update()} />}
    </div>
  );
};
