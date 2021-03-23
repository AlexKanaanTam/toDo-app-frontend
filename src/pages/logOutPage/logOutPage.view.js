import React from 'react';

import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faGithub,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import styles from './logOutPage.module.css';
import { TASKS_PAGE } from '../../routers/routers';
import RoundButton from '../../components/roundButton';

export const LogOutPage = () => {
  const history = useHistory();

  return (
    <div className={styles.background}>
      <div className={styles.window}>
        <div className={styles.title}>
          <h1>Thanks for visiting</h1>
        </div>
        <div className={styles.socialMedia}>
          <h3>More about the Author</h3>
          <a href="https://www.facebook.com/PatoDeVille/">
            <FontAwesomeIcon icon={faFacebook} className={styles.icons} />
          </a>
          <a href="https://instagram.com/PatoDeVille">
            <FontAwesomeIcon icon={faInstagram} className={styles.icons} />
          </a>
          <a href="https://twitter.com/PatoDeVille">
            <FontAwesomeIcon icon={faTwitter} className={styles.icons} />
          </a>
          <a href="https://github.com/PatoDeVille">
            <FontAwesomeIcon icon={faGithub} className={styles.icons} />
          </a>
          <a href="https://www.linkedin.com/in/patriciomunozfndz/">
            <FontAwesomeIcon icon={faLinkedin} className={styles.icons} />
          </a>
        </div>
        <RoundButton
          cName="collection"
          name="Go Home"
          handleClick={() => history.push(TASKS_PAGE)}
        />
      </div>
    </div>
  );
};
