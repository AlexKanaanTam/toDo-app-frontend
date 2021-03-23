import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './taskBox.module.css';
import { shortFetch } from '../../../assets/utils/fetch.utils';
import { TASKS_PAGE } from '../../../routers/routers';
import { EditTask } from './editTask/editTask.view';

export const TaskBox = ({ name, status, keyid, handleToggle, updateTasks }) => {
  const [edit, setEdit] = useState(false);

  const handleDelete = () => {
    shortFetch({ url: `${TASKS_PAGE}/${keyid}`, method: 'DELETE' });
    updateTasks();
  };
  return (
    <div className={`${styles.container} ${status && styles.checked}`}>
      <div
        className={styles.checkbox}
        onClick={() => {
          handleToggle(keyid, status);
        }}
      >
        {status && <FontAwesomeIcon icon="check" />}
      </div>
      <div
        className={styles.text}
        style={{ textDecoration: `${status ? 'line-through' : 'none'}` }}
        onClick={() => {
          handleToggle(keyid, status);
        }}
      >
        <p>{name}</p>
      </div>
      <FontAwesomeIcon icon="edit" className={styles.icon} onClick={() => setEdit(true)} />
      <FontAwesomeIcon icon="toilet" className={styles.icon} onClick={handleDelete} />
      <EditTask
        name={name}
        onOpen={edit}
        onClose={() => setEdit(false)}
        keyid={keyid}
        update={updateTasks}
      />
    </div>
  );
};
