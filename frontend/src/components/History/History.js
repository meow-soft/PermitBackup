import React from 'react';
import HistoryEntry from './HistoryEntry';
import styles from './History.module.scss';
import { useStore } from '../../stores';
import { observer } from 'mobx-react-lite';

const History = () => {
  const { timeline } = useStore();

  return (
    <section className={styles.history}>
      <ul className={styles.history__list}>
        {timeline.activities.map((entry) => (
          <HistoryEntry key={entry.id} {...entry} />
        ))}
      </ul>
    </section>
  );
};

export default observer(History);
