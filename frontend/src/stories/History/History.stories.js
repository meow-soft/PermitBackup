import History from '../../components/History/History';
import HistoryEntry from '../../components/History/HistoryEntry';
import { StoreProvider } from '../../stores';

export default {
  title: 'Components/History',
  component: History,
};

export const _History = () => {
  const mockStores = {
    timelineStore: {
      load: async () => {},
      activities: [
        { id: Date.now(), text: 'Event 1', timestamp: Date.now() },
        { id: Date.now(), text: 'Event 2', timestamp: Date.now() },
        { id: Date.now(), text: 'Event 3', timestamp: Date.now() },
        { id: Date.now(), text: 'Event 4', timestamp: Date.now() },
      ],
    },
  };

  return (
    <StoreProvider store={mockStores}>
      <History />
    </StoreProvider>
  );
};

export const _HistoryEntry = () => {
  const mockEntry = {
    id: Date.now(),
    text: 'Event 1',
    timestamp: Date.now(),
  };

  return <HistoryEntry {...mockEntry} />;
};
