import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import styles from './tasksPage.module.css';
import ContentContainer from '../../components/contentContainer';
import TabContainer from '../../components/tabContainer';
import Modal from '../../components/modal';
import { TASKS_PAGE } from '../../routers/routers';

export const TasksPage = ({ collections, update }) => {
  const [collectionModal, setCollectionModal] = useState(false);
  const [tasksModal, setTasksModal] = useState(false);
  const [updateContent, setUpdateContent] = useState(false);

  return (
    <div className={styles.subContainer}>
      <TabContainer
        handleModal={() => setCollectionModal(true)}
        collections={collections}
        update={() => update()}
      />
      {collectionModal && (
        <Modal
          name="collection"
          onClose={() => setCollectionModal(false)}
          update={() => update()}
        />
      )}
      <Switch>
        <Route path={`${TASKS_PAGE}/:collectionName/:collectionId`}>
          <ContentContainer updateContent={updateContent} openModal={() => setTasksModal(true)} />
          {tasksModal && (
            <Modal
              name="task"
              onClose={() => setTasksModal(false)}
              update={() => setUpdateContent(!updateContent)}
            />
          )}
        </Route>
        <Route path={TASKS_PAGE}>
          <div className={styles.window}>
            <div className={styles.title}>
              <h1>Please select/create a Collection</h1>
            </div>
          </div>
        </Route>
      </Switch>
    </div>
  );
};
