import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import TabButton from '../tabButton';
import styles from './collection.module.css';
import { TASKS_PAGE } from '../../routers/routers';
import { shortFetch } from '../../assets/utils/fetch.utils';

export const Collection = ({ collection, updateCollection }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    shortFetch({
      url: `${TASKS_PAGE}/search`,
      body: { Collection: collection._id },
      method: 'POST',
      onSuccess: setTasks,
    });
  }, [updateCollection]);

  return (
    <Link
      to={`tasks/${collection.name.toLowerCase()}/${collection._id}`}
      style={{ textDecoration: 'none', color: '#333333' }}
    >
      <div className={styles.mainContainer}>
        <TabButton
          cName="tab2"
          name={collection.name}
          keyid={collection._id}
          icon={collection.icon}
          to={`tasks/${collection.name.toLowerCase()}/${collection._id}`}
        >
          <div
            className={styles.icon}
            style={{
              backgroundColor: `${collection.color}`,
            }}
          >
            <FontAwesomeIcon icon={collection.icon} />
          </div>
        </TabButton>
        <p>{`${tasks.length} ${tasks.length === 1 ? 'Task' : 'Tasks'}`}</p>
      </div>
    </Link>
  );
};
