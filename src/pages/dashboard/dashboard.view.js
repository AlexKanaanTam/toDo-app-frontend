import React, { useEffect, useState } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import styles from './dashboard.module.css';

import NavBar from '../../components/navBar';
import TasksPage from '../tasksPage';
import CollectionsPage from '../collectionsPage';
import { COLLECTIONS_PAGE, TASKS_PAGE } from '../../routers/routers';
import { shortFetch } from '../../assets/utils/fetch.utils';

export const Dashboard = () => {
  const [collections, setCollections] = useState([]);
  const [updateCollection, setUpdateCollection] = useState(false);

  // this fetch, gets an array of all the collections
  useEffect(() => {
    shortFetch({ url: COLLECTIONS_PAGE, method: 'GET', onSuccess: setCollections });
  }, [updateCollection]);

  return (
    <div className={styles.mainContainer}>
      <NavBar />
      <Switch>
        <Route path={TASKS_PAGE}>
          <TasksPage
            collections={collections}
            update={() => setUpdateCollection(!updateCollection)}
          />
        </Route>
        <Route path={COLLECTIONS_PAGE}>
          <CollectionsPage
            collections={collections}
            update={() => setUpdateCollection(!updateCollection)}
            updateCollection={updateCollection}
          />
        </Route>
        <Route path="/user">
          <div className={styles.background}>
            <img
              src="https://blog.hubspot.com/hs-fs/hubfs/tinsanity-404-page.gif?width=990&name=tinsanity-404-page.gif"
              alt="404 message"
            />
            <h2>Please select any of the Tabs</h2>
          </div>
        </Route>
        <Route path="*">
          <Redirect to="/abyss" />
        </Route>
      </Switch>
    </div>
  );
};
