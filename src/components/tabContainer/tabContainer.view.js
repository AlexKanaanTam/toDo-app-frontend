import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './tabContainer.module.css';
import TabButton from '../tabButton';
import { TASKS_PAGE } from '../../routers/routers';

export const TabContainer = ({ handleModal, collections, update }) => (
  <div className={styles.tabContainer}>
    <div className={styles.title}>
      <p>Collections</p>
    </div>
    <div className={styles.colContainer}>
      {collections.map((collection) => (
        <TabButton
          keyid={collection._id}
          cName="tab"
          name={collection.name}
          color={collection.color}
          icon={collection.icon}
          update={() => update()}
          key={collection._id}
          to={`${TASKS_PAGE}/${collection.name.toLowerCase()}/${collection._id}`}
        >
          <div
            className={styles.tabIcon}
            style={{
              backgroundColor: `${collection.color}`,
            }}
          >
            <FontAwesomeIcon icon={collection.icon} />
          </div>
        </TabButton>
      ))}
    </div>
    <div className={styles.create} onClick={handleModal}>
      <TabButton cName="tab2" name="Add Collection" icon="tabIcon" to={TASKS_PAGE}>
        <FontAwesomeIcon icon="plus" />
      </TabButton>
    </div>
  </div>
);
