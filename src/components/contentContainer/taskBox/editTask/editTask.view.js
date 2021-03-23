import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './editTask.module.css';
import { shortFetch } from '../../../../assets/utils/fetch.utils';
import { TASKS_PAGE } from '../../../../routers/routers';

export const EditTask = ({ name, onOpen, onClose, keyid, update }) => {
  const [updatedTask, setUpdatedTask] = useState();

  const refreshTask = () => {
    shortFetch({ url: `${TASKS_PAGE}/${keyid}`, body: { content: updatedTask }, method: 'PATCH' });
    update();
    onClose();
  };
  return (
    <div className={`${styles.modal} ${onOpen && styles.open}`}>
      <input
        className={styles.input}
        type="text"
        defaultValue={name}
        onChange={(e) => setUpdatedTask(e.target.value)}
      />
      <FontAwesomeIcon icon="thumbs-up" onClick={refreshTask} />
      <FontAwesomeIcon icon="times-circle" onClick={onClose} />
    </div>
  );
};
