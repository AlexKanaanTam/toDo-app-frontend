import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useParams } from 'react-router-dom';
import styles from './contentContainer.module.css';
import RoundButton from '../roundButton';
import TaskBox from './taskBox';
import { shortFetch } from '../../assets/utils/fetch.utils';
import { TASKS_PAGE } from '../../routers/routers';

export const ContentContainer = ({ updateContent, openModal }) => {
  const [updateTasks, setUpdateTasks] = useState(false);
  const [todoTasks, setTodoTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const [tasksBulk, setTasksBulk] = useState([]);
  const { collectionName, collectionId } = useParams();
  useEffect(() => {
    shortFetch({
      url: `${TASKS_PAGE}/search`,
      body: { Collection: collectionId },
      method: 'POST',
      onSuccess: setTasksBulk,
    });
  }, [updateTasks, updateContent, collectionId]);

  useEffect(() => {
    const tdtasks = [];
    const ctasks = [];
    tasksBulk.map((t) => {
      if (t.isChecked) {
        return ctasks.push(t);
      }
      return tdtasks.push(t);
    });
    setCompletedTasks(ctasks);
    setTodoTasks(tdtasks);
  }, [tasksBulk]);

  const handleToggle = (key, status) => {
    shortFetch({ url: `${TASKS_PAGE}/${key}`, body: { isChecked: !status }, method: 'PATCH' });
    setUpdateTasks(!updateTasks);
  };

  const capitalize = (string) => string.charAt(0).toUpperCase() + string.slice(1);

  return (
    <div className={styles.contentContainer}>
      <div className={styles.subContainer}>
        <div className={styles.title}>{capitalize(collectionName)}</div>
        <div className={styles.counter}>
          <p>TODO</p> <p>{`${todoTasks.length} ${todoTasks.length > 1 ? 'Tasks' : 'Task'}`}</p>
        </div>
        <div className={styles.todoTasks}>
          {todoTasks.map((tasks) => (
            <TaskBox
              name={tasks.content}
              status={tasks.isChecked}
              keyid={tasks._id}
              key={tasks._id}
              handleToggle={handleToggle}
              updateTasks={() => setUpdateTasks(!updateTasks)}
            />
          ))}
        </div>
        <div className={styles.counter}>
          <p>Completed</p>
          <p>{`${completedTasks.length} ${completedTasks.length > 1 ? 'Tasks' : 'Task'}`}</p>
        </div>
        <div className={styles.completedTasks}>
          {completedTasks.map((tasks) => (
            <TaskBox
              name={tasks.content}
              status={tasks.isChecked}
              keyid={tasks._id}
              key={tasks._id}
              handleToggle={handleToggle}
              updateTasks={() => setUpdateTasks(!updateTasks)}
            />
          ))}
        </div>
        <div className={styles.buttons}>
          <RoundButton cName="collection" name="Add new task" handleClick={openModal}>
            <FontAwesomeIcon icon="plus" />
          </RoundButton>
        </div>
      </div>
    </div>
  );
};
